import React, { useEffect, useState } from "react";
import { View, TextInput, Image, TouchableOpacity, FlatList, Text } from "react-native";
import CardVaccine from "../../components/CardVaccine";
import { HomeStyle } from "./styles";
import iconSearch from '../../assets/image/search.png'
import ButtonComponent from '../../components/ButtonComponent'
import NavbarComponent from '../../components/NavbarComponent'
import { auth, firestore } from "../../config/FirebaseConfig/firebase";
import { collection, query, where, onSnapshot } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { setNextVaccination, clearNextVaccination } from "../../redux/nextVaccinationSlice";
import FontGlobal from "../../styles/FontGlobal";

const Home = ({navigation}) => {
  const [vaccineList, setVaccineList] = useState([]);
  const [search, setSearch] = useState('');
  const dispatch = useDispatch();
  
  const filteredList = vaccineList.length > 0 ?
    vaccineList.filter(rep => rep.vaccineName.includes(search))
    : [];

  useEffect(() => {
    const q = query(collection(firestore, "vaccines"), where("userId", "==", auth.currentUser.uid));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const vaccines = [];
      const nextVaccination = [];
      dispatch(clearNextVaccination());
      querySnapshot.forEach((doc) => {
        const data = {
          ...doc.data(),
          id: doc.id
        }
        if(doc.data().nextVaccinationDate !== 'Não há próxima dose') {
          const nextVaccines = {
            id: doc.id,
            vaccineName: doc.data().vaccineName,
            nextVaccinationDate: doc.data().nextVaccinationDate
          }
          nextVaccination.push(nextVaccines);
        }
        vaccines.push(data);
      });
      dispatch(setNextVaccination(nextVaccination));
      setVaccineList(vaccines);
    });
  }, [])
  
  return(
    <>
      <NavbarComponent navigation={navigation} status={'logged'} navbarScreen={'Minhas vacinas'} />
      <View style={HomeStyle.main}>
        {
          vaccineList.length === 0 ?
          <View>
            <Text style={[FontGlobal.AveriaRegular, HomeStyle.searchText]}>Não há vacinas cadastradas</Text>
          </View>
          :
          <View style={HomeStyle.searchContainer}>
            <Image style={HomeStyle.searchIcon} resizeMode='stretch' source={iconSearch} />
            <TextInput onChangeText={(value) => setSearch(value)} style={HomeStyle.inputStyle} placeholder="PESQUISAR VACINA..." placeholderTextColor={'#8B8B8B'}/>
          </View>
        }
        <FlatList data={filteredList} renderItem={(item) => <CardVaccine item={item.item} navigation={navigation} />} numColumns={2} />
        <TouchableOpacity onPress={() => navigation.push('NewVaccineNavigation')} style={HomeStyle.btnContainer}>
          <ButtonComponent  btnText={'Nova vacina'} btnColor={'#37BD6D'}/>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;
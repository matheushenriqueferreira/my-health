import React from "react";
import { View, TextInput, Image, TouchableOpacity } from "react-native";
import CardVaccine from "../../components/CardVaccine";
import { HomeStyle } from "./styles";
import iconSearch from '../../assets/image/search.png'
import ButtonComponent from '../../components/ButtonComponent'
import NavbarComponent from '../../components/NavbarComponent'

const Home = () => {
  return(
    <>
    <NavbarComponent status={'logged'} navbarText='Minhas vacinas' />
      <View style={HomeStyle.main}>
        <View style={HomeStyle.searchContainer}>
          <Image style={HomeStyle.searchIcon} resizeMode='stretch' source={iconSearch} />
          <TextInput style={HomeStyle.inputStyle} placeholder="PESQUISAR VACINA..." placeholderTextColor={'#8B8B8B'}/>
        </View>
        <View style={HomeStyle.vaccineList}>
          <CardVaccine />
          <CardVaccine />
          <CardVaccine />
        </View>
        <TouchableOpacity style={HomeStyle.btnContainer}>
          <ButtonComponent  btnText={'Nova vacina'} btnColor={'#37BD6D'}/>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default Home;
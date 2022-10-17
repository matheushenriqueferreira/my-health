import React from "react";
import { View, TouchableOpacity, FlatList, Text } from "react-native";
import {NextVaccinesStyle} from './styles';
import NavbarComponent from '../../components/NavbarComponent';
import NextVaccinesComponent from "../../components/NextVaccinesComponent";
import ButtonComponent from '../../components/ButtonComponent';
import { useSelector } from "react-redux";
import FontGlobal from "../../styles/FontGlobal";

const NextVaccines = ({navigation}) => {
  const {nextVaccination} = useSelector(state => state.nextVaccination);
  return(
    <>
      <NavbarComponent navigation={navigation} navbarScreen={'Próximas vacinas'} status={'logged'} />
      <View style={NextVaccinesStyle.main}>
        {
          nextVaccination.length !== 0 ?
          <FlatList data={nextVaccination} renderItem={ (item) => <NextVaccinesComponent item={item.item} /> } />
          :
          <Text style={[FontGlobal.AveriaRegular, NextVaccinesStyle.textStyle]}>Não há próximas vacinas</Text>
        }
        <View style={NextVaccinesStyle.mainContainer2}>
          <TouchableOpacity onPress={() => navigation.push('NewVaccineNavigation')}>
            <ButtonComponent btnText={'Nova vacina'} btnColor={'#37BD6D'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default NextVaccines;
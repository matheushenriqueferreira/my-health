import React, {useState} from "react";
import { CardVaccineStyle } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import test from '../../assets/image/image-comprovante.png'
import { editVaccine } from "../../redux/vaccineSlice";
import {useDispatch} from 'react-redux'
import FontGlobal from "../../styles/FontGlobal";

const CardVaccine = ({navigation, item}) => {
  const {id ,vaccineName, userId, vaccineImageUrl, vaccineDate, nextVaccinationDate, dose, latitude, longitude} = item;
  const dispatch = useDispatch();

  return(
    <TouchableOpacity style={CardVaccineStyle.main} onPress={() => {
      dispatch(editVaccine({id: id, vaccineName: vaccineName, userId: userId, vaccineImageUrl: vaccineImageUrl, vaccineDate: vaccineDate, nextVaccinationDate: nextVaccinationDate, dose: dose, latitude: latitude, longitude: longitude})),
      navigation.push('EditVaccineNavigation');
    }}>
      <View style={CardVaccineStyle.container1}>
        <Text style={[CardVaccineStyle.textColorBlue, CardVaccineStyle.name, FontGlobal.AveriaRegular]}>{vaccineName}</Text>
        <Text style={[CardVaccineStyle.dose, FontGlobal.AveriaRegular]}>{dose}</Text>
        <Text style={[CardVaccineStyle.textColorBlue, CardVaccineStyle.date, FontGlobal.AveriaRegular]}>{vaccineDate}</Text>
      </View>
      <View style={CardVaccineStyle.container2}>
        <Image style={CardVaccineStyle.image} resizeMode='stretch' source={{uri: vaccineImageUrl}} />
      </View>
      <View style={CardVaccineStyle.container3}>
        {
          nextVaccinationDate === 'Não há próxima dose' ?
          <Text style={[CardVaccineStyle.container3Text, FontGlobal.AveriaRegular]}>{nextVaccinationDate}</Text>
          :
          <Text style={[CardVaccineStyle.container3Text, FontGlobal.AveriaRegular]}>Próxima dose em: {nextVaccinationDate}</Text>
        }
      </View>
    </TouchableOpacity>
  );
}

export default CardVaccine;
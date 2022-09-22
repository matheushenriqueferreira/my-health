import React, {useState} from "react";
import { CardVaccineStyle } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import test from '../../assets/image/image-comprovante.png'

const CardVaccine = () => {
  const [vaccineName, setVaccineName] = useState('BCG');
  const [dose, setDose] = useState('Dose única');
  const [vaccineDate, setVaccineDate] = useState('11/06/2022');
  const [vaccineImage, setVaccineImage] = useState('');
  const [nextVaccineDate, setNextVaccineDate] = useState('Não há próxima dose');
  
  return(
    <TouchableOpacity style={CardVaccineStyle.main}>
      <View style={CardVaccineStyle.container1}>
        <Text style={[CardVaccineStyle.textColorBlue, CardVaccineStyle.name]}>{vaccineName}</Text>
        <Text style={CardVaccineStyle.dose}>{dose}</Text>
        <Text style={[CardVaccineStyle.textColorBlue, CardVaccineStyle.date]}>{vaccineDate}</Text>
      </View>
      <View style={CardVaccineStyle.container2}>
        <Image style={CardVaccineStyle.image} resizeMode='stretch' source={test} />
      </View>
      <View style={CardVaccineStyle.container3}>
        <Text style={CardVaccineStyle.container3Text}>{nextVaccineDate}</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardVaccine;
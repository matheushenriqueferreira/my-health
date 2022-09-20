import React from "react";
import { CardVaccineStyle } from "./styles";
import { View, Text, Image, TouchableOpacity } from "react-native";
import test from '../../assets/image/image-comprovante.png'

const CardVaccine = () => {
  return(
    <TouchableOpacity style={CardVaccineStyle.main}>
      <View style={CardVaccineStyle.container1}>
        <Text style={[CardVaccineStyle.textColorBlue, CardVaccineStyle.name]}>BCG</Text>
        <Text style={CardVaccineStyle.dose}>Dose única</Text>
        <Text style={[CardVaccineStyle.textColorBlue, CardVaccineStyle.date]}>11/06/2022</Text>
      </View>
      <View style={CardVaccineStyle.container2}>
        <Image style={CardVaccineStyle.image} resizeMode='stretch' source={test} />
      </View>
      <View style={CardVaccineStyle.container3}>
        <Text style={CardVaccineStyle.container3Text}>Não há próxima dose</Text>
      </View>
    </TouchableOpacity>
  );
}

export default CardVaccine;
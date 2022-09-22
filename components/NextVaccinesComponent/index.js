import React, {useState} from "react";
import { TouchableOpacity, Text } from "react-native";
import { NextVaccinesComponentStyle } from "./styles";

const NextVaccinesComponent = () => {
  const [vaccineName, setVaccineName] = useState('BCG');
  const [vaccineDate, setVaccineDate] = useState('20/09/2022');
  
  return(
    <TouchableOpacity style={NextVaccinesComponentStyle.conatiner}>
      <Text style={NextVaccinesComponentStyle.vaccineName}>{vaccineName}</Text>
      <Text style={NextVaccinesComponentStyle.nextVaccineDate}>{vaccineDate}</Text>
    </TouchableOpacity>
  );
}

export default NextVaccinesComponent;
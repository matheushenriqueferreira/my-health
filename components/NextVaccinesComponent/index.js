import React, {useState} from "react";
import { View, Text } from "react-native";
import { NextVaccinesComponentStyle } from "./styles";
import FontGlobal from "../../styles/FontGlobal";

const NextVaccinesComponent = ({item}) => {
  const [vaccineName, setVaccineName] = useState(item.vaccineName);
  const [vaccineDate, setVaccineDate] = useState(item.nextVaccinationDate);
  
  return(
    <View style={NextVaccinesComponentStyle.conatiner}>
      <Text style={[NextVaccinesComponentStyle.vaccineName, FontGlobal.AveriaRegular]}>{vaccineName}</Text>
      <Text style={[NextVaccinesComponentStyle.nextVaccineDate, FontGlobal.AveriaRegular]}>{vaccineDate}</Text>
    </View>
  );
}

export default NextVaccinesComponent;
import React from "react";
import { View, Text } from "react-native";
import { ButtonComponentStyle } from "./styles";
import FontGlobal from '../../styles/FontGlobal';

const ButtonComponent = ({btnText, btnColor}) => {
  return(
    <View style={[ButtonComponentStyle.btnDisplay, {backgroundColor: btnColor}]}>
      <Text style={[ButtonComponentStyle.btnTextStyle, FontGlobal.AveriaRegular]}>{btnText}</Text>
    </View>
  );
}

export default ButtonComponent;
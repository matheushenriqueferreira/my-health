import React from "react";
import { View, Text } from "react-native";
import { ButtonComponentStyle } from "./styles";


const ButtonComponent = ({btnText, btnColor}) => {
  return(
    <View style={[ButtonComponentStyle.btnDisplay, {backgroundColor: btnColor}]}>
      <Text style={ButtonComponentStyle.btnTextStyle}>{btnText}</Text>
    </View>
  );
}

export default ButtonComponent;
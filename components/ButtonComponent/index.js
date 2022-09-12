import React from "react";
import { TouchableOpacity, Text } from "react-native";
import { ButtonComponentStyle } from "./styles";


const ButtonComponent = ({btnText, btnColor}) => {
  return(
    <TouchableOpacity style={[ButtonComponentStyle.btnDisplay, {backgroundColor: btnColor}]}>
      <Text style={ButtonComponentStyle.btnTextStyle}>{btnText}</Text>
    </TouchableOpacity>
  );
}

export default ButtonComponent;
import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RecoverStyle } from "./styles";
import NavbarComponent from '../../components/NavbarComponent';
import ButtonComponent from '../../components/ButtonComponent';

const Recover = () => {
  return(
    <>
      <NavbarComponent status='notLogged' navbarText='MyHealth' />
      <View style={RecoverStyle.main}>
        <View style={RecoverStyle.mainContainer}>
          <View style={RecoverStyle.inputLabel}>
            <Text style={RecoverStyle.labelStyle}>E-mail</Text>
            <TextInput style={RecoverStyle.inputStyle}/>
          </View>
          <TouchableOpacity style={RecoverStyle.btnStyle}>
            <ButtonComponent btnText='Recuperar senha' btnColor='#37BD6D'/>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default Recover;

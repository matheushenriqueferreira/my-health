import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RecoverStyle } from "./styles";
import NavbarComponent from '../../components/NavbarComponent';
import ButtonComponent from '../../components/ButtonComponent';

const Recover = () => {
  const [userEmail, setUserEmail] = useState('');

  return(
    <>
      <NavbarComponent status='notLogged' navbarText='MyHealth' />
      <View style={RecoverStyle.main}>
        <View style={RecoverStyle.mainContainer}>
          <View style={RecoverStyle.inputLabel}>
            <Text style={RecoverStyle.labelStyle}>E-mail</Text>
            <TextInput onChangeText={(value) => {setUserEmail(value)}} value={userEmail} style={RecoverStyle.inputStyle} keyboardType={'email-address'}/>
          </View>
          {
            userEmail !== '' ?
            <TouchableOpacity style={RecoverStyle.btnStyle}>
              <ButtonComponent btnText='Recuperar senha' btnColor='#37BD6D'/>
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => alert("Insira o seu e-mail")} style={[RecoverStyle.btnStyle, RecoverStyle.btnStyleDisabled]}>
              <ButtonComponent btnText='Recuperar senha' btnColor='#37BD6D'/>
            </TouchableOpacity>
          }
        </View>
      </View>
    </>
  );
}

export default Recover;

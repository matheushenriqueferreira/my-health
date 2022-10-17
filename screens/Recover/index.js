import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import { RecoverStyle } from "./styles";
import NavbarComponent from '../../components/NavbarComponent';
import ButtonComponent from '../../components/ButtonComponent';
import { auth } from '../../config/FirebaseConfig/firebase';
import { sendPasswordResetEmail } from 'firebase/auth';
import FontGlobal from '../../styles/FontGlobal';

const Recover = ({navigation}) => {
  const [userEmail, setUserEmail] = useState('');

  const handlePasswordReset = () => {
    sendPasswordResetEmail(auth, userEmail)
    .then(() => {
      alert("Foi enviado um e-mail para resetar a sua senha!");
      navigation.pop();
    })
    .catch((error) => {
      switch(error.code){
        case 'auth/invalid-email':
          alert('E-mail inválido');  
        break;
        case 'auth/user-not-found':
          alert('Não existe cadastro vinculado a este e-mail!');
        break;
        default: alert(error.code);
      }
    })
  }

  return(
    <>
      <NavbarComponent status='notLogged' navbarScreen={'MyHealth'} />
      <View style={RecoverStyle.main}>
        <View style={RecoverStyle.mainContainer}>
          <View style={RecoverStyle.inputLabel}>
            <Text style={[RecoverStyle.labelStyle, FontGlobal.AveriaRegular]}>E-mail</Text>
            <TextInput onChangeText={(value) => {setUserEmail(value)}} value={userEmail} style={[RecoverStyle.inputStyle, FontGlobal.AveriaRegular]} keyboardType={'email-address'}/>
          </View>
          {
            userEmail !== '' ?
            <TouchableOpacity onPress={() => handlePasswordReset()} style={RecoverStyle.btnStyle}>
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

import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, ScrollView, ActivityIndicator } from "react-native";
import { RegisterStyle } from './styles'
import NavbarComponent from "../../components/NavbarComponent";
import ButtonComponent from '../../components/ButtonComponent';

const Register = () => {
  const [userName, setUserName] = useState('');
  const [userSex, setUserSex] = useState('');
  const [userDate, setUserDate] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepeatPass, setUserRepeatPass] = useState('');
  const [msgPass, setMsgPass] = useState('');
  const [loading, setLoading] = useState(false);


  const handlePassword = (password) => {
    if(password !== '') {
      if(password === userRepeatPass) {
        setMsgPass('Ok');
      }
      else {
        setMsgPass('Error');
      }
    }
    else {
      setMsgPass('');
      setUserRepeatPass('');
    }
  }

  const handleRepeatPasword = (rPass) => {
    if(rPass !== '') {
      setMsgPass('');
    }
    if(rPass === userPassword) {
      setMsgPass('Ok');
    }
    else {
      setMsgPass('Error');
    }
  }

  return(
    <>
      <NavbarComponent status='notLogged' navbarText='MyHealth' />
        <View style={RegisterStyle.main}>
          <ScrollView style={RegisterStyle.mainContent}>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Nome completo</Text>
              <TextInput onChangeText={(value) => {setUserName(value)}} value={userName} style={RegisterStyle.inputStyle} />
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Sexo</Text>
              <TextInput onChangeText={(value) => {setUserSex(value)}} value={userSex} style={RegisterStyle.inputStyle} />
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Data nascimento</Text>
              <TextInput onChangeText={(value) => {setUserDate(value)}} value={userDate} style={RegisterStyle.inputStyle} keyboardType={'numeric'} />
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>E-mail</Text>
              <TextInput onChangeText={(value) => {setUserEmail(value)}} value={userEmail} style={RegisterStyle.inputStyle} keyboardType={'email-address'} />
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Senha</Text>
              <TextInput onChangeText={(value) => {
                setUserPassword(value),
                handlePassword(value)
              }} value={userPassword} style={RegisterStyle.inputStyle} secureTextEntry={true} />
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Repetir senha</Text>
              <TextInput onChangeText={(value) => {
                setUserRepeatPass(value),
                handleRepeatPasword(value)
              }} value={userRepeatPass} style={RegisterStyle.inputStyle} secureTextEntry={true} />
            </View>
            {
              msgPass === 'Error' && <Text style={RegisterStyle.passMessage}>Senha não confere!</Text>
            }
            {
              loading ?
              <View style={RegisterStyle.btnContainer}>
                <ActivityIndicator size="large" color="#37BD6D" />
              </View>
              :
              userDate !== '' && userEmail !== '' && userName !== '' && userPassword !== '' && userRepeatPass !== '' && msgPass === 'Ok' ?
              <TouchableOpacity style={RegisterStyle.btnContainer}>
                <ButtonComponent btnText='Cadastrar' btnColor='#37BD6D'/>
              </TouchableOpacity>
              :
              <TouchableOpacity onPress={() => alert("Verifique os campos")} style={[RegisterStyle.btnContainer, RegisterStyle.btnDisabled]}>
                <ButtonComponent btnText='Cadastrar' btnColor='#37BD6D'/>
              </TouchableOpacity>
            }
            
          </ScrollView>
        </View>
    </>
  );
}

export default Register;
import React, { useEffect, useState } from "react";
import { View, TouchableOpacity, Text, TextInput, ScrollView, ActivityIndicator, Image } from "react-native";
import { RegisterStyle } from './styles'
import NavbarComponent from "../../components/NavbarComponent";
import ButtonComponent from '../../components/ButtonComponent';
import { RadioButton } from "react-native-paper";
import DatePicker from 'react-native-date-picker'
import calendarIcon from '../../assets/image/calendar.png'

const Register = () => {
  const [userName, setUserName] = useState('');
  const [userSex, setUserSex] = useState('Masculino');
  const [userDate, setUserDate] = useState(new Date());
  const [userDateText, setUserDateText] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [userRepeatPass, setUserRepeatPass] = useState('');
  const [msgPass, setMsgPass] = useState(false);
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const handlePassword = (password) => {
    setMsgPass(false)
    setUserRepeatPass('');
  }

  const handleRepeatPasword = (rPass) => {
    if(rPass === '') {
      setMsgPass(false);
    }
    if(rPass === userPassword) {
      setMsgPass(false);
    }
    else {
      setMsgPass(true);
    }
  }

  const handleDate = (date) => {
    const day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
    const month = (date.getMonth()+1) < 10 ? '0' + (date.getMonth()+1) : (date.getMonth()+1);
    const year = date.getFullYear();
    setUserDateText(`${day}/${month}/${year}`);
  }

  return(
    <>
      <NavbarComponent status='notLogged' navbarText='MyHealth' />
      <View style={RegisterStyle.main}>
        <View style={RegisterStyle.mainContainer1}>
          <ScrollView>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Nome completo</Text>
              <TextInput onChangeText={(value) => setUserName(value)} value={userName} style={RegisterStyle.inputStyle} />
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Sexo</Text>
              <View style={RegisterStyle.radioButtonContainer}>
                <RadioButton color="#419ED7" value={userSex} uncheckedColor="#FFFFFF" status={ userSex === 'Masculino' ? 'checked' : 'unchecked'} onPress={() => setUserSex('Masculino')} />
                <Text onPress={() => setUserSex('Masculino')}>Masculino</Text>
              </View>
              <View style={RegisterStyle.radioButtonContainer}>
                <RadioButton color="#419ED7" uncheckedColor="#FFFFFF" value={userSex} status={ userSex === 'Feminino' ? 'checked' : 'unchecked'} onPress={() => setUserSex('Feminino')} />
                <Text onPress={() => setUserSex('Feminino')}>Feminino</Text>
              </View>
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>Data nascimento</Text>
              <TouchableOpacity onPress={() => setOpen(true)} style={RegisterStyle.userDateContainer}>
                <Text style={RegisterStyle.blueColor}>{userDateText}</Text>
                <Image source={calendarIcon} style={RegisterStyle.calendarIcon}></Image>
              </TouchableOpacity>
              <DatePicker
                mode="date"
                modal
                open={open}
                date={userDate}
                onConfirm={(date) => {
                  setOpen(false)
                  setUserDate(date),
                  handleDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
            </View>
            <View style={RegisterStyle.dataContainer}>
              <Text style={RegisterStyle.labelStyle}>E-mail</Text>
              <TextInput onChangeText={(value) => setUserEmail(value)} value={userEmail} style={RegisterStyle.inputStyle} keyboardType={'email-address'} />
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
              }} value={userRepeatPass} style={RegisterStyle.inputStyle} ke secureTextEntry={true} />
            </View>
            {
              msgPass && <Text style={RegisterStyle.errorPass}>Senha não confere</Text>
            }
          </ScrollView>
        </View>
        <View style={RegisterStyle.mainContainer2}>
          {
            userName !== '' && userSex !== '' && userDateText !== '' && userEmail !== '' && userPassword !== '' && userRepeatPass !== '' && !msgPass ?
            <TouchableOpacity>
              <ButtonComponent btnColor='#37BD6D' btnText='Cadastrar' />
            </TouchableOpacity>
            :
            <TouchableOpacity onPress={() => alert('Verifique os campos')} style={{opacity: 0.5}}>
              <ButtonComponent btnColor='#37BD6D' btnText='Cadastrar' />
            </TouchableOpacity>
          }
        </View>
      </View>
    </>
  );
}

export default Register;
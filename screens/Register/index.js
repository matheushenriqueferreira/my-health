import React, { useState } from "react";
import { View, TouchableOpacity, Text, TextInput, Image, ActivityIndicator } from "react-native";
import { RegisterStyle } from './styles'
import NavbarComponent from "../../components/NavbarComponent";
import ButtonComponent from '../../components/ButtonComponent';
import { RadioButton } from "react-native-paper";
import DatePicker from 'react-native-date-picker'
import calendarIcon from '../../assets/image/calendar.png'
import { auth, firestore } from '../../config/FirebaseConfig/firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { doc, setDoc } from "firebase/firestore";
import FontGlobal from "../../styles/FontGlobal";

const Register = ({navigation}) => {
  const [userName, setUserName] = useState('');
  const [userSex, setUserSex] = useState('');
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

  const handleRegister = () => {
    setLoading(true);
    createUserWithEmailAndPassword(auth, userEmail, userPassword)
    .then((response) => {
      const userData = {
        userName,
        userSex,
        userDate: userDateText,
        userEmail
      }
      setDoc(doc(firestore, 'userData', response.user.uid), userData)
      .then(() => {
        const name = userName.split(' ');//Para pegar apenas o primeiro nome
        updateProfile(response.user, {displayName: name[0]})//Atualizar display name
        .then(() => {
          navigation.pop();
        })
        .catch((error) => alert(error.code))
      })
      .catch((error) => alert(error.code));
    })
    .catch((error) => {
      setLoading(false);
      switch(error.code) {
        case 'auth/weak-password':
          alert('Senha fraca');
        break;
        case 'auth/email-already-in-use':
          alert('Já existe uma conta vinculada a este e-mail!');
        break;
        case 'auth/invalid-email':
          alert('E-mail inválido');
        break;
        default: alert(error.code);
      }
    })
  }

  return(
    <>
      <NavbarComponent status='notLogged' navbarScreen={'MyHealth'} />
      <View style={RegisterStyle.main}>
        <View style={RegisterStyle.mainContainer1} >
          <View style={RegisterStyle.dataContainer} >
            <View style={RegisterStyle.inputLabelContainer}>
              <Text style={[RegisterStyle.labelStyle, FontGlobal.AveriaBold]}>Nome completo</Text>
              <TextInput onChangeText={(value) => setUserName(value)} value={userName} style={[RegisterStyle.inputStyle, FontGlobal.AveriaRegular]}/>
            </View>
            <View style={RegisterStyle.inputLabelContainer}>
              <Text style={[RegisterStyle.labelStyle, FontGlobal.AveriaBold]}>Sexo</Text>
              <View style={RegisterStyle.radioButtonRow}>
                <View style={RegisterStyle.radioButtonContainer}>
                  <RadioButton color="#419ED7" value={userSex} uncheckedColor="#FFFFFF" status={ userSex === 'Masculino' ? 'checked' : 'unchecked'} onPress={() => setUserSex('Masculino')} />
                  <Text onPress={() => setUserSex('Masculino')} style={[{color: '#FFFFFF', fontSize: 16}, FontGlobal.AveriaBold]}>Masculino</Text>
                </View>
                <View style={RegisterStyle.radioButtonContainer}>
                  <RadioButton color="#419ED7" uncheckedColor="#FFFFFF" value={userSex} status={ userSex === 'Feminino' ? 'checked' : 'unchecked'} onPress={() => setUserSex('Feminino')} />
                  <Text onPress={() => setUserSex('Feminino')} style={[{color: '#FFFFFF', fontSize: 16}, FontGlobal.AveriaBold]}>Feminino</Text>
                </View>
              </View>
            </View>
            <View style={RegisterStyle.inputLabelContainer}>
              <Text style={[RegisterStyle.labelStyle, FontGlobal.AveriaBold]}>Data nascimento</Text>
              <TouchableOpacity onPress={() => setOpen(true)} style={RegisterStyle.userDateContainer}>
                <Text style={[RegisterStyle.blueColor, FontGlobal.AveriaRegular]}>{userDateText}</Text>
                <Image source={calendarIcon} style={RegisterStyle.calendarIcon}></Image>
              </TouchableOpacity>
            </View>
            <View style={RegisterStyle.inputLabelContainer}>
              <Text style={[RegisterStyle.labelStyle, FontGlobal.AveriaBold]}>E-mail</Text>
              <TextInput onChangeText={(value) => setUserEmail(value)} value={userEmail} style={[RegisterStyle.inputStyle, FontGlobal.AveriaRegular]} keyboardType={'email-address'} />
            </View>
            <View style={RegisterStyle.inputLabelContainer}>
              <Text style={[RegisterStyle.labelStyle, FontGlobal.AveriaBold]}>Senha</Text>
              <TextInput onChangeText={(value) => {
                setUserPassword(value),
                handlePassword(value)
              }} value={userPassword} style={[RegisterStyle.inputStyle, FontGlobal.AveriaRegular]} secureTextEntry={true} />
            </View>
            <View>
              <View style={RegisterStyle.inputLabelContainer}>
                <Text style={[RegisterStyle.labelStyle, FontGlobal.AveriaBold]}>Repetir senha</Text>
                <TextInput onChangeText={(value) => {
                  setUserRepeatPass(value),
                  handleRepeatPasword(value)
                }} value={userRepeatPass} style={[RegisterStyle.inputStyle, FontGlobal.AveriaRegular]} secureTextEntry={true} />
              </View>
              {
                msgPass && <Text style={[RegisterStyle.errorPass, FontGlobal.AveriaRegular]}>Senha não confere</Text>
              }
            </View>
          </View>
        </View>
        <View style={RegisterStyle.mainContainer2}>
          {
            userName !== '' && userSex !== '' && userDateText !== '' && userEmail !== '' && userPassword !== '' && userRepeatPass !== '' && !msgPass && !loading ?
            <TouchableOpacity onPress={() => handleRegister()}>
              <ButtonComponent btnColor='#37BD6D' btnText='Cadastrar' />
            </TouchableOpacity>
            :
            userName === '' || userSex === '' || userDateText === '' || userEmail === '' || userPassword === '' || userRepeatPass === '' || msgPass && !loading ?
            <TouchableOpacity onPress={() => alert('Verifique os campos')} style={{opacity: 0.5}}>
              <ButtonComponent btnColor='#37BD6D' btnText='Cadastrar' />
            </TouchableOpacity>
            :
            <ActivityIndicator size={'large'} color={'#37BD6D'}/>
          }
        </View>
      </View>
      <DatePicker title={'Selecione a data'} confirmText={'Confirmar'} cancelText={'Cancelar'} textColor={"#419ED7"} onConfirm={(date) => {setOpen(false) 
        setUserDate(date),
        handleDate(date)
        }} onCancel={() => {setOpen(false)}} mode="date" modal open={open} date={userDate}
      />
    </>
  );
}

export default Register;
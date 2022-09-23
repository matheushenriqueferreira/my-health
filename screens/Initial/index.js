import React, {useState} from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity, ActivityIndicator} from 'react-native';
import iconVacine from '../../assets/image/icon-vaccine.png';
import { InitialStyle } from './styles';
import bgVaccine from '../../assets/image/bgVaccine.jpeg'
import ButtonComponent from '../../components/ButtonComponent';
import { auth } from '../../config/FirebaseConfig/firebase';
import { signInWithEmailAndPassword } from 'firebase/auth';

const Initial = ({navigation}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginError, setLoginError] = useState(false); 
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoginError(false);
    setLoading(true);
    signInWithEmailAndPassword(auth, userEmail, userPassword)
    .then(() => {
      setLoading(false);
      navigation.navigate('LoggedNavigation');
    })
    .catch(() => {
      setLoading(false);
      setLoginError(true);
    })
  }

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  }


  return(
    <ImageBackground source={bgVaccine} resizeMode="cover" style={InitialStyle.homeBgImage}>
      <View style={InitialStyle.mainStyle}>
        <View style={InitialStyle.container1}>
          <Image source={iconVacine} style={InitialStyle.vaccineImg} />
          <Text style={InitialStyle.title}>MyHealth</Text>
        </View>
        <View>
          <Text style={InitialStyle.subtitle}>Controle as suas vacinas e fique seguro</Text>
        </View>
        <View>
          <View style={InitialStyle.inputLabelFlex}>
            <Text style={InitialStyle.labelStyle}>E-mail</Text>
            <TextInput onChangeText={setUserEmail} value={userEmail} keyboardType='email-address' placeholder='Insira o seu e-mail' style={InitialStyle.inputStyle} />
          </View>
          <View style={InitialStyle.inputLabelFlex}>
            <Text style={InitialStyle.labelStyle}>Senha</Text>
            <TextInput onChangeText={setUserPassword} value={userPassword} secureTextEntry={true} placeholder='Insira a sua senha' style={InitialStyle.inputStyle} />
          </View>
          {
            loginError && 
            <Text style={InitialStyle.passwordError}>E-mail e/ou senha inválidos.</Text>
          }
        </View>
        {
          userEmail !== '' && userPassword !== '' && !loading ?
          <TouchableOpacity onPress={() => handleLogin()}>
            <ButtonComponent btnText="Entrar" btnColor="#37BD6D"/>
          </TouchableOpacity>
          :
          userEmail === '' || userPassword === '' && !loading ?
          <TouchableOpacity onPress={() => alert('Preencha todos os campos!')} style={{opacity: 0.5}}>
            <ButtonComponent btnText="Entrar" btnColor="#37BD6D"/>
          </TouchableOpacity>
          :
          <ActivityIndicator size={'large'} color='#37BD6D' />
        }
        <TouchableOpacity onPress={() => handleNavigation('register')}>
          <ButtonComponent btnText="Criar minha conta" btnColor="#419ED7"/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleNavigation('recover')}>
          <ButtonComponent btnText="Esqueci minha senha" btnColor="#B0CCDE"/>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
}

export default Initial;
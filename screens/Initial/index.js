import React, {useState} from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import iconVacine from '../../assets/image/icon-vaccine.png';
import { InitialStyle } from './styles';
import bgVaccine from '../../assets/image/bgVaccine.jpeg'
import ButtonComponent from '../../components/ButtonComponent';


const Initial = ({navigation}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loginError, setLoginError] = useState(false); 

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
        <TouchableOpacity>
          <ButtonComponent btnText="Entrar" btnColor="#37BD6D"/>
        </TouchableOpacity>
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
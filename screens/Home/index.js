import React, {useState} from 'react';
import { Text, View, Image, ImageBackground, TextInput, TouchableOpacity} from 'react-native';
import iconVacine from '../../assets/image/icon-vaccine.png';
import { HomeStyle } from './styles';
import bgVaccine from '../../assets/image/bgVaccine.jpeg'
import ButtonComponent from '../../components/ButtonComponent';


const Home = ({navigation}) => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleNavigation = (screen) => {
    navigation.navigate(screen);
  }

  return(
    <ImageBackground source={bgVaccine} resizeMode="cover" style={HomeStyle.homeBgImage}>
      <View style={HomeStyle.mainStyle}>
        <View style={HomeStyle.container1}>
          <Image source={iconVacine} style={HomeStyle.vaccineImg} />
          <Text style={HomeStyle.title}>MyHealth</Text>
        </View>
        <View>
          <Text style={HomeStyle.subtitle}>Controle as suas vacinas e fique seguro</Text>
        </View>
        <View>
          <View style={HomeStyle.inputLabelFlex}>
            <Text style={HomeStyle.labelStyle}>E-mail</Text>
            <TextInput onChangeText={setUserEmail} value={userEmail} keyboardType='email-address' placeholder='Insira o seu e-mail' style={HomeStyle.inputStyle} />
          </View>
          <View style={HomeStyle.inputLabelFlex}>
            <Text style={HomeStyle.labelStyle}>Senha</Text>
            <TextInput onChangeText={setUserPassword} value={userPassword} secureTextEntry={true} placeholder='Insira a sua senha' style={HomeStyle.inputStyle} />
          </View>
          <Text style={HomeStyle.passwordError}>E-mail e/ou senha inválidos.</Text>
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

export default Home;
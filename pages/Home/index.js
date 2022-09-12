import React, {useState} from 'react';
import { Text, View, Image, ImageBackground, TextInput} from 'react-native';
import iconVacine from '../../assets/image/icon-vaccine.png';
import { HomeStyle } from './styles';
import bgVaccine from '../../assets/image/bgVaccine.jpeg'
import ButtonComponent from '../../components/ButtonComponent';


const Home = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

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
            <TextInput onChangeText={setUserPassword} value={userPassword} placeholder='Insira a sua senha' style={HomeStyle.inputStyle} />
          </View>
          <Text style={HomeStyle.passwordError}>E-mail e/ou senha inválidos.</Text>
        </View>
        <ButtonComponent btnText="Entrar" btnColor="#37BD6D"/>
        <ButtonComponent btnText="Criar minha conta" btnColor="#419ED7"/>
        <ButtonComponent btnText="Esqueci minha senha" btnColor="#B0CCDE"/>
      </View>
    </ImageBackground>
  );
}

export default Home;
import React from 'react';
import { Text, View, Image, ImageBackground, TextInput, Button } from 'react-native';
import iconVacine from '../../assets/icon-vaccine.png';
import { HomeStyle } from './styles';
import bgVaccine from '../../assets/bgVaccine.jpeg'

const Home = () => {
  const [userEmail, setUserEmail] = React.useState("");
  const [userPassword, setUserPassword] = React.useState("");

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
      </View>
    </ImageBackground>
  );
}

export default Home;
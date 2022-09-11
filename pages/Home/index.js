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
      <View style={HomeStyle.homeMain}>
        <View style={HomeStyle.homeContainer1}>
          <Image source={iconVacine} style={HomeStyle.homeVaccineImg} />
          <Text style={HomeStyle.homeTitle}>MyHealth</Text>
        </View>
        <View>
          <Text>Controle as suas vacinas e fique seguro</Text>
        </View>
        <View>
          <View style={HomeStyle.homeInputLabelFlex}>
            <Text>E-mail</Text>
            <TextInput onChangeText={setUserEmail} value={userEmail} keyboardType='email-address' placeholder='Insira o seu e-mail' style={HomeStyle.homeInputStyle} />
          </View>
          <View style={HomeStyle.homeInputLabelFlex}>
            <Text>Senha</Text>
            <TextInput onChangeText={setUserPassword} value={userPassword} placeholder='Insira a sua senha' style={HomeStyle.homeInputStyle} />
          </View>
          <Text>E-mail e/ou senha inválidos.</Text>
        </View>
      </View>
    </ImageBackground>
  );
}

export default Home;
import React from 'react';
import { Text, View, Image, ImageBackground } from 'react-native';
import iconVacine from '../../assets/icon-vaccine.png';
import { HomeStyle } from './styles';
import bgVaccine from '../../assets/bgVaccine.jpeg'

const Home = () => {
  return(
    <View style={HomeStyle.homeMain}>
      <ImageBackground source={bgVaccine} resizeMode="cover" style={HomeStyle.homeBgImage}/>
      <View style={HomeStyle.homeContainer1}>
        <Image source={iconVacine} style={HomeStyle.homeVaccineImg} />
        <Text style={HomeStyle.homeTitle}>MyHealth</Text>
      </View>
    </View>
  );
}

export default Home;
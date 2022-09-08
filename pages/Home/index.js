import React from 'react';
import { Text, View, Image } from 'react-native';
import iconVacine from '../../assets/icon-vaccine.png';

const Home = () => {
  return(
    <View>
      <View>
        <Image source={iconVacine} />
        <Text>My Health</Text>
      </View>
    </View>
  );
}

export default Home;
import React from "react";
import { View, TouchableOpacity } from "react-native";
import {NextVaccinesStyle} from './styles';
import NavbarComponent from '../../components/NavbarComponent';
import NextVaccinesComponent from "../../components/NextVaccinesComponent";
import ButtonComponent from '../../components/ButtonComponent';

const NextVaccines = ({navigation}) => {
  return(
    <>
      <NavbarComponent navigation={navigation} navbarText={'Próximas vacinas'} status={'logged'} />
      <View style={NextVaccinesStyle.main}>
        <View style={NextVaccinesStyle.mainContainer1}>
          <NextVaccinesComponent />
          <NextVaccinesComponent />
        </View>
        <View style={NextVaccinesStyle.mainContainer2}>
          <TouchableOpacity>
            <ButtonComponent btnText={'Nova vacina'} btnColor={'#37BD6D'} />
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
}

export default NextVaccines;
import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavbarComponentStyle } from "./styles";
import hamburgerIcon from '../../assets/image/hamburgerIcon.png';
import iconVaccine from '../../assets/image/icon-vaccine.png'

const NavbarComponent = ({navigation, status, navbarText}) => {
  
  return(
    <View style={NavbarComponentStyle.navbar}>
      <View style={NavbarComponentStyle.navbarContainer}>
        <View style={[NavbarComponentStyle.displayFlex]}>
          {
            status === 'notLogged' ?
            <View>
              <Image style={NavbarComponentStyle.navbarIcon} source={iconVaccine} />
            </View>
            :
            <TouchableOpacity onPress={() => navigation.toggleDrawer()}>
              <Image style={NavbarComponentStyle.navbarIcon} source={hamburgerIcon} />
            </TouchableOpacity>
          }
          <Text style={NavbarComponentStyle.title}>{navbarText}</Text>
        </View>
      </View>
    </View>
  );
}

export default NavbarComponent;
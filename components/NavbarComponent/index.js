import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavbarComponentStyle } from "./styles";
import hamburgerIcon from '../../assets/image/hamburgerIcon.png';
import line from '../../assets/image/line.png'
import iconVaccine from '../../assets/image/icon-vaccine.png'
import iconLogout from '../../assets/image/logout.png'

const NavbarComponent = ({status, navbarText}) => {
  
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
            <TouchableOpacity>
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
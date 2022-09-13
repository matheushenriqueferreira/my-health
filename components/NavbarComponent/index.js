import React, { useState } from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { NavbarComponentStyle } from "./styles";
import hamburgerIcon from '../../assets/image/hamburgerIcon.png';
import line from '../../assets/image/line.png'
import iconVaccine from '../../assets/image/icon-vaccine.png'
import iconLogout from '../../assets/image/logout.png'

const NavbarComponent = () => {
  
  const handleDrawerNavigator = () => {
    
  }
  
  return(
    <View style={NavbarComponentStyle.navbar}>
      <View style={NavbarComponentStyle.navbarContainer}>
        <View style={[NavbarComponentStyle.displayFlex]}>
          <TouchableOpacity onPress={() => handleDrawerNavigator()}>
            <Image style={NavbarComponentStyle.hamburgerIcon} source={hamburgerIcon} />
          </TouchableOpacity>
          <Text style={NavbarComponentStyle.title}>Minhas vacinas</Text>
        </View>
      </View>
      <View style={NavbarComponentStyle.drawerNavigator}>
        <View style={NavbarComponentStyle.drawerNavigatorContainer}>
          <Text style={[NavbarComponentStyle.drawerText, NavbarComponentStyle.textCenter]}>Olá Matheus</Text>
          <Image source={line} style={NavbarComponentStyle.lineSize}/>
          <TouchableOpacity style={NavbarComponentStyle.drawerLinks}>
            <Image source={iconVaccine} style={NavbarComponentStyle.drawerIcons}/>
            <Text style={NavbarComponentStyle.drawerText}>Minhas vacinas</Text>
          </TouchableOpacity>
          <TouchableOpacity style={NavbarComponentStyle.drawerLinks}>
            <Image source={iconLogout} style={NavbarComponentStyle.drawerIcons}/>
            <Text style={NavbarComponentStyle.drawerText}>Sair</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default NavbarComponent;
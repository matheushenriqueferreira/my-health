import React from "react";
import { View, Text, Image } from "react-native";
import { NavbarComponentStyle } from "./styles";
import hamburgerIcon from '../../assets/image/hamburgerIcon.png';

const NavbarComponent = () => {
  return(
    <View style={NavbarComponentStyle.navbarContainer}>
      <View style={[NavbarComponentStyle.displayFlex]}>
        <Text style={NavbarComponentStyle.menuIconContainer}>
          <Image style={NavbarComponentStyle.hamburgerIcon} source={hamburgerIcon} />
        </Text>
        <Text style={NavbarComponentStyle.title}>Minhas vacinas</Text>
      </View>
    </View>
  );
}

export default NavbarComponent;
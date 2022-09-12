import { StyleSheet } from "react-native";

export const NavbarComponentStyle = StyleSheet.create({
  navbarContainer: {
    width: '100%',
    height: 60,
    backgroundColor: '#C1E7E3',
    paddingHorizontal: 10,
    zIndex: 0
  },
  
  displayFlex: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  menuIconContainer: {
    width: 50,
    height: '100%'
  },

  hamburgerIcon: {
    width: 50,
    height: 35
  },

  title: {
    fontSize: 30,
    color: '#419ED7',
    marginLeft: 10
  }

});
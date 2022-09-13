import { StyleSheet } from "react-native";

export const NavbarComponentStyle = StyleSheet.create({
  navbar: {
    width: '100%',
    height: '100%'
  },
  
  navbarContainer: {
    position: 'absolute',
    width: '100%',
    height: 60,
    backgroundColor: '#C1E7E3',
    paddingHorizontal: 10,
    zIndex: 2
  },
  
  displayFlex: {
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  hamburgerIcon: {
    width: 50,
    height: 35
  },

  title: {
    fontSize: 30,
    color: '#419ED7',
    marginLeft: 10
  },

  drawerNavigator: {
    position: 'absolute',
    display: 'none',
    backgroundColor: '#ADD4D0',
    width: '50%',
    height: '100%',
    zIndex: 1
  },

  drawerNavigatorContainer: {
    width: '100%',
    height: '100%',
    paddingVertical: 45,
    paddingHorizontal: 15,
    display: 'flex',
    flexDirection: 'column',
  },

  textCenter: {
    textAlign: 'center'
  },

  drawerText: {
    fontSize: 20,
    color: '#419ED7'
  },

  lineSize: {
    width: '100%',
    marginVertical: 30
  },

  drawerLinks: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5
  },

  drawerIcons: {
    width: 30,
    height: 30
  }


});
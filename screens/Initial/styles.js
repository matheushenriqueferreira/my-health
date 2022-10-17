import { StyleSheet } from 'react-native';

export const InitialStyle = StyleSheet.create({
  mainStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    width: '100%',
    height: '100%',
    paddingHorizontal: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.9)'
  },

  container1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  vaccineImg: {
    width: 40,
    height: 40,
    marginRight: 10
  },

  title: {
    color: '#419ED7',
    fontSize: 46,
    textDecorationLine: 'underline'
  },


  subtitle: {
    color: '#419ED7',
    fontSize: 32,
    textAlign: 'center'
  },  

  bgImage: {
    width: '100%',
    height: '100%'
  },

  inputLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 15
  },

  inputStyle: {
    flex: 1,
    height: 45,
    backgroundColor: '#ffffff',
    color: '#3F92C5',
    fontSize: 18,
    paddingLeft: 10
  },

  labelStyle: {
    color: '#ffffff',
    fontSize: 18,
    flexBasis: '18%'
  },

  passwordError: {
    color: '#FD7979',
    fontSize: 15,
    paddingLeft: 62
  },

  ActivityIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
});
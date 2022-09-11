import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
  mainStyle: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30,
    backgroundColor: 'rgba(211, 211, 211, 0.9)'
  },

  container1: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  vaccineImg: {
    marginLeft: 4,
    width: 44,
    height: 44
  },

  title: {
    color: '#419ED7',
    fontSize: 44,
    textDecorationLine: 'underline'
  },

  subtitle: {
    color: '#419ED7',
    fontSize: 28,
    textAlign: 'center'
  },  

  bgImage: {
    width: '100%',
    height: '100%'
  },

  inputLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },

  inputStyle: {
    flexBasis: '90%',
    height: 45,
    backgroundColor: '#ffffff',
  },

  labelStyle: {
    color: '#ffffff',
    marginRight: 5
  },

  passwordError: {
    color: '#FD7979',
    paddingLeft: 45
  }
});
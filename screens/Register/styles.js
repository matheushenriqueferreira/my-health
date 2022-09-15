import { StyleSheet } from "react-native";

export const RegisterStyle = StyleSheet.create({
  main: {
    height: '100%',
    backgroundColor: '#ADD4D0',
    paddingHorizontal: 15    
  },

  mainContent: {
    marginVertical: 85
  },

  dataContainer:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    height: 30,
    marginTop: 10,
    flex: 1
  },

  labelStyle: {
    color: '#FFFFFF',
    textAlign: 'right',
    flexBasis: '30%',
    marginRight: 10
  },

  inputStyle: {
    paddingVertical: 0,
    paddingLeft: 10,
    flexBasis: '70%',
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
  },

  passMessage: {
    color: '#FD7979',
    marginLeft: 120
  },

  btnContainer: {
    marginTop: 100,
    alignItems: 'center'
  },

  btnDisabled: {
    opacity: 0.5
  }
});
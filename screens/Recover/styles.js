import { StyleSheet } from "react-native";

export const RecoverStyle = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    backgroundColor: '#ADD4D0',
    paddingHorizontal: 25
  },

  mainContainer: {
    justifyContent: 'space-between',
    height: '50%'
  },

  
  inputLabel: {
    marginTop: 50,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center'
  },
  
  labelStyle: {
    color: '#FFFFFF',
    marginRight: 10
  },
  
  inputStyle: {
    paddingVertical: 0,
    backgroundColor: '#FFFFFF',
    flex: 1,
    height: 40,
    color: '#3F92C5'
  },

  btnStyle: {
    alignItems: 'center'
  },

  btnStyleDisabled: {
    opacity: 0.5
  }
});
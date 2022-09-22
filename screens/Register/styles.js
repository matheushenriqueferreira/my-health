import { StyleSheet } from "react-native";

export const RegisterStyle = StyleSheet.create({
  main: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingHorizontal: 15,
    backgroundColor: '#ADD4D0',
  },

  mainContainer1: {
    flex: 0.7,
  },

  dataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:  'space-around'
  },

  radioButtonRow: {
    flexDirection: 'row'
  },

  labelStyle: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },

  inputStyle: {
    width: '100%',
    paddingVertical: 0,
    height: 35,
    color: '#3F92C5',
    backgroundColor: '#FFFFFF'
  },

  radioButtonContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  userDateContainer: {
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 5,
    justifyContent: 'space-between',
    height: 35,
    backgroundColor: '#FFFFFF'
  },

  blueColor: {
    color: '#3F92C5'
  },

  calendarIcon: {
    width: 23,
    height: 23,
    opacity: 0.3
  },

  repeatPassContent: {
    flexDirection: 'row',
  },

  errorPass: {
    color: '#FD7979',
  },

  mainContainer2: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
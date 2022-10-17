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
    flex: 0.5,
  },

  dataContainer: {
    flex: 1,
    flexDirection: 'column',
    justifyContent:  'space-around'
  },

  inputLabelContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  radioButtonRow: {
    flexDirection: 'row'
  },

  labelStyle: {
    color: '#FFFFFF',
    flexBasis: '35%',
    textAlign: 'right',
    marginRight: 10,
    fontSize: 16
  },

  inputStyle: {
    flex: 1,
    paddingVertical: 0,
    height: 35,
    color: '#3F92C5',
    backgroundColor: '#FFFFFF',
    fontSize: 16
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
    color: '#3F92C5',
    fontSize: 16
  },

  calendarIcon: {
    width: 23,
    height: 23,
    opacity: 0.3
  },

  repeatPassInput: {
    width: '100%',
    backgroundColor: '#FFFFFF',
    paddingVertical: 0,
    height: 35,
  },

  repeatPassContent: {
    backgroundColor: 'black',
    flex: 1,
    flexDirection: 'column',
    paddingBottom: 10
  },

  errorPass: {
    color: '#FD7979',
    marginLeft: 144
  },

  mainContainer2: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },

});
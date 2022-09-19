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
    flex: 0.8,
  },

  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15
  },

  labelStyle: {
    textAlign: 'right',
    color: '#FFFFFF',
    fontWeight: 'bold',
    flexBasis: '30%',
    marginRight: 10
  },

  inputStyle: {
    flex: 1,
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
    flex: 1,
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

  errorPass: {
    color: '#FD7979',
    marginLeft: 125
  },

  mainContainer2: {
    alignItems: 'center'
  },

});
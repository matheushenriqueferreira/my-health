import { StyleSheet } from "react-native";

export const NewVaccineStyle = StyleSheet.create({  
  main: {
    flex: 1,
    backgroundColor: '#ADD4D0',
    paddingHorizontal: 15,
    justifyContent: 'space-around'
  },

  mainContainer1: {
    flex: 0.6,
    justifyContent: 'space-around',
  },

  dataContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  labelContainer: {
    flexBasis: '35%',
    textAlign: 'right',
    marginRight: 10
  },

  labelStyle: {
    color: '#FFFFFF',
    fontSize: 16,
    flexBasis: '40%'
  },

  inputStyle: {
    flex: 1,
    paddingVertical: 0,
    backgroundColor: '#FFFFFF',
    color: '#3F92C5',
    height: 35,
    fontSize: 16
  },

  dateText: {
    color: '#3F92C5',
    fontSize: 16
  },  

  dateStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 5,
    backgroundColor: '#FFFFFF',
    width: 160,
    height: 35
  },

  calendarIcon: {
    width: 23,
    height: 23,
    opacity: 0.3
  },

  dataContainerRow: {
    flexDirection: 'row'
  },

  radioButtonContainer: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },

  radioButtonStyle: {
    flexDirection: 'row', 
    alignItems: 'center'
  },

  radioButtonLabel: {
    fontSize: 14,
    color: '#FFFFFF'
  },

  imageContainer: {
    flex: 1,
    height: 130,
    justifyContent: 'space-between',
  },

  imageBtnContainer: {
    width: 170,
    height: 30,
    backgroundColor: '#419ED7',
    alignItems: 'center',
    justifyContent: 'center'
  },
  
  imageBtnText: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#FFFFFF'
  },

  imageContent: {
    borderColor: 'gray',
    borderStyle: "dashed",
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: "100%",
    height: 90
  },

  imageContentText: {
    fontSize: 10,
    color: 'gray'
  },

  vaccineImage: {
    resizeMode: 'stretch',
    width: '100%',
    height: '100%'
  },

  mainContainer2: {
    flex: 0.1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  
  ActivityIndicatorContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }

});
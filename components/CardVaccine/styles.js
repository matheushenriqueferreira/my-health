import { StyleSheet, Dimensions } from "react-native";

export const CardVaccineStyle = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 8,
    margin: 5,
    width: (Dimensions.get('window').width/2)-25,
    height: 170,
    maxHeight: 170
  },

  textColorBlue: {
    color: '#3F92C5'
  },

  name: {
    fontSize: 24
  },

  dose: {
    backgroundColor: '#3F92C5',
    fontSize: 12,
    paddingHorizontal: 15,
    color: '#FFFFFF'
  },

  date: {
    color: '#8B8B8B',
    fontSize: 10
  },

  container1: {
    justifyContent: 'space-around',
    height: 70,
    flexDirection: 'column',
    alignItems: 'center'
  },

  container2: {
    width: '100%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center'
  },

  image: {
    width: '100%',
    height: '100%',
    maxHeight: 100,
  },

  container3: {
    alignItems: 'flex-end'
  },

  container3Text: {
    color: '#FD7979',
    fontSize: 10
  }
});
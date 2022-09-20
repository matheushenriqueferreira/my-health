import { StyleSheet } from "react-native";
import { color } from "react-native-reanimated";

export const CardVaccineStyle = StyleSheet.create({
  main: {
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    borderRadius: 8,
    width: '50%',
    height: 200,
    maxWidth: '50%',
    maxHeight: 200
  },

  textColorBlue: {
    color: '#3F92C5'
  },

  name: {
    fontSize: 26
  },

  dose: {
    backgroundColor: '#3F92C5',
    fontSize: 10,
    paddingHorizontal: 8,
    color: '#FFFFFF'
  },

  date: {
    color: '#8B8B8B',
    fontSize: 10
  },

  container1: {
    justifyContent: 'space-between',
    height: 70,
    flexDirection: 'column',
    alignItems: 'center'
  },

  container2: {
    width: 175,
    maxWidth: 175,
    alignItems: 'center',
    height: 120,
    justifyContent: 'center'
  },

  image: {
    width: 230,
    maxWidth: 230,
    height: 100,
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
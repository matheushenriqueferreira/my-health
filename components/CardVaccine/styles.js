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
    margin: 4,
    width: '46%',
    height: 180,
    maxWidth: '48%',
    maxHeight: 180
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
    justifyContent: 'space-around',
    height: 70,
    flexDirection: 'column',
    alignItems: 'center'
  },

  container2: {
    width: '100%',
    height: 100,
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
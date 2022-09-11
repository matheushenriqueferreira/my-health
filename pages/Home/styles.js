import { StyleSheet } from 'react-native';


export const HomeStyle = StyleSheet.create({
  homeMain: {
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    height: '100%',
  },

  homeContainer1: {
    marginTop: 55,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },

  homeVaccineImg: {
    marginLeft: 4,
    width: 44,
    height: 44
  },

  homeTitle: {
    fontFamily: 'Averia Libre',
    fontSize: 44
  },

  homeBgImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    opacity: 0.2,
  }
});
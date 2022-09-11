import { StyleSheet } from 'react-native';

export const HomeStyle = StyleSheet.create({
  homeMain: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    height: '100%',
    paddingLeft: 30,
    paddingRight: 30
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
    color: '#419ED7',
    fontSize: 44,
    textDecorationLine: 'underline'
  },

  homeSubtitle: {
    color: '#419ED7',
    fontSize: 28,
    textAlign: 'center'
  },  

  homeBgImage: {
    width: '100%',
    height: '100%'
  },

  homeInputLabelFlex: {
    display: 'flex',
    flex: 0.2,
    flexDirection: 'row',
    alignItems: 'center'
  },

  homeInputStyle: {
    flexBasis: '90%',
    height: 45,
    backgroundColor: '#ffffff',
  },

  homeLabelStyle: {
    color: '#ffffff',
    marginRight: 5
  },

  homePasswordError: {
    color: '#FD7979',
    paddingLeft: 45
  }
});
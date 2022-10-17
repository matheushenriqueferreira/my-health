import { StyleSheet } from "react-native";

export const DrawerComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  
  userName: {
    color: '#419ED7',
    fontSize: 26,
    marginBottom: 20
  },

  content1: {
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  content2: {
    marginTop: 30
  },

  item: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    borderRadius: 4,
    marginVertical: 10,
    paddingHorizontal: 10
  },

  iconSize: {
    width: 24,
    height: 24,
    marginRight: 15
  },
  
  text: {
    fontSize: 24,
    color: '#419ED7'
  }
});
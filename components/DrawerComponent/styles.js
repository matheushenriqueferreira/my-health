import { StyleSheet } from "react-native";

export const DrawerComponentStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 15
  },
  
  userName: {
    color: '#419ED7',
    fontSize: 24
  },

  content1: {
    height: 50,
    justifyContent: 'space-around',
    alignItems: 'center',
  },

  content2: {
    marginTop: 30
  }
});
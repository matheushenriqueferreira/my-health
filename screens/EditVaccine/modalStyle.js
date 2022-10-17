import { StyleSheet } from "react-native";

export const ModalStyle = StyleSheet.create({
  centeredView: {
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    flex: 1,
    justifyContent: "center",
  },

  modalView: {
    margin: 15,
    backgroundColor: "white",
    justifyContent: 'space-around',
    height: 200,
    borderColor: '#B9DFDB',
    borderStyle: "solid",
    borderWidth: 3,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },

  buttonContainer: {
    width: '100%',
    flex: 0.4,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around'
  },

  button: {
    justifyContent: 'center',
    width: 140,
    height: 50,
  },

  buttonYes: {
    backgroundColor: "#FF8383",
  },

  buttonClose: {
    backgroundColor: "#3F92C5",
  },

  textStyle: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center"
  },
  
  modalTextContainer: {
    flex: 0.4,
    justifyContent: 'center',
    alignContent: 'center'
  },

  modalText: {
    color: '#FD7979',
    fontSize: 24,
    textAlign: "center"
  },

  modalLoadingStyle: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})
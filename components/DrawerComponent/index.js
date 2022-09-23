import { DrawerContentScrollView, DrawerItem, DrawerItemList } from "@react-navigation/drawer";
import { Text, View, Image } from "react-native";
import line from '../../assets/image/line.png';
import { auth } from "../../config/FirebaseConfig/firebase";
import { signOut } from "firebase/auth";
import { DrawerComponentStyle } from "./styles";
import logout from '../../assets/image/logout.png'

const DrawerComponent = (props) => {
  
  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      props.navigation.pop();
    })
    .catch(() => {
      alert('Erro ao deslogar')
    })
  }

  return(
    <DrawerContentScrollView {...props} style={DrawerComponentStyle.container}>
      <View style={DrawerComponentStyle.content1}>
        <Text style={DrawerComponentStyle.userName}>Olá, Matheus</Text>
        <Image source={line} />
      </View>
      <View style={DrawerComponentStyle.content2}>
        <DrawerItemList {...props} />
        <DrawerItem label={'Sair'} onPress={() => handleLogout()} icon={() => (<Image source={logout} style={{width: 24, height: 24}} />)} />
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerComponent;
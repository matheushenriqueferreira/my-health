import { DrawerContentScrollView } from "@react-navigation/drawer";
import { Text, View, Image, TouchableOpacity } from "react-native";
import line from '../../assets/image/line.png';
import { auth } from "../../config/FirebaseConfig/firebase";
import { signOut } from "firebase/auth";
import { DrawerComponentStyle } from "./styles";
import iconLogout from '../../assets/image/logout.png';
import iconVaccine from '../../assets/image/icon-vaccine.png';
import iconCalenar from '../../assets/image/calendar.png';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../redux/userSlice";
import FontGlobal from "../../styles/FontGlobal";

const DrawerComponent = ({navigation}) => {
  const { userNameRedux } = useSelector(state => state.user);
  const dispatch = useDispatch();

  const handleLogout = () => {
    signOut(auth)
    .then(() => {
      dispatch(logout());
      navigation.reset({
        index: 0,
        routes: [{name: 'Initial'}]
      });
    })
    .catch(() => {
      alert('Erro ao deslogar');
    })
  }

  return(
    <DrawerContentScrollView style={DrawerComponentStyle.container}>
      <View style={DrawerComponentStyle.content1}>
        <Text style={[DrawerComponentStyle.userName, FontGlobal.AveriaRegular]}>Olá, {userNameRedux}</Text>
        <Image source={line} />
      </View>
      <View style={DrawerComponentStyle.content2}>
        <TouchableOpacity onPress={() => navigation.push('HomeNavigation')} style={DrawerComponentStyle.item} >
          <Image source={iconVaccine} style={DrawerComponentStyle.iconSize} />
          <Text style={[DrawerComponentStyle.text, FontGlobal.AveriaLight]}>Minhas vacinas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.push('NextVaccinesNavigation')} style={DrawerComponentStyle.item} >
          <Image source={iconCalenar} style={DrawerComponentStyle.iconSize} />
          <Text style={[DrawerComponentStyle.text, FontGlobal.AveriaLight]}>Próximas vacinas</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => handleLogout()} style={DrawerComponentStyle.item} >
          <Image source={iconLogout} style={DrawerComponentStyle.iconSize} />
          <Text style={[DrawerComponentStyle.text, FontGlobal.AveriaLight]}>Sair</Text>
        </TouchableOpacity>
      </View>
    </DrawerContentScrollView>
  );
}

export default DrawerComponent;
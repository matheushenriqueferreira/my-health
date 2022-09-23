import { createDrawerNavigator, DrawerItem, DrawerItemList } from '@react-navigation/drawer'
import Home from "../../screens/Home";
import NewVaccine from "../../screens/NewVaccine";
import EditVaccine from "../../screens/EditVaccine";
import NextVaccines from "../../screens/NextVaccines";
import DrawerComponent from '../../components/DrawerComponent';
import { Image } from 'react-native';
import vaccineIcon from '../../assets/image/icon-vaccine.png'
import calendarIcon from '../../assets/image/calendar.png'
import { StyleSheet } from 'react-native';

const drawerStyle = StyleSheet.create({
  iconSize: {
    width: 24,
    height: 24
  },

  textSize: {

  }
});

const Drawer = createDrawerNavigator();

const LoggedNavigation = () => {
  return(
    <Drawer.Navigator initialRouteName='Home' drawerContent={(props) => <DrawerComponent {...props}/> } screenOptions={{headerShown: false, drawerStyle: { backgroundColor: '#ADD4D0' }}}>
      <Drawer.Screen name="Home" component={Home} options={{drawerLabel: 'Minhas vacinas', drawerIcon: () => <Image source={vaccineIcon} style={drawerStyle.iconSize} />, drawerLabelStyle:{fontSize: 15,fontWeight: 'bold', color:'#419ED7'}}} />
      <Drawer.Screen name="NewVaccine" component={NewVaccine} />
      <Drawer.Screen name="EditVaccine" component={EditVaccine} />
      <Drawer.Screen name="NextVaccines" component={NextVaccines} options={{drawerLabel: 'Próximas vacinas', drawerIcon: () => <Image source={calendarIcon} style={drawerStyle.iconSize} />, drawerLabelStyle:{fontSize: 15, fontWeight: 'bold', color:'#419ED7'}}} />
    </Drawer.Navigator>
  );
}

export default LoggedNavigation;
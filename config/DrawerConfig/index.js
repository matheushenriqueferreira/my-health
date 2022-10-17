import { createDrawerNavigator } from '@react-navigation/drawer'
import DrawerComponent from '../../components/DrawerComponent';

// Import das screens
import Home from "../../screens/Home";
import NewVaccine from "../../screens/NewVaccine";
import EditVaccine from "../../screens/EditVaccine";
import NextVaccines from "../../screens/NextVaccines";

const Drawer = createDrawerNavigator();

export const HomeNavigation = () => {
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props}/> } screenOptions={{headerShown: false, drawerStyle: { backgroundColor: '#ADD4D0' }}}>
      <Drawer.Screen name="Home" component={Home} />
    </Drawer.Navigator>
  );
}

export const NewVaccineNavigation = () => {
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props}/> } screenOptions={{headerShown: false, drawerStyle: { backgroundColor: '#ADD4D0' }}}>
      <Drawer.Screen name="NewVaccine" component={NewVaccine} />
    </Drawer.Navigator>
  );
}

export const EditVaccineNavigation = () => {
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props}/> } screenOptions={{headerShown: false, drawerStyle: { backgroundColor: '#ADD4D0' }}}>
      <Drawer.Screen name="EditVaccine" component={EditVaccine} />
    </Drawer.Navigator>
  );
}

export const NextVaccinesNavigation = () => {
  return(
    <Drawer.Navigator drawerContent={(props) => <DrawerComponent {...props}/> } screenOptions={{headerShown: false, drawerStyle: { backgroundColor: '#ADD4D0' }}}>
      <Drawer.Screen name="NextVaccines" component={NextVaccines} />
    </Drawer.Navigator>
  );
}

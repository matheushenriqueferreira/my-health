import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { store } from '../../redux/store'
import { Provider } from 'react-redux'

//import de Telas
import Initial from "../../screens/Initial";
import Register from "../../screens/Register";
import Recover from "../../screens/Recover";

//import do Drawer Config
import { HomeNavigation, NewVaccineNavigation, EditVaccineNavigation, NextVaccinesNavigation } from "../DrawerConfig";

const Stack = createNativeStackNavigator();

const StackConfig= () => {
  return(
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Initial" screenOptions={{headerShown: false}} >
          <Stack.Screen name="Initial" component={Initial} />
          <Stack.Screen name="Register" component={Register} />
          <Stack.Screen name="Recover" component={Recover} />
          <Stack.Screen name="HomeNavigation" component={HomeNavigation} />
          <Stack.Screen name="NewVaccineNavigation" component={NewVaccineNavigation} />
          <Stack.Screen name="EditVaccineNavigation" component={EditVaccineNavigation} />
          <Stack.Screen name="NextVaccinesNavigation" component={NextVaccinesNavigation} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default StackConfig;
import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//import de Telas
import Initial from "../../screens/Initial";
import Register from "../../screens/Register";
import Recover from "../../screens/Recover";

//import do Drawer Navigator
import LoggedNavigation from "../LoggedNavigation";

const Stack = createNativeStackNavigator();

const NoLoggedNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Initial" screenOptions={{headerShown: false}}>
        <Stack.Screen name="Initial" component={Initial} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="recover" component={Recover} />
        <Stack.Screen name="LoggedNavigation" component={LoggedNavigation} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default NoLoggedNavigation;
import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//import de Telas
import Home from "../../screens/Home";
import Register from "../../screens/Register";
import Recover from "../../screens/Recover";

const Stack = createNativeStackNavigator()

const ScreenNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="home" screenOptions={{headerShown: false}}>
        <Stack.Screen name="home" component={Home} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="recover" component={Recover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenNavigation;
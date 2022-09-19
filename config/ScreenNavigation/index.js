import React from "react";
import { NavigationContainer } from '@react-navigation/native'
import {createNativeStackNavigator} from '@react-navigation/native-stack'

//import de Telas
import Initial from "../../screens/Initial";
import Register from "../../screens/Register";
import Recover from "../../screens/Recover";

const Stack = createNativeStackNavigator()

const ScreenNavigation = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator initialRouteName="initial" screenOptions={{headerShown: false}}>
        <Stack.Screen name="initial" component={Initial} />
        <Stack.Screen name="register" component={Register} />
        <Stack.Screen name="recover" component={Recover} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default ScreenNavigation;
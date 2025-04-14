/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import 'react-native-gesture-handler'

import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Login from './screens/auth/login.screen';
import Home from './screens/home.screen';

export default function App() {


  const Stack = createStackNavigator();

  // eslint-disable-next-line react/no-unstable-nested-components
  function MyStack() {
    return (
      // screenOptions -> lo use para eliminar el header de la pantalla
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Home} />
      </Stack.Navigator>
    );
  }


  return (
    <NavigationContainer>
        <MyStack />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



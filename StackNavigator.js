import { View, Text } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import SplashScreen from './src/screens/SplashScreen/SplashScreen';
import SignIn from './src/screens/SignIn/SignIn';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Group>
            <Stack.Screen name='SplashScreen' component={SplashScreen} />
            <Stack.Screen name='SignIn' component={SignIn} />
        </Stack.Group>
    </Stack.Navigator>
  )
}

export default StackNavigator
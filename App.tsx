import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import LoginPage from './src/screens/LoginPage'
import SecondPage from './src/screens/SecondPage'
import HomeScreen from './src/screens/HomeScreen'
import ThirdPage from './src/screens/ThirdPage'
import FourthPage from './src/screens/FourthPage'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown : false}}>
        <Stack.Screen name = 'LoginPage' component={LoginPage}></Stack.Screen>
        <Stack.Screen name = 'SecondPage' component={SecondPage}></Stack.Screen>
        <Stack.Screen name = 'HomeScreen' component={HomeScreen}></Stack.Screen>
        <Stack.Screen name = 'ThirdPage' component={ThirdPage}></Stack.Screen>
        <Stack.Screen name = 'FourthPage' component={FourthPage}></Stack.Screen>
        <Stack.Screen name = 'FifthPage' component={FifthPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  )
}

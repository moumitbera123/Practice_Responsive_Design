import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import TabRoutes from './TabRoutes';
const Stack = createStackNavigator()
const HomeStack = () => {
  return (

  <Stack.Navigator screenOptions={{headerShown:false}}>
    <Stack.Screen name='Tabroutes' component={TabRoutes}/>
  </Stack.Navigator>

  )
}

export default HomeStack

const styles = StyleSheet.create({})
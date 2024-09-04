import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {NavigationContainer} from '@react-navigation/native'
import AuthStack from './AuthStack'
import HomeStack from './HomeStack'
const Routes = () => {
  
  return (
 <NavigationContainer>
       {true ? <HomeStack/> : < AuthStack/>}
 </NavigationContainer>
  )
}

export default Routes

const styles = StyleSheet.create({})
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { Home } from '../screens'
import Booking from '../screens/Booking/Booking'
import navigationStrings from '../constants/navigationStrings'
import Profile from '../screens/Profile/Profile'
const Tab = createBottomTabNavigator()
const TabRoutes = () => {
  return (
 
    <Tab.Navigator screenOptions={{headerShown:false}}>
        <Tab.Screen name={navigationStrings.HOME} component={Home}/>
        <Tab.Screen name={navigationStrings.BOOKING} component={Booking}/>
        <Tab.Screen name={navigationStrings.PROFILE} component={Profile}/>
    </Tab.Navigator>

  )
}

export default TabRoutes

const styles = StyleSheet.create({})
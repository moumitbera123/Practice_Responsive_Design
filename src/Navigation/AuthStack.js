import { Login, ChooseAccount, ForgotPassword, SetPassword, Home, Register, Splash, } from "../screens";
import { StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";
import navigationStrings from "../constants/navigationStrings";
import HomeStack from "./HomeStack";

const AuthStack = () => {
  const Stack = createStackNavigator()
  return (

    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName={navigationStrings.SPLASH}>
      <Stack.Screen name={navigationStrings.SPLASH} component={Splash}/>
      <Stack.Screen name={navigationStrings.LOGIN} component={Login} />
      <Stack.Screen name={navigationStrings.CHOOSE_ACCOUNT} component={ChooseAccount} />
      <Stack.Screen name={navigationStrings.FORGOT_PASSWORD} component={ForgotPassword} />
      <Stack.Screen name={navigationStrings.SET_PASSWORD} component={SetPassword} />
      <Stack.Screen name={navigationStrings.REGISTER} component={Register} />
      <Stack.Screen name={navigationStrings.HOMESTACK} component={HomeStack}/>
    </Stack.Navigator>

  )
}

export default AuthStack

const styles = StyleSheet.create({})
import 'react-native-gesture-handler'
import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AuthStack from './src/Navigation/AuthStack'
import Routes from './src/Navigation/Routes'

import ModalScreen from './src/screens/Modal/ModalScreen'

const App = () => {
  return (
    <Routes />
  //  <ModalScreen/>
  )
}

export default App

const styles = StyleSheet.create({})
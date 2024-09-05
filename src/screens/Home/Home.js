import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Colors from '../../Styles/Colors'

const Home = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Welcome To Home Screen</Text>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent: 'center', 
    alignItems: 'center', 
    backgroundColor: Colors.Blue,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold', 
    color: '#333', 
  },
})

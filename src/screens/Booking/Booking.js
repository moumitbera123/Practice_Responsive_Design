import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ModalScreen from '../Modal/ModalScreen'
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
const Booking = () => {
  return (
    <View style={styles.container}>
     <ModalScreen/>
    </View>
  )
}

export default Booking

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(5),
    backgroundColor: '#f0f0f0',
  },
})
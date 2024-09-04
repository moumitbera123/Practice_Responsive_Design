import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Colors from '../Styles/Colors'

const ButtonComponent = ({btnText,onPress=()=>{},btnstyle={}}) => {
  return (
<TouchableOpacity style={{...styles.btnstyle,...btnstyle}} onPress={onPress}>
    <Text style={styles.btnTextstyle}>{btnText}</Text>
</TouchableOpacity>
  )
}

export default ButtonComponent

const styles = StyleSheet.create({
    btnstyle:{
        height:responsiveHeight(8),
        width:responsiveWidth(90),
        marginHorizontal:responsiveHeight(2.7),
        borderRadius:responsiveWidth(4),
        backgroundColor:Colors.ThemeColor,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTextstyle:{
        fontSize:responsiveFontSize(2.4),
        fontWeight:'bold',
        color:Colors.White,
        textTransform:'uppercase'
    }

})
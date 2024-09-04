import { StyleSheet } from "react-native";
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions";
import Colors from "../../Styles/Colors";

const styles = StyleSheet.create({
    container:{
        flex:1
    },
    title:{
          marginVertical:responsiveHeight(5),
          marginHorizontal:responsiveWidth(33),
    },
    titletext:{
        fontSize:responsiveFontSize(4),
        fontWeight:'600',
        color:Colors.ThemeColor
    },
    inputcontainer:{
        marginVertical:responsiveHeight(5),
        marginHorizontal:responsiveHeight(2)
    },
    alreadyhaveanacc:{
        flexDirection:'row',
        alignItems:'center',
        marginHorizontal:responsiveHeight(11),
        marginVertical:responsiveHeight(13)
    },
    alreadyhaveanacctext:{
        fontSize:responsiveFontSize(1.8)
    },
    signintext:{
        color:Colors.ThemeColor,
        fontSize:responsiveFontSize(1.8)
    },
})
export default styles;
import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import Colors from "../../Styles/Colors";

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    imgstyle: {
        height: responsiveHeight(30),
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center'
    },
    imgtext: {
        fontSize: responsiveFontSize(4),
        color: '#ffffff',
        fontWeight: 'bold'
    },
    inputlebel:{
        marginTop:responsiveHeight(5),
        marginLeft:responsiveWidth(8),
        marginRight:responsiveWidth(8)
    },
    inputContainer:{
        marginTop:responsiveHeight(5)
    },
    forgotview:{
      alignSelf:'flex-end',
      marginVertical:responsiveHeight(6),
      marginHorizontal:responsiveWidth(6)
    },
    forgotText:{
        fontSize:responsiveFontSize(2),
        fontWeight:'500',
        color:Colors.ThemeColor
    },
    notamember:{
      flexDirection:'row',
      alignItems:'center',
      marginVertical:responsiveHeight(7),
      marginHorizontal:responsiveHeight(14.4),
    },
    notamembertext:{
        fontSize:responsiveFontSize(1.8)
    },
    notamembertext1:{
        color:Colors.ThemeColor,
        fontSize:responsiveFontSize(1.8)
    }
});

export default styles;
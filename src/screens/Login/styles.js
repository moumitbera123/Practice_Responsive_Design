import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";

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
    }

});

export default styles;
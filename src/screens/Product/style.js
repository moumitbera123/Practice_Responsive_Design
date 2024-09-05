import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import Colors from "../../Styles/Colors";


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: responsiveWidth(2),
        backgroundColor: Colors.White,
    },
    header: {
        fontSize: responsiveHeight(4),
        fontWeight: 'bold',
        marginBottom: responsiveHeight(2),
        textAlign: 'center',
        color:Colors.ThemeColor
    },
    loadingContainer:{
        flex:1,
        // justifyContent:'center',
        // alignItems:'center'
        marginHorizontal:responsiveHeight(10)
    },
    loadingText: {
        textAlign: 'center',
        fontSize: responsiveHeight(2),
        marginTop: responsiveHeight(5),
    },
    errorText: {
        textAlign: 'center',
        fontSize: responsiveHeight(2),
        color: 'red',
        marginTop: responsiveHeight(5),
    },
    itemContainer: {
        flex: 1,
        margin: responsiveWidth(1),
        backgroundColor: Colors.White,
        borderRadius: responsiveWidth(1),
        elevation: 3,
        padding: responsiveWidth(2),
        alignItems: 'center',
    },
    img: {
        height: responsiveHeight(15),
        width: responsiveWidth(30),
        marginBottom: responsiveHeight(1),
    },
    title: {
        fontSize: responsiveHeight(2.2),
        fontWeight: '600',
        textAlign: 'center',
        marginBottom: responsiveHeight(0.5),
        color:Colors.Black
    },
    price: {
        fontSize: responsiveHeight(2),
        color: Colors.RED,
    },
    row: {
        justifyContent: 'space-between', 
    },
});
export default styles;
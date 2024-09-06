import { StyleSheet } from "react-native";
import { responsiveHeight,responsiveWidth,responsiveFontSize} from "react-native-responsive-dimensions";
import Colors from "../../Styles/Colors";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      padding: responsiveWidth(5),
      backgroundColor: '#f0f0f0',
    },
    inputContainer: {
      width: '100%',
      marginBottom: responsiveHeight(2),
    },
    input: {
      height: responsiveHeight(6),
      width: responsiveWidth(65),
      paddingHorizontal: responsiveWidth(3),
      borderRadius: responsiveWidth(5),
      fontSize: responsiveFontSize(2),
    },
    modalBackground: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: Colors.BlackOpacity,
    },
    modalContainer: {
      width: responsiveWidth(85),
      padding: responsiveWidth(5),
      backgroundColor: Colors.White,
      borderRadius: responsiveWidth(2),
      alignItems: 'center',
      maxHeight: responsiveHeight(70),
    },
    scrollViewContainer: {
      flexGrow: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    modalTitle: {
      fontSize: responsiveFontSize(2.2),
      marginBottom: responsiveHeight(3),
      textAlign: 'center',
      fontWeight: 'bold',
      color: Colors.ThemeColor,
    },
    closeButton: {
      marginTop: responsiveHeight(2),
      paddingVertical: responsiveHeight(1.5),
      paddingHorizontal: responsiveWidth(5),
      backgroundColor: Colors.ThemeColor,
      borderRadius: 5,
    },
    closeButtonText: {
      color: Colors.White,
      fontSize: responsiveFontSize(2),
      textAlign: 'center',
    },
    errorText: {
      color: 'red',
      fontSize: responsiveFontSize(1.8),
      marginTop: responsiveHeight(0.5),
      textAlign: 'left',
      width: '100%',
    },
  });
  export default styles;
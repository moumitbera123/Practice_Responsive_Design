import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import Colors from '../../Styles/Colors';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.BackgroundColor, // Adjust based on your theme
    },
    innerContainer: {
        flex: 1,
        paddingHorizontal: responsiveWidth(4),
        paddingVertical: responsiveHeight(2),
    },
    title: {
        marginVertical: responsiveHeight(5),
        alignSelf: 'center',
    },
    titletext: {
        fontSize: responsiveFontSize(4),
        fontWeight: '600',
        color: Colors.ThemeColor,
    },
    inputcontainer: {
        marginVertical: responsiveHeight(3),
    },
    buttonContainer: {
        marginVertical: responsiveHeight(5),
        alignItems: 'center',
    },
    alreadyhaveanacc: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: responsiveHeight(5),
    },
    alreadyhaveanacctext: {
        fontSize: responsiveFontSize(1.8),
    },
    signintext: {
        color: Colors.ThemeColor,
        fontSize: responsiveFontSize(1.8),
        marginLeft: 5,
    },
    scrollViewContainer: {
        flexGrow: 1, // Ensure the content takes up the full height
        justifyContent: 'center', // Center content vertically
    },
});

export default styles;

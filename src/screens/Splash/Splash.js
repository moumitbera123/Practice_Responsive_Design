import React, { useEffect } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { responsiveHeight, responsiveWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import navigationStrings from '../../constants/navigationStrings';
import Colors from '../../Styles/Colors'; 

const Splash = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate(navigationStrings.LOGIN);
    }, 4000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" backgroundColor={Colors.ThemeColor} />
      <View style={styles.innerContainer}>
        <Image 
          source={{ uri: 'https://media.istockphoto.com/id/1425853190/photo/smart-phone-with-chopping-cart-parcel-box-sign-3d-render-concept-for.webp?a=1&b=1&s=612x612&w=0&k=20&c=OhKQtCO8DvKn1nH7fQTSd4upz3xwQpZwtCdr2tzBUnM=' }} // Replace with your logo URL or local asset
          style={styles.logo}
        />
        <Text style={styles.text}>Welcome to MyApp</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ThemeColor, 
    justifyContent: 'center',
    alignItems: 'center',
  },
  innerContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: responsiveWidth(5),
  },
  logo: {
    width: responsiveWidth(30), 
    height: responsiveWidth(30), 
    borderRadius: responsiveWidth(15), 
    resizeMode: 'cover',
    marginBottom: responsiveHeight(2),
  },
  text: {
    fontSize: responsiveFontSize(4), 
    fontWeight: 'bold',
    color: '#fff', 
    textAlign: 'center',
  },
});

export default Splash;

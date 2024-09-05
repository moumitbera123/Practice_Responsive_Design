import { Image, StyleSheet } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Home } from '../screens'
import Booking from '../screens/Booking/Booking'
import navigationStrings from '../constants/navigationStrings'
import Profile from '../screens/Profile/Profile'
import imagePath from '../constants/imagePath'
import Colors from '../Styles/Colors'
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions'
import Product from '../screens/Product/Product'

const Tab = createBottomTabNavigator()

const TabRoutes = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          let iconName;

     
          switch (route.name) {
            case navigationStrings.HOME:
              iconName = imagePath.Home;
              break;
            case navigationStrings.PRODUCT:
              iconName = imagePath.Product;
              break;
            case navigationStrings.BOOKING:
              iconName = imagePath.Booking;
              break;
            case navigationStrings.PROFILE:
              iconName = imagePath.Profile;
              break;
            default:
              iconName = imagePath.Default; 
          }

          return (
            <Image
              source={iconName}
              style={[
                styles.icon,
                { tintColor: focused ? Colors.ThemeColor : Colors.Black }
              ]}
            />
          );
        },
        tabBarLabelStyle: styles.label,
        tabBarStyle: styles.tabBar
      })}
    >
      <Tab.Screen name={navigationStrings.HOME} component={Home} />
      <Tab.Screen name={navigationStrings.PRODUCT} component={Product} />
      <Tab.Screen name={navigationStrings.BOOKING} component={Booking} />
      <Tab.Screen name={navigationStrings.PROFILE} component={Profile} />
    </Tab.Navigator>
  )
}

const styles = StyleSheet.create({
  icon: {
    height: responsiveHeight(4),
    width: responsiveWidth(8.2),
  },
  label: {
    fontSize: responsiveFontSize(1.5),
    color: Colors.Black,
  },
  tabBar: {
    height: responsiveHeight(8.5),
    paddingBottom: responsiveHeight(1),
    paddingTop: responsiveHeight(1),
    backgroundColor: Colors.White,
  }
})

export default TabRoutes

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './AuthStack';
import HomeStack from './HomeStack';
import navigationStrings from '../constants/navigationStrings';

const Routes = () => {
  const isLoggedIn = false; // Replace with your actual login state logic

  return (
    <NavigationContainer>
      {isLoggedIn ? <HomeStack /> : <AuthStack />}
    </NavigationContainer>
  );
};

export default Routes;

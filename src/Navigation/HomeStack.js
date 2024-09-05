import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabRoutes from './TabRoutes';
import navigationStrings from '../constants/navigationStrings';

const Stack = createStackNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name={navigationStrings.TAB_ROUTES} component={TabRoutes} />
    </Stack.Navigator>
  );
};

export default HomeStack;

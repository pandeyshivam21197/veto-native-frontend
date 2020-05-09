import {defaultScreenStyle} from '@navigation/constant';
import RoutesNames from '@navigation/routes';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import DonationScreen from '@screens/appScreens/Donate/DonationScreen';

const Stack = createStackNavigator();

const DonationStack = () => (
  <Stack.Navigator
    initialRouteName={RoutesNames.DonationScreen}
    screenOptions={{cardStyle: defaultScreenStyle}}>
    <Stack.Screen
      name={RoutesNames.DonationScreen}
      component={DonationScreen}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default DonationStack;

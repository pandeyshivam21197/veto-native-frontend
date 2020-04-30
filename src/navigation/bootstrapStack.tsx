import {commonScreenOption, defaultScreenStyle} from '@navigation/constant';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/appScreens/HomeScreen';
import LoginScreen from '@screens/bootstrapScreens/LoginScreen';
import LocaleService from '@services/Locale/LocaleService';
import React from 'react';
import RoutesNames from './routes';

const Stack = createStackNavigator();

const BootstrapStack = () => (
  <Stack.Navigator
    initialRouteName={RoutesNames.LoginScreen}
    screenOptions={{cardStyle: defaultScreenStyle}}>
    <Stack.Screen
      name={RoutesNames.OnBoardingScreen}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name={RoutesNames.LoginScreen}
      component={LoginScreen}
      options={{
        title: LocaleService.t('ScreenTitle.login'),
        ...commonScreenOption,
      }}
    />
    <Stack.Screen
      name={RoutesNames.SingUpScreen}
      component={HomeScreen}
      options={{
        title: LocaleService.t('ScreenTitle.singUp'),
        ...commonScreenOption,
      }}
    />
  </Stack.Navigator>
);

export default BootstrapStack;

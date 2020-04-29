import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/appScreens/HomeScreen';
import LoginScreen from '@screens/bootstrapScreens/LoginScreen';
import React from 'react';
import {commonScreenOption, defaultScreenStyle} from "@navigation/constant";
import LocaleService from "@services/Locale/LocaleService";

const Stack = createStackNavigator();

const BootstrapStack = () => (
    <Stack.Navigator initialRouteName="Login" screenOptions={{cardStyle: defaultScreenStyle}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: LocaleService.t('ScreenTitle.login'), ...commonScreenOption }}/>
        <Stack.Screen name="OnBoarding" component={HomeScreen} options={{ title: 'OnBoarding' }}/>
        <Stack.Screen name="SignUp" component={HomeScreen} options={{ title: 'SignUp' }}/>
    </Stack.Navigator>
);

export default BootstrapStack;

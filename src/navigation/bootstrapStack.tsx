import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/appScreens/HomeScreen';
import LoginScreen from '@screens/bootstrapScreens/LoginScreen';
import React from 'react';
import {defaultScreenStyle} from "@navigation/constant";

const Stack = createStackNavigator();

const BootstrapStack = () => (
    <Stack.Navigator initialRouteName="Login" screenOptions={{cardStyle: defaultScreenStyle}}>
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: 'Login', }}/>
        <Stack.Screen name="OnBoarding" component={HomeScreen} options={{ title: 'OnBoarding' }}/>
        <Stack.Screen name="SignUp" component={HomeScreen} options={{ title: 'SignUp' }}/>
    </Stack.Navigator>
);

export default BootstrapStack;

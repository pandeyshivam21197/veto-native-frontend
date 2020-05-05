import {defaultScreenStyle} from '@navigation/constant';
import RoutesNames from '@navigation/routes';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import UserSettingScreen from '@screens/appScreens/Account/UserSettingScreen';

const Stack = createStackNavigator();

const SettingStack = () => (
  <Stack.Navigator
    initialRouteName={RoutesNames.SettingScreen}
    screenOptions={{cardStyle: defaultScreenStyle}}>
    <Stack.Screen
      name={RoutesNames.SettingScreen}
      component={UserSettingScreen}
      options={{headerShown: false}}
    />
    {/*<Stack.Screen name="Details" component={DetailsScreen}/>*/}
  </Stack.Navigator>
);

export default SettingStack;

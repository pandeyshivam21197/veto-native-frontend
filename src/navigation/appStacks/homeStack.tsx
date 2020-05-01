import {defaultScreenStyle} from '@navigation/constant';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/appScreens/HomeScreen';
import React from 'react';
import RoutesNames from '@navigation/routes';

const Stack = createStackNavigator();

const HomeStack = () => (
  <Stack.Navigator
    initialRouteName={RoutesNames.HomeStack}
    screenOptions={{cardStyle: defaultScreenStyle}}>
    <Stack.Screen
      name={RoutesNames.HomeScreen}
      component={HomeScreen}
      options={{headerShown: false}}
    />
    {/*<Stack.Screen name="Details" component={DetailsScreen}/>*/}
  </Stack.Navigator>
);

export default HomeStack;

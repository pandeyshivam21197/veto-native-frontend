import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import RoutesNames from '@navigation/routes';
import AppTabs from '@navigation/appStacks';

const Stack = createStackNavigator();

// can add app modals here
const AppRootStack = () => (
    <Stack.Navigator initialRouteName={RoutesNames.AppStack}>
        <Stack.Screen name={RoutesNames.AppStack} component={AppTabs} options={{headerShown: false }}/>
        {/*<Stack.Screen name="Details" component={DetailsScreen}/>*/}
    </Stack.Navigator>
);

export default AppRootStack;

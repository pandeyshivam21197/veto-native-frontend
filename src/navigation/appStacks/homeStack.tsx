import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '@screens/appScreens/HomeScreen';
import React from 'react';

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Home Screen' }}/>
        {/*<Stack.Screen name="Details" component={DetailsScreen}/>*/}
    </Stack.Navigator>
);

export default HomeStack;

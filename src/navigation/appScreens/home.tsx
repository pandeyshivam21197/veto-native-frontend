import {createStackNavigator} from '@react-navigation/stack';
import React from "react";

const Stack = createStackNavigator();

const HomeStack = () => (
    <Stack.Navigator initialRouteName="Home">
        {/*<Stack.Screen name="Home" component={HomeScreen}/>*/}
        {/*<Stack.Screen name="Details" component={DetailsScreen}/>*/}
    </Stack.Navigator>
);

export default HomeStack;

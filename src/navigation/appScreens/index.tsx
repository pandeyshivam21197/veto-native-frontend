import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from "@navigation/appScreens/home";
import React from "react";
import RoutesNames from "@navigation/routes";

const Tab = createMaterialBottomTabNavigator();

const appTabs = () => (
    <Tab.Navigator initialRouteName={RoutesNames.HomeScreen}>
        <Tab.Screen name={RoutesNames.HomeStack} component={HomeStack}/>
        <Tab.Screen name={RoutesNames.DonationScreen} component={HomeStack}/>
        <Tab.Screen name={RoutesNames.DistributorScreen} component={HomeStack}/>
        <Tab.Screen name={RoutesNames.AccountScreen} component={HomeStack}/>
    </Tab.Navigator>
);

export default appTabs;

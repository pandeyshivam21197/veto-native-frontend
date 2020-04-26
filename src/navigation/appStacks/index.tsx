import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from '@navigation/appStacks/homeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import RoutesNames from '@navigation/routes';

const Tab = createMaterialBottomTabNavigator();

const getTabOptions = (stackName: string) => {
    let iconName: string = 'home';
    let backgroundColor = 'white';
    let label = '';
    const activeColor = 'white';
    const inactiveColor = 'grey';

    switch (stackName) {
        case RoutesNames.HomeStack:
            label = 'Home';
            backgroundColor = 'orange';
            break;
        case RoutesNames.DonationStack:
            iconName = 'donation';
            backgroundColor = 'blue';
            label = 'Donation';
            break;
        case RoutesNames.DistributorStack:
            iconName = 'donation';
            backgroundColor = 'red';
            label = 'Distributor';
            break;
        case RoutesNames.AccountStack:
            iconName = 'account';
            backgroundColor = 'green';
            label = 'Account';
            break;
        default:
            iconName = 'home';
    }

    return {
        tabBarLabel: label,
        tabBarColor: backgroundColor,
        tabBarIcon: ({color}: { color: string }) => {
            return (<MaterialCommunityIcons name={iconName} color={color} size={26}/>)
        },
        activeColor: activeColor,
        inactiveColor: inactiveColor,
    }
}

const AppTabs = () => (
    <Tab.Navigator
        initialRouteName={RoutesNames.HomeScreen}
        shifting={true}
    >
        <Tab.Screen
            name={RoutesNames.HomeStack}
            component={HomeStack}
            options={getTabOptions(RoutesNames.HomeStack)}
        />
        <Tab.Screen
            name={RoutesNames.DonationStack}
            component={HomeStack}
            options={getTabOptions(RoutesNames.DonationStack)}
        />
        <Tab.Screen
            name={RoutesNames.DistributorStack}
            component={HomeStack}
            options={getTabOptions(RoutesNames.DistributorStack)}
        />
        <Tab.Screen
            name={RoutesNames.AccountStack}
            component={HomeStack}
            options={getTabOptions(RoutesNames.AccountStack)}
        />
    </Tab.Navigator>
);

export default AppTabs;

import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import HomeStack from '@navigation/appStacks/homeStack';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import React from 'react';
import RoutesNames from '@navigation/routes';

const Tab = createMaterialBottomTabNavigator();

const getTabOptions = (stackName: string) => {
    let iconName: string = 'home';

    switch(stackName) {
        case RoutesNames.DonationStack:
            iconName = 'donation';
            break;
        case RoutesNames.DistributorStack:
            iconName = 'donation';
            break;
        case RoutesNames.AccountStack:
            iconName = 'donation';
            break;
    }
}

const AppTabs = () => (
    <Tab.Navigator
        initialRouteName={RoutesNames.HomeScreen}
        activeColor='red' inactiveColor="grey"
        barStyle={{backgroundColor: 'yellow'}}
    >
        <Tab.Screen
            name={RoutesNames.HomeStack}
            component={HomeStack}
            options={getTabOptions(RoutesNames.HomeStack)}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({color}) => (
                    <MaterialCommunityIcons name="home" color={color} size={26}/>
                ),
            }}
        />
        <Tab.Screen name={RoutesNames.DonationScreen} component={HomeStack} options={{title: 'Donation'}}/>
        <Tab.Screen name={RoutesNames.DistributorScreen} component={HomeStack} options={{title: 'Distributor'}}/>
        <Tab.Screen name={RoutesNames.AccountScreen} component={HomeStack} options={{title: 'Account'}}/>
    </Tab.Navigator>
);

export default AppTabs;

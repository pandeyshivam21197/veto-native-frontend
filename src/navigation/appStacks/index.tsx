import Icon from '@components/atoms/Icon';
import HomeStack from '@navigation/appStacks/homeStack';
import RoutesNames from '@navigation/routes';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';
import {theme} from '@styles/theme';

const Tab = createMaterialBottomTabNavigator();

const getTabOptions = (stackName: string) => {
  let iconName: string;
  let backgroundColor = 'orange';
  let label = '';

  switch (stackName) {
    case RoutesNames.HomeStack:
      iconName = 'home';
      label = 'Home';
      break;
    case RoutesNames.DonationStack:
      iconName = 'donate';
      label = 'Donation';
      break;
    case RoutesNames.DistributorStack:
      iconName = 'hands-helping';
      label = 'Distributor';
      break;
    case RoutesNames.AccountStack:
      iconName = 'user';
      label = 'Account';
      break;
    default:
      iconName = 'home';
  }

  return {
    tabBarLabel: label,
    tabBarColor: backgroundColor,
    tabBarIcon: ({color}: {color: string}) => {
      return <Icon name={iconName} color={color} size={24} />;
    },
  };
};

const AppTabs = () => (
  <Tab.Navigator
    initialRouteName={RoutesNames.HomeScreen}
    shifting={true}
    activeColor={theme.colors.black}
    inactiveColor={theme.colors.white}>
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

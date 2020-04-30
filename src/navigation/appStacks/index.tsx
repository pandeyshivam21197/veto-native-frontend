import Icon from '@components/atoms/Icon';
import HomeStack from '@navigation/appStacks/homeStack';
import RoutesNames from '@navigation/routes';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import React from 'react';

const Tab = createMaterialBottomTabNavigator();

const getTabOptions = (stackName: string) => {
  let iconName: string;
  let backgroundColor = 'white';
  let label = '';
  const activeColor = 'white';
  const inactiveColor = 'grey';

  switch (stackName) {
    case RoutesNames.HomeStack:
      iconName = 'home';
      label = 'Home';
      backgroundColor = 'orange';
      break;
    case RoutesNames.DonationStack:
      iconName = 'donate';
      label = 'Donation';
      backgroundColor = 'blue';
      break;
    case RoutesNames.DistributorStack:
      iconName = 'hands-helping';
      label = 'Distributor';
      backgroundColor = 'red';
      break;
    case RoutesNames.AccountStack:
      iconName = 'user';
      label = 'Account';
      backgroundColor = 'green';
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
    activeColor,
    inactiveColor,
  };
};

const AppTabs = () => (
  <Tab.Navigator initialRouteName={RoutesNames.HomeScreen} shifting={true}>
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

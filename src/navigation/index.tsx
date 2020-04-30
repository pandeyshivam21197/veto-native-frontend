import {IState} from '@modules/interfaces';
import AppRootStack from '@navigation/appRootStack';
import BootstrapStack from '@navigation/bootstrapStack';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import SplashScreen from '@screens/bootstrapScreens/SplashScreen';
import React from 'react';
import {connect} from 'react-redux';
import RoutesNames from './routes';

const Stack = createStackNavigator();

interface INaviagtionProps {
  isAuth: boolean;
}

class AppNavigation extends React.PureComponent<INaviagtionProps, any> {
  render() {
    const {isAuth} = this.props;

    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName={RoutesNames.SplashScreen}>
          <Stack.Screen
            name={RoutesNames.SplashScreen}
            component={SplashScreen}
            options={{headerShown: false}}
          />
          {isAuth ? (
            <Stack.Screen
              name={RoutesNames.AppRootStack}
              component={AppRootStack}
              options={{headerShown: false}}
            />
          ) : (
            <Stack.Screen
              name={RoutesNames.BootstrapStack}
              component={BootstrapStack}
              options={{headerShown: false}}
            />
          )}
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}

const MapStateToProps = (state: IState) => {
  return {
    isAuth: state.user.isLoggedIn,
  };
};

export default connect(MapStateToProps)(AppNavigation);

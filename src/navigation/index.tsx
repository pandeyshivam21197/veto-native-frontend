import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import appTabs from '@navigation/appScreens';
import RoutesNames from '@navigation/routes';


const Stack = createStackNavigator();

const AppNavigation = () => {
    const isAuth = true;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name="Splash" component={SplashScreen}/>*/}
                {isAuth ? (
                    <>
                        <Stack.Screen name={RoutesNames.AppStack} component={appTabs}/>
                    </>
                ) : (
                    <>
                        {/*<Stack.Screen name="SignIn" component={SignInScreen}/>*/}
                        {/*<Stack.Screen name="SignUp" component={SignUpScreen}/>*/}
                        {/*<Stack.Screen name="OnBoarding" component={OnBoardingScreen}/>*/}
                    </>

                )
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;

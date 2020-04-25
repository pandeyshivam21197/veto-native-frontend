import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import AppRootStack from '@navigation/appRootStack';
import BootstrapStack from '@navigation/bootstrapStack';


const Stack = createStackNavigator();

const AppNavigation = () => {
    const isAuth = true;
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {/*<Stack.Screen name="Splash" component={HomeScreen} options={{ title: 'Splash' }}/>*/}
                {isAuth ?
                    <Stack.Screen name="RootStack" component={AppRootStack} options={{headerShown: false}}/>
                    :
                    < Stack.Screen name="Bootstrap" component={BootstrapStack} options={{headerShown: false}}/>
                }
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default AppNavigation;

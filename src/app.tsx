import rootReducer from '@modules/reducers';
import AppNavigation from '@navigation/index';
import {StoreProviderService} from '@services/StoreProviderService';
import React from 'react'
import {StatusBar, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore} from 'redux';

StoreProviderService.init(() => {
    return createStore(rootReducer);
});

export class App extends React.PureComponent {
    render() {
        return (
            <Provider store={StoreProviderService.getStore()}>
                <View style={styles.container}>
                    <StatusBar/>
                    <AppNavigation/>
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});

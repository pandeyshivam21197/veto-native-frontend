import React from 'react'
import {StatusBar, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import AppNavigation from '@navigation/index';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {StoreProviderService} from '@services/StoreProviderService';
import rootReducer from '@modules/reducers';

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

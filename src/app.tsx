import rootReducer from '@modules/reducers';
import AppNavigation from '@navigation/index';
import {StoreProviderService} from '@services/StoreProviderService';
import React from 'react'
import {StatusBar, StyleSheet, View} from 'react-native';
import 'react-native-gesture-handler';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import * as RNLocalize from 'react-native-localize'
import {LocalService} from "@services/Locale/LocaleService";


export class App extends React.PureComponent {

    constructor(props: any) {
        super(props);
        StoreProviderService.init(() => {
            return createStore(rootReducer);
        });
        LocalService.init();
    }

    private handleLocalizationChange = (): void => {
        try {
            LocalService.init();
        } catch (e) {
            console.log(e);
        }
    };

    componentDidMount() {
        RNLocalize.addEventListener('change', this.handleLocalizationChange)
    }

    componentWillUnmount() {
        RNLocalize.removeEventListener('change', this.handleLocalizationChange)
    }

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

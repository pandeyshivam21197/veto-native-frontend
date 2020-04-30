import rootReducer from '@modules/reducers';
import AppNavigation from '@navigation/index';
import {LocalService} from '@services/Locale/LocaleService';
import {StoreProviderService} from '@services/StoreProviderService';
import React from 'react';
import {SafeAreaView, StatusBar, StyleSheet} from 'react-native';
import 'react-native-gesture-handler';
import * as RNLocalize from 'react-native-localize';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import FlashMessage from 'react-native-flash-message';

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
    RNLocalize.addEventListener('change', this.handleLocalizationChange);
  }

  componentWillUnmount() {
    RNLocalize.removeEventListener('change', this.handleLocalizationChange);
  }

  render() {
    return (
      <Provider store={StoreProviderService.getStore()}>
        <StatusBar />
        <SafeAreaView style={styles.container}>
          <AppNavigation issAuth={false} />
          <FlashMessage />
        </SafeAreaView>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

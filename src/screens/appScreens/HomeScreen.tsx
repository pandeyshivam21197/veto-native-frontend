import ProgressBar from '@components/atoms/ProgressBar';
import {Text} from '@components/atoms/Text';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '@styles/theme';

class HomeScreen extends React.PureComponent {
  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>This is home screen</Text>
        <ProgressBar type={'bar'} barProps={{}} />
        <ProgressBar
          type={'circle'}
          barProps={{
            progress: 0.5,
            showsText: true,
            strokeCap: 'square',
            size: 100,
          }}
        />
        <ProgressBar
          type={'circle'}
          barProps={{
            progress: 0.7,
            showsText: true,
            fill: 'yellow',
            thickness: 0,
            size: 100,
          }}
        />
      </SafeAreaView>
    );
  }
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#262626',
    borderBottomColor: theme.colors.white,
    borderBottomWidth: theme.layout.screenBottomBorderWidth,
  },
});

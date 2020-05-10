import Button from './Button';
import React from 'react';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {StyleSheet} from 'react-native';
import {theme} from '@styles/theme';

interface IGoBack {
  navigation: NavigationScreenProp<NavigationState>;
}

const GoBack = (props: IGoBack) => {
  const onGoBack = (): boolean => props.navigation.goBack();

  return (
    <Button
      iconName="chevron-left"
      iconSize={25}
      onPress={onGoBack}
      showBorder={false}
      needPadding={false}
      containerStyle={styles.goBackButton}
    />
  );
};

export default GoBack;

const styles = StyleSheet.create({
  goBackButton: {
    alignSelf: 'flex-start',
    marginHorizontal: theme.layout.screenHorizontalMargin,
  },
});

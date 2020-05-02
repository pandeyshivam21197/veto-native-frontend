import {StyleSheet, View} from 'react-native';
import {theme} from '@styles/theme';
import React from 'react';

const Divider = (): React.ReactElement => {
  return <View style={styles.separator} />;
};

const styles = StyleSheet.create({
  separator: {
    flex: 1,
    height: theme.viewport.dividerHeight,
    backgroundColor: theme.colors.white,
    marginVertical: 20,
  },
});

export default Divider;

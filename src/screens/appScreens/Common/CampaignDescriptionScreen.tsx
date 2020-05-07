import React from 'react';
import Card from '@components/molecules/Card';
import {
  NavigationScreenProp,
  NavigationState,
  NavigationRoute,
  SafeAreaView,
} from 'react-navigation';
import {ICampaignRequest} from '@domain/interfaces';
import {StyleSheet, View} from 'react-native';
import {theme} from '@styles/theme';
import {ScrollView} from 'react-native-gesture-handler';

interface ICampaignDescriptionProps {
  navigation: NavigationScreenProp<NavigationState>;
  route: NavigationRoute<ICampaignRequest>;
}

class CampaignDescriptionScreen extends React.PureComponent<
  ICampaignDescriptionProps,
  any
> {
  render() {
    const {params} = this.props.route;

    if (!params) {
      return null;
    }

    return (
      <SafeAreaView style={[styles.container, styles.flexOne]}>
        <ScrollView
          keyboardShouldPersistTaps="handled"
          keyboardDismissMode="on-drag"
          showsVerticalScrollIndicator={false}>
          <View style={[styles.flexOne, styles.screenConatiner]}>
            <Card {...params} containerStyle={styles.flexOne} />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }
}

export default CampaignDescriptionScreen;

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    backgroundColor: theme.colors.nero,
    borderBottomColor: theme.colors.white,
    borderBottomWidth: theme.layout.screenBottomBorderWidth,
  },
  screenConatiner: {
    marginHorizontal: theme.layout.screenHorizontalMargin,
    marginVertical: theme.layout.screenVerticalMargin,
  },
});

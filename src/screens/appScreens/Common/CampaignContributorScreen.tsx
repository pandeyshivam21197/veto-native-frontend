import CampaignContributorList from '@components/molecules/CampaignContributorList';
import * as React from 'react';
import {
  NavigationScreenProp,
  NavigationRoute,
  NavigationState,
} from 'react-navigation';
import {IUser} from '@domain/interfaces';
import {SafeAreaView, ScrollView, View, StyleSheet} from 'react-native';
import GoBack from '@components/atoms/GoBack';
import {theme} from '@styles/theme';

interface ICampaignContributorRoute {
  data: IUser[];
}

interface ICampaignContributorScreenProps {
  navigation: NavigationScreenProp<NavigationState>;
  route: NavigationRoute<ICampaignContributorRoute>;
}

const CampaignContributorScreen = (props: ICampaignContributorScreenProps) => {
  const {
    route: {
      params: {data},
    },
    navigation,
  } = props;

  return (
    <SafeAreaView style={[styles.container, styles.flexOne]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        keyboardDismissMode="on-drag"
        showsVerticalScrollIndicator={false}>
        <View style={[styles.flexOne, styles.screenConatiner]}>
          <GoBack navigation={navigation} />
          <CampaignContributorList
            data={data}
            isHorizontal={false}
            containerStyle={styles.contributorContainer}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CampaignContributorScreen;

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
  contributorContainer: {
    marginTop: 12,
  },
});

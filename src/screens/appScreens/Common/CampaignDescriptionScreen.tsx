import Card from '@components/molecules/Card';
import {ICampaignRequest, IEntityAmount} from '@domain/interfaces';
import {theme} from '@styles/theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {
  NavigationRoute,
  NavigationScreenProp,
  NavigationState,
  SafeAreaView,
} from 'react-navigation';
import GoBack from '@components/atoms/GoBack';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import DonationActions from '@modules/donation/actions';

interface ICampaignDescriptionProps {
  navigation: NavigationScreenProp<NavigationState>;
  route: NavigationRoute<ICampaignRequest>;
  patchCampaignDonation: (_id: string, donationAmount: IEntityAmount) => void;
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
            <GoBack navigation={this.props.navigation} />
            <Card
              {...params}
              containerStyle={styles.flexOne}
              onDonationPress={this.onDonation}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    );
  }

  public onDonation = (_id: string, donationAmount: IEntityAmount) => {
    const {patchCampaignDonation} = this.props;
    patchCampaignDonation(_id, donationAmount);
  };
}

const mapDispatchToProps = (dispatch: any) => {
  const {patchCampaignDonation} = DonationActions;

  return bindActionCreators({patchCampaignDonation}, dispatch);
};

export default connect(null, mapDispatchToProps)(CampaignDescriptionScreen);

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

import React from 'react';
import {SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import {IUser} from '@domain/interfaces';
import {theme} from '@styles/theme';
import StateAwareComponent from '@components/organisms/StateAwareComponent';
import {connect} from 'react-redux';
import {IState} from '@modules/interfaces';
import UserSelector from '@modules/user/selectors';
import {bindActionCreators} from 'redux';
import UserActions from '@modules/user/actions';
import LocalService from '@services/Locale/LocaleService';
import HorizontalCampaignRail from '@components/templates/HorizontalCampaignRail';

interface IAccountProps {
  isUserLoading: boolean;
  userData: IUser | null;
  userError: string;
  getUserAccountData: () => void;
}

class AccountScreen extends React.PureComponent<IAccountProps, any> {
  public getUserData = () => {
    this.props.getUserAccountData();
  };

  render() {
    const {isUserLoading, userError} = this.props;
    return (
      <SafeAreaView style={[styles.container, styles.flexOne]}>
        <StateAwareComponent
          loading={isUserLoading}
          error={userError}
          renderComponent={this.renderScreen()}
          onErrorPress={this.getUserData}
        />
      </SafeAreaView>
    );
  }

  public renderScreen = (): React.ReactNode => {
    return (
      <ScrollView style={[styles.screenConatiner, styles.flexOne]}>
        {this.renderUserCampaigns()}
        {this.renderUserJoinedCampaigns()}
        {this.renderUserDonationHistory()}
      </ScrollView>
    );
  };

  public renderUserCampaigns = (): React.ReactNode => {
    const {userData} = this.props;
    if (!userData) {
      return null;
    }
    const {campaignRequestIds} = userData;
    const {t} = LocalService;

    return (
      <HorizontalCampaignRail
        data={campaignRequestIds}
        title={t('Account.userCampaigns')}
      />
    );
  };

  public renderUserJoinedCampaigns = (): React.ReactNode => {
    const {userData} = this.props;
    if (!userData) {
      return null;
    }
    const {joinedCampaignIds} = userData;
    const {t} = LocalService;

    return (
      <HorizontalCampaignRail
        data={joinedCampaignIds}
        title={t('Account.joinedCampaigns')}
      />
    );
  };

  public renderUserDonationHistory = (): React.ReactNode => {
    const {userData} = this.props;
    if (!userData) {
      return null;
    }
    const {donationHistory} = userData;
    const {t} = LocalService;

    return (
      <HorizontalCampaignRail
        data={donationHistory}
        title={t('Account.donationHistory')}
      />
    );
  };
}

const mapStateToProps = (state: IState) => {
  const {getUserData, getUserError, getUserLoading} = UserSelector;

  return {
    isUserLoading: getUserLoading(state),
    userData: getUserData(state),
    userError: getUserError(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {getUserAccountData} = UserActions;

  return bindActionCreators(
    {
      getUserAccountData,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(AccountScreen);

const styles = StyleSheet.create({
  flexOne: {
    flex: 1,
  },
  container: {
    backgroundColor: theme.colors.raisinBlack,
    borderBottomColor: theme.colors.white,
    borderBottomWidth: theme.layout.screenBottomBorderWidth,
  },
  screenConatiner: {
    marginVertical: theme.layout.screenVerticalMargin,
  },
});

import Card from '@components/molecules/Card';
import CardList from '@components/organisms/CardList';
import StateAwareComponent from '@components/organisms/StateAwareComponent';
import {ICampaignRequest} from '@domain/interfaces';
import {theme} from '@styles/theme';
import React from 'react';
// @ts-ignore
import Slider from 'react-native-slider';
import {SafeAreaView, StyleSheet, View} from 'react-native';
import {connect} from 'react-redux';
import DonationActions from '@modules/donation/actions';
import {bindActionCreators} from 'redux';
import DonationSelectors from '@modules/donation/selectors';
import {IState} from '@modules/interfaces';
import {Text} from '@components/atoms/Text';
import LocalService from '@services/Locale/LocaleService';

interface IDonationScreenProps {
  neearestCampaigns: ICampaignRequest[] | null;
  isNearestCampaignsLoading: boolean;
  nearestCampaignsError: string;
  getNearestCampaigns: (location: string, distance: number) => void;
}

interface IDonationState {
  distance: number;
}

class DonationScreen extends React.PureComponent<
  IDonationScreenProps,
  IDonationState
> {
  constructor(props: IDonationScreenProps) {
    super(props);
    this.state = {
      distance: 30,
    };
  }
  componentDidMount() {
    this.fetchNearestCampaigns();
  }

  public fetchNearestCampaigns = (): void => {
    const {getNearestCampaigns} = this.props;
    const {distance} = this.state;
    // TODO: fetch location dynamic, and update the backend
    getNearestCampaigns('banglore', distance);
  };

  render() {
    const {isNearestCampaignsLoading, nearestCampaignsError} = this.props;
    return (
      <SafeAreaView style={[styles.container, styles.flexOne]}>
        <StateAwareComponent
          loading={isNearestCampaignsLoading}
          error={nearestCampaignsError}
          renderComponent={this.renderScreen()}
          onErrorPress={this.fetchNearestCampaigns}
        />
      </SafeAreaView>
    );
  }

  public renderScreen = (): React.ReactNode => {
    const {t} = LocalService;
    const {neearestCampaigns} = this.props;
    const {distance} = this.state;
    if (!neearestCampaigns) {
      return null;
    }

    return (
      <View style={[styles.screenConatiner, styles.flexOne]}>
        <Text
          fontWeight="bold"
          containerStyle={[styles.title, styles.horizontalMargin]}>
          {t('Donate.campaignNearYou')}
        </Text>
        <CardList
          data={neearestCampaigns}
          isHorizontal={false}
          renderItem={this.renderHomeCard}
        />
        <Slider
          value={distance}
          onValueChange={this.onSliderValueChange}
          step={1}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={theme.colors.orange}
          maximumTrackTintColor={theme.colors.white}
        />
      </View>
    );
  };

  public onSliderValueChange = (value: number) => {
    this.setState({distance: value});
  };

  public renderHomeCard = ({
    item,
    index,
  }: {
    item: ICampaignRequest;
    index: number;
  }): React.ReactElement => {
    const {
      _id,
      title,
      subTitle,
      status,
      description,
      thumbnails,
      creatorId,
      donerIds,
      groupMemberIds,
    } = item;

    return (
      <Card
        _id={_id}
        title={title}
        status={status}
        subTitle={subTitle}
        description={description}
        thumbnails={thumbnails}
        creatorId={creatorId}
        donerIds={donerIds}
        groupMemberIds={groupMemberIds}
        cardIndex={index}
      />
    );
  };
}

const mapStateToProps = (state: IState) => {
  const {
    getNearestCampaignsError,
    getNearestCampaignsLoading,
    getNearestCampaigns,
  } = DonationSelectors;

  return {
    neearestCampaigns: getNearestCampaigns(state),
    isNearestCampaignsLoading: getNearestCampaignsLoading(state),
    nearestCampaignsError: getNearestCampaignsError(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {getNearestCampaigns} = DonationActions;

  return bindActionCreators(
    {
      getNearestCampaigns,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(DonationScreen);

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
    marginHorizontal: theme.layout.screenHorizontalMargin,
    marginVertical: theme.layout.screenVerticalMargin,
  },
  title: {
    marginBottom: 12,
  },
});

import Card from '@components/molecules/Card';
import CardList from '@components/organisms/CardList';
import StateAwareComponent from '@components/organisms/StateAwareComponent';
import {ICampaignRequest} from '@domain/interfaces';
import HomeActions from '@modules/home/actions';
import HomeSelector from '@modules/home/selectors';
import {IState} from '@modules/interfaces';
import {theme} from '@styles/theme';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';

interface IHomeProps {
  navigation: NavigationScreenProp<NavigationState>;
  getHomeFeeds: (pageNumbe: number) => void;
  feeds: ICampaignRequest[] | null;
  isFeedsLoading: boolean;
  isFeedsError: string;
}

interface IHomeState {
  page: number;
}

class HomeScreen extends React.PureComponent<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);
    this.state = {
      page: 1,
    };
  }

  componentDidMount() {
    this.getHomeFeeds();
  }

  public getHomeFeeds = (): void => {
    const {getHomeFeeds} = this.props;
    const {page} = this.state;
    getHomeFeeds(page);
  };

  render() {
    const {isFeedsLoading, isFeedsError} = this.props;
    return (
      <SafeAreaView style={[styles.container, styles.flexOne]}>
        <StateAwareComponent
          loading={isFeedsLoading}
          error={isFeedsError}
          renderComponent={this.renderScreen()}
          onErrorPress={this.getHomeFeeds}
        />
      </SafeAreaView>
    );
  }

  public renderScreen = (): React.ReactNode => {
    const {feeds} = this.props;
    if (!feeds) {
      return null;
    }

    return (
      <View style={[styles.screenConatiner, styles.flexOne]}>
        <CardList
          data={feeds}
          isHorizontal={false}
          renderItem={this.renderHomeCard}
        />
      </View>
    );
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
  const {getFeedsError, getFeedsLoading, getHomeFeeds} = HomeSelector;
  return {
    feeds: getHomeFeeds(state),
    isFeedsLoading: getFeedsLoading(state),
    isFeedError: getFeedsError(state),
  };
};

const mapDispatchToProps = (dispatch: any) => {
  const {getHomeFeeds} = HomeActions;

  return bindActionCreators(
    {
      getHomeFeeds,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

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
});

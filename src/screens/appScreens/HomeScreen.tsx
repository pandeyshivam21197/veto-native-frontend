import CardList from '@components/organisms/CardList';
import StateAwareComponent from '@components/organisms/StateAwareComponent';
import {ICampaignRequest} from '@domain/interfaces';
import HomeActions from '@modules/home/actions';
import HomeSelector from '@modules/home/selectors';
import {IState} from '@modules/interfaces';
import {theme} from '@styles/theme';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
'@components/organisms/StateAwareComponent';

interface IHomeProps {
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
      <SafeAreaView style={styles.container}>
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

    return <CardList data={feeds} />;
  };
}

const mapStateToProps = (state: IState) => {
  return {
    feeds: HomeSelector.getHomeFeeds(state),
    isFeedsLoading: HomeSelector.getFeedsLoading(state),
    isFeedError: HomeSelector.getFeedsError(state),
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
  container: {
    flex: 1,
    backgroundColor: theme.colors.raisinBlack,
    borderBottomColor: theme.colors.white,
    borderBottomWidth: theme.layout.screenBottomBorderWidth,
  },
});

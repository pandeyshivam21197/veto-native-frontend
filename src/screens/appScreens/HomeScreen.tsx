import {Text} from '@components/atoms/Text';
import React from 'react';
import {StyleSheet} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {theme} from '@styles/theme';
import CardList from '@components/organisms/CardList';
import {connect} from 'react-redux';
import {IState} from '@modules/interfaces';
import HomeSelector from '@modules/home/selectors';
import {bindActionCreators} from 'redux';
import HomeActions from '@modules/home/actions';

interface IHomeProps {
  getHomeFeeds: (pageNumbe: number) => void;
  feeds: any;
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
    const {getHomeFeeds} = this.props;
    const {page} = this.state;
    getHomeFeeds(page);
  }

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text>This is home screen</Text>
        {/* <CardList/> */}
        {/* <ProgressBar type={'bar'} barProps={{}} />
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
        /> */}
      </SafeAreaView>
    );
  }
}

const mapStateToProps = (state: IState) => {
  return {
    feeds: HomeSelector.getHomeFeeds(state),
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

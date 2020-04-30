import React from 'react';
import BackgroundImage from '@components/atoms/BackgroundImage';
import images from '@assets/images';
import ProgressBar from '@components/atoms/ProgressBar';
import {theme} from '@styles/theme';
import {LocalStorage, LocalStorageKeys} from '@utils/LoacalStorage';
import {NavigationScreenProp, NavigationState} from 'react-navigation';
import RoutesNames from '@navigation/routes';
import axios from 'axios';
import {baseUrl, DEFAULT_API_TIMEOUT} from '@network/Constants';
import {getTokenAuth} from '@domain/graphQueries';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import UserActions from '@modules/user/actions';
import {flashMessage} from '@utils/ErrorUtil';
import {type} from 'os';
import LocaleService from '@services/Locale/LocaleService';

interface ISplashState {
  isLoading: boolean;
}

interface ISplashProps {
  navigation: NavigationScreenProp<NavigationState>;
  setUserLoggedIn: (isLoggedIn: boolean) => void;
}

class SplashScreen extends React.PureComponent<ISplashProps, ISplashState> {
  constructor(props: any) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }

  async componentDidMount() {
    const {navigation, setUserLoggedIn} = this.props;
    const {t} = LocaleService;

    const isOnboarded: string | null = await LocalStorage.get(
      LocalStorageKeys.IS_ONBOARDED,
    );
    const token: string | null = await LocalStorage.get(LocalStorageKeys.TOKEN);

    // check if its a new user
    if (!isOnboarded && !token) {
      navigation.navigate(RoutesNames.OnBoardingScreen);
      return;
    }

    const res = await axios.request({
      method: 'post',
      baseURL: baseUrl,
      timeout: DEFAULT_API_TIMEOUT,
      headers: {
        'Content-type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
      data: getTokenAuth(),
    });
    // check is user is authenticated with the token stored
    const {
      data: {
        data: {getAuthConfirmation},
      },
    } = res;

    if (getAuthConfirmation) {
      setUserLoggedIn(true);
      navigation.navigate(RoutesNames.AppRootStack);
      return;
    }
    flashMessage({message: t('Error.unauthenticatedUser')});
    // if token is not authenticated the redirect to login screen to fetch new token
    navigation.navigate(RoutesNames.BootstrapStack);
  }

  render() {
    const {isLoading} = this.state;

    return (
      <BackgroundImage source={images.splashBackgroundImage}>
        <ProgressBar
          type="circle"
          barProps={{
            color: theme.colors.tomato,
            indeterminate: isLoading,
            style: {alignSelf: 'center', justifyContent: 'center'},
          }}
        />
      </BackgroundImage>
    );
  }
}

const mapDispatchToProps = (dispatch: any) => {
  const {setUserLoggedIn} = UserActions;
  return bindActionCreators(
    {
      setUserLoggedIn,
    },
    dispatch,
  );
};

export default connect(null, mapDispatchToProps)(SplashScreen);

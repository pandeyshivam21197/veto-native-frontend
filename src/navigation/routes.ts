const stacks = {
  AppRootStack: 'AppRootStack',
  BootstrapStack: 'BootstrapStack',
  AppStack: 'AppStack',
  HomeStack: 'HomeStack',
  DonationStack: 'DonationStack',
  DistributorStack: 'DistributorStack',
  AccountStack: 'AccountSStack',
};

const appScreens = {
  HomeScreen: 'HomeScreen',
  DonationScreen: 'DonationScreen',
  DistributorScreen: 'DistributorScreen',
  AccountScreen: 'AccountScreen',
  SettingScreen: 'SettingScreen',
};

const bootStrapScreens = {
  SplashScreen: 'SplashScreen',
  OnBoardingScreen: 'OnBoardingScreen',
  LoginScreen: 'LoginScreen',
  SingUpScreen: 'SingUpScreen',
};

export const RoutesNames = {
  // bootstrap Routes
  ...bootStrapScreens,
  // stack Routes
  ...stacks,
  // app routes
  ...appScreens,
};

export default RoutesNames;

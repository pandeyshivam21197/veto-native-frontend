import StateAwareComponent from '@components/organisms/StateAwareComponent';
import {IState} from '@modules/interfaces';
import UserActions from '@modules/user/actions';
import UserSelector from '@modules/user/selectors';
import LocalService from '@services/Locale/LocaleService';
import {theme} from '@styles/theme';
import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  KeyboardAvoidingView,
  View,
} from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {IUser} from '@domain/interfaces';
import FormTextInput from '@components/molecules/FormTextInput';
import {Formik, FormikProps, FormikValues} from 'formik';
import FormSubmitButton from '@components/molecules/FormSubmitButton';
import Image from '@components/atoms/Image';
import {Text} from '@components/atoms/Text';
// @ts-ignore
import Lightbox from 'react-native-lightbox';
import Button from '@components/atoms/Button';
import * as yup from 'yup';

interface ISettingProps {
  isUserLoading: boolean;
  userData: IUser | null;
  userError: string;
  getUserAccountData: () => void;
}

interface ISettingState {
  userDetails: {
    name: string;
    username: string;
    email: string;
    contactNumber: string;
    DOB: string;
    maxDistance: number;
    oldPassword: string;
    newPassword: string;
  };
  isChangePasswordPress: boolean;
}
class UserSettingScreen extends React.PureComponent<
  ISettingProps,
  ISettingState
> {
  constructor(props: ISettingProps) {
    super(props);
    const {userData} = this.props;

    if (userData) {
      const {name, username, email, contactNumber, DOB, maxDistance} = userData;

      this.state = {
        userDetails: {
          name,
          username,
          email,
          contactNumber,
          DOB,
          maxDistance,
          oldPassword: '',
          newPassword: '',
        },
        isChangePasswordPress: false,
      };
    }
  }
  public getUserData = (): void => {
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
      <KeyboardAvoidingView behavior="padding" style={styles.flexOne}>
        <ScrollView
          contentContainerStyle={[styles.screenConatiner, styles.flexOne]}
          keyboardShouldPersistTaps="handled"
          showsVerticalScrollIndicator={false}>
          {this.renderUserImage()}
          {this.renderDetails()}
        </ScrollView>
      </KeyboardAvoidingView>
    );
  };

  public renderUserImage = (): React.ReactNode => {
    const {userData} = this.props;
    if (!userData) {
      return null;
    }
    const {userImage} = userData;
    return (
      <View style={styles.userImageContainer}>
        <Lightbox renderContent={this.onUserImage}>
          <Image
            source={userImage ? {uri: userImage} : undefined}
            style={styles.image}
            width={100}
            height={100}
          />
        </Lightbox>
      </View>
    );
  };

  public onUserImage = () => {
    const {userData} = this.props;
    if (!userData) {
      return null;
    }
    const {userImage} = userData;

    return (
      <Image
        source={userImage ? {uri: userImage} : undefined}
        style={styles.image}
        width={'100%'}
        height={'50%'}
      />
    );
  };

  public renderDetails = (): React.ReactNode => {
    const {t} = LocalService;
    const {isChangePasswordPress} = this.state;

    return (
      <View style={styles.flexOne}>
        <Formik
          initialValues={this.state.userDetails}
          onSubmit={this.onUserDetailSubmit}
          validationSchema={this.formSchema()}>
          {(formProps: FormikProps<FormikValues>) => (
            <React.Fragment>
              <FormTextInput
                formProps={formProps}
                inputName="name"
                textInputStyle={[styles.textInput, styles.userNameInput]}
              />
              <View style={styles.inputGroupsContainer}>
                <View style={styles.inputGroups}>
                  <FormTextInput
                    label={t('Setting.username')}
                    formProps={formProps}
                    inputName="username"
                    textInputStyle={styles.textInput}
                    constainerStyle={styles.textInputContainer}
                  />
                  <View style={styles.seprator} />
                  <FormTextInput
                    label={t('Setting.email')}
                    formProps={formProps}
                    inputName="email"
                    textInputStyle={styles.textInput}
                    constainerStyle={styles.textInputContainer}
                  />
                </View>
                <View style={styles.inputGroups}>
                  <FormTextInput
                    label={t('Setting.contactNumber')}
                    formProps={formProps}
                    inputType="number"
                    inputName="contactNumber"
                    textInputStyle={styles.textInput}
                    constainerStyle={styles.textInputContainer}
                  />
                  <View style={styles.seprator} />
                  <FormTextInput
                    label={t('Setting.DOB')}
                    formProps={formProps}
                    inputName="DOB"
                    textInputStyle={styles.textInput}
                    constainerStyle={styles.textInputContainer}
                  />
                </View>
                {isChangePasswordPress ? (
                  <React.Fragment>
                    <FormTextInput
                      label={t('Setting.oldPassword')}
                      formProps={formProps}
                      inputName="oldPassword"
                      placeholder={t('Setting.oldPasswordPlaceholed')}
                      textInputStyle={styles.textInput}
                    />
                    <View style={styles.seprator} />
                    <FormTextInput
                      label={t('Setting.newPassword')}
                      formProps={formProps}
                      placeholder={t('Setting.newPasswordPlaceholed')}
                      inputName="newPassword"
                      textInputStyle={styles.textInput}
                    />
                  </React.Fragment>
                ) : (
                  <Button
                    title={'Change Password'}
                    onPress={this.onChangePassword}
                    containerStyle={styles.changePasswordButton}
                  />
                )}
                {this.renderSubmitButton(formProps)}
              </View>
            </React.Fragment>
          )}
        </Formik>
      </View>
    );
  };

  public formSchema = () => {
    const {t} = LocalService;
    return yup.object().shape({
      name: yup.string().trim().required(t('Login.requiredEmail')),
      email: yup.string().trim().email().required(t('Login.requiredEmail')),
      username: yup.string().trim().required(t('Login.requiredEmail')),
      contactNumber: yup.string().trim().required(t('Login.requiredEmail')),
      DOB: yup.string().trim().required(t('Login.requiredEmail')),
      maxDistance: yup.number().required(t('Login.requiredEmail')),
      oldPassword: yup.string().trim().required(t('Login.requiredEmail')),
      newPassword: yup.string().trim().required(t('Login.requiredEmail')),
    });
  };

  public renderSubmitButton = (
    formProps: FormikProps<FormikValues>,
  ): React.ReactNode => {
    const {values} = formProps;
    const {
      userDetails: {
        name,
        username,
        email,
        contactNumber,
        DOB,
        maxDistance,
        oldPassword,
        newPassword,
      },
    } = this.state;

    const showButton =
      values.name !== name ||
      values.username !== username ||
      values.email !== email ||
      values.contactNumber !== contactNumber ||
      values.DOB !== DOB ||
      values.maxDistance !== maxDistance ||
      (values.oldPassword !== oldPassword &&
        values.newPassword !== newPassword);

    if (showButton) {
      return <FormSubmitButton formProps={formProps} buttonTitle={'Save'} />;
    }

    return null;
  };

  public onUserDetailSubmit = () => {};

  public onChangePassword = (): void => {
    this.setState({
      isChangePasswordPress: true,
    });
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

export default connect(mapStateToProps, mapDispatchToProps)(UserSettingScreen);

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
    marginHorizontal: theme.layout.screenHorizontalMargin,
  },
  image: {
    borderRadius: 20,
    overflow: 'hidden',
    alignSelf: 'center',
  },
  userName: {
    marginTop: 12,
    alignSelf: 'center',
  },
  userImageContainer: {
    alignSelf: 'center',
  },
  textInput: {
    color: 'white',
  },
  inputGroups: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
  },
  textInputContainer: {
    flexDirection: 'column',
    flex: 1,
  },
  userNameInput: {
    borderWidth: 0,
    fontSize: 24,
    alignSelf: 'center',
  },
  seprator: {
    width: 12,
  },
  inputGroupsContainer: {
    marginTop: '20%',
  },
  changePasswordButton: {
    marginTop: 16,
  },
});

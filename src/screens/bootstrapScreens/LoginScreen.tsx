import FormSubmitButton from '@components/molecules/FormSubmitButton';
import FormTextInput from '@components/molecules/FormTextInput';
import LocalService from '@services/Locale/LocaleService';
import {Formik, FormikProps, FormikValues} from 'formik';
import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {theme} from "@styles/theme";

interface ILoginState {
    login: {
        email: string,
        password: string;
    }
}

class LoginScreen extends React.PureComponent<any, ILoginState> {

    public constructor(props: any) {
        super(props);
        this.state = {
            login: {
                email: '',
                password: '',
            },
        };
    }

    render() {
        return (
            <View style={[styles.flexOne, styles.container]}>
                <Formik
                    initialValues={this.state.login}
                    onSubmit={this.onSubmitHandler}
                >
                    {this.renderLoginForm}
                </Formik>
            </View>
        )
    }

    public onSubmitHandler = (values: FormikValues) => {
        console.log(values);
    }

    public renderLoginForm = (formProps: FormikProps<FormikValues>) => {
        const {t} = LocalService;

        return (
            <ScrollView
                contentContainerStyle={[styles.flexOne, styles.loginForm]}
                keyboardShouldPersistTaps='handled'
                showsHorizontalScrollIndicator={false}
            >
                <FormTextInput
                    formProps={formProps}
                    inputName={'email'}
                    placeholder={t('Login.emailPlaceHolder')}
                    label={t('Login.emailLabel')}
                />
                <FormTextInput
                    formProps={formProps}
                    inputType={'password'}
                    inputName={'password'}
                    placeholder={t('Login.passwordPlaceHolder')}
                    label={t('Login.passwordLabel')}
                />
                <FormSubmitButton formProps={formProps} buttonTitle={t('Login.login')}/>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    flexOne: {
        flex: 1,
    },
    container: {
        flex: 1,
        marginHorizontal: theme.layout.screenHorizontalMargin,
        marginVertical: theme.layout.screenVerticalMargin,
    },
    loginForm: {
        flex: 1,
        justifyContent: 'center',
        alignContent: 'center'
    }
});

export default LoginScreen;

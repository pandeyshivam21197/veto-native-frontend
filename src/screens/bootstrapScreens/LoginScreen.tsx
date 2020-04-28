import FormSubmitButton from '@components/molecules/FormSubmitButton';
import FormTextInput from '@components/molecules/FormTextInput';
import {Formik, FormikProps, FormikValues} from 'formik';
import React from 'react';
import {TextInput, View} from 'react-native';
import LocalService from "@services/Locale/LocaleService";

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
            <View>
                <TextInput/>
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
            <React.Fragment>
                <FormTextInput
                    formProps={formProps}
                    inputName={'email'}
                    placeholder={t('Login.emailPlaceHolder')}
                    label={t('Login.emailLabel')}
                />
                <FormTextInput
                    formProps={formProps}
                    inputName={'password'}
                    placeholder={t('Login.passwordPlaceHolder')}
                    label={t('Login.passwordLabel')}
                />
                <FormSubmitButton formProps={formProps} buttonTitle={t('Login.login')}/>
            </React.Fragment>
        )
    }
}

export default LoginScreen;

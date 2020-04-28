import FormSubmitButton from '@components/molecules/FormSubmitButton';
import FormTextInput from '@components/molecules/FormTextInput';
import {Formik, FormikProps, FormikValues} from 'formik';
import React from 'react';
import {TextInput, View} from 'react-native';
import * as RNLocalize from 'react-native-localize'
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
        const {translate} = LocalService;
        console.log(translate('Currency'), RNLocalize.getLocales());
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
        return (
            <React.Fragment>
                <FormTextInput
                    formProps={formProps}
                    inputName={'email'}
                    placeholder={'enter you email'}
                    label={'Enter your email'}
                />
                <FormSubmitButton formProps={formProps} buttonTitle={'Login'}/>
            </React.Fragment>
        )
    }
}

export default LoginScreen;

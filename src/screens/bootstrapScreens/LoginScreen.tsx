import {Formik, FormikProps, FormikValues} from 'formik';
import React from "react";
import {TextInput, View} from "react-native";
import FormTextInput from "@components/molecules/FormTextInput";
import FormSubmitButton from "@components/molecules/FormSubmitButton";

class LoginScreen extends React.PureComponent<any, any> {

    render() {
        return (
            <View>
                <TextInput/>
                <Formik
                    initialValues={{email: ''}}
                    onSubmit={values => console.log(values)}
                >
                    {(formProps: FormikProps<FormikValues>) => {
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
                </Formik>
            </View>
        )
    }
}

export default LoginScreen;

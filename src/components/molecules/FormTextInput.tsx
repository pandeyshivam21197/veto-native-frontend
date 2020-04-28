import {WithFieldError} from "@components/molecules/WithFieldError";
import {TextInput, TextInputProps} from "react-native";
import React from "react";
import {FormikErrors, FormikProps, FormikValues} from "formik";
import {Label} from "@components/atoms/Text";

type SupportedInputType = 'email' | 'password' | 'number' | 'phone' | 'grouped-number' | 'default';

interface IFromTextProps extends TextInputProps {
    formProps: FormikProps<FormikValues>;
    inputName: string;
    label?: string;
    inputType?: SupportedInputType;
}

const FormTextInput = (props: IFromTextProps) => {
    const {label, formProps} = props;

    const inputProps = getInputProps(props);

    let error: string | FormikErrors<any> | string[] | FormikErrors<any>[] | undefined = getError(props);

    if (error) {
        // TODO: change textInput border
    }

    return (
        <React.Fragment>
            {label && <Label>{label}</Label>}
            <WithFieldError errors={error}>
                <TextInput {...inputProps}/>
            </WithFieldError>
        </React.Fragment>
    )
}

const getInputProps = (props: IFromTextProps): FormikValues => {
    const {formProps, inputName, placeholder, inputType = 'default'} = props;
    const {values, handleChange} = formProps;

    let inputProps: TextInputProps = {
        value: values[inputName],
        placeholder: placeholder,
        onChangeText: handleChange(inputName),
    };

    switch (inputType) {
        case 'email':
            inputProps = {...inputProps, ...{keyboardType: 'email-address'}};
            break;
        case 'password':
            inputProps = {
                ...inputProps,
                secureTextEntry: true,
            };
            break;
        default:
            break;
    }

    return inputProps;
}

const getError =
    (props: IFromTextProps): string | string[] | FormikErrors<any> | FormikErrors<any>[] | undefined => {
        const {formProps, inputName} = props;
        const {errors, touched} = formProps;

        return touched[inputName] && errors[inputName] ? errors[inputName] : undefined;
    };

export default FormTextInput;

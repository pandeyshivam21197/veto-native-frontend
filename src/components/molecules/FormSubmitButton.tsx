import {Button} from '@components/atoms/Button';
import {FormikProps, FormikValues} from 'formik';
import React from 'react';
import {StyleSheet} from 'react-native';

interface IFormButton {
    formProps: FormikProps<FormikValues>;
    buttonTitle: string;
}

const FormSubmitButton = (props: IFormButton) => {
    const {buttonTitle, formProps} = props;
    const {handleSubmit} = formProps;

    return (
        <Button onPress={handleSubmit} title={buttonTitle} buttonType={'ghost'} containerStyle={styles.container} isLoading={false}/>
    )
}

const styles = StyleSheet.create({
    container: {
        marginTop: 60,
        width: 150,
        alignSelf: 'center',
        backgroundColor: 'red'
    },
});

export default FormSubmitButton;

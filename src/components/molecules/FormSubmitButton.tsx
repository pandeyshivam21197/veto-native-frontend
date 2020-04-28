import {Button} from '@components/atoms/Button';
import {FormikProps, FormikValues} from 'formik';
import React from 'react';

interface IFormButton {
    formProps: FormikProps<FormikValues>;
    buttonTitle: string;
}
const FormSubmitButton = (props: IFormButton) => {
    const {buttonTitle, formProps} = props;
    const {handleSubmit} = formProps;

    return(
        <Button onPress={handleSubmit} title={buttonTitle} buttonType={'ghost'}/>
    )
}

export default FormSubmitButton;

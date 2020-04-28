import {Button} from "@components/atoms/Button";
import React from "react";
import {FormikProps, FormikValues} from "formik";

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

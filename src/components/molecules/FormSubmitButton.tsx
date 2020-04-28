import {Button} from "@components/atoms/Button";
import React from "react";

interface IFormButton {
    onPress: () => void;
    buttonTitle: string;
}
const FormSubmitButton = (props: IFormButton) => {
    const {onPress, buttonTitle} = props;

    return(
        <Button onPress={onPress} title={buttonTitle} buttonType={'ghost'}/>
    )
}

export default FormSubmitButton;

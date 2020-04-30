import {Button} from '@components/atoms/Button';
import {FormikProps, FormikValues} from 'formik';
import React from 'react';
import {StyleSheet} from 'react-native';

interface IFormButton {
  formProps: FormikProps<FormikValues>;
  buttonTitle: string;
  isLoading: boolean;
}

const FormSubmitButton = (props: IFormButton) => {
  const {buttonTitle, formProps, isLoading = false} = props;
  const {handleSubmit} = formProps;

  return (
    <Button
      disabled={isLoading}
      onPress={handleSubmit}
      title={buttonTitle}
      buttonType={'ghost'}
      containerStyle={styles.container}
      isLoading={isLoading}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    width: 150,
    alignSelf: 'center',
  },
});

export default FormSubmitButton;

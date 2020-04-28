import { Label } from '@components/atoms/Text';
import { theme } from '@styles/theme';
import { FormikErrors } from 'formik';
import React, { Fragment } from 'react';
import {StyleProp, StyleSheet, TextStyle} from 'react-native';

interface IProps {
  children: string | React.ReactNode | null;
  errors?: string | FormikErrors<any> | string[] | FormikErrors<any>[];
  hideError?: boolean;
  labelStyle?: StyleProp<TextStyle>;
}

export const WithFieldError = (props: IProps) => {
  const {children, errors, hideError = false, labelStyle = {}} = props;
  const hasError = !!errors;
  // @ts-ignore
  const error = hasError && errors as string[] && errors.length > 1 ? errors[0] : errors;
  return (
    <Fragment>
      {children}
      {hasError && !hideError &&
        <Label
          style={[styles.error, styles.label, labelStyle]}
        >
          {error}
        </Label>
      }
    </Fragment>
  );
};

const styles = StyleSheet.create({
  error: {
    color: theme.colors.tomato,
  },
  label: {
    marginTop: 3,
  },
});

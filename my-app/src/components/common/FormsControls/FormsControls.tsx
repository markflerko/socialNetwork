import React from "react";
import { WrappedFieldInputProps, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import classes from "./FormsControls.module.css";

type FormControlParamsType = {
  meta: WrappedFieldMetaProps;
};

const FormControl: React.FC<FormControlParamsType> = ({
  meta: { touched, error },
  children,
}) => {
  const hasError = touched && error;

  return (
    <div className={classes.formControl + " " + (hasError && classes.error)}>
      {children}
      {hasError && <span>{error}</span>}
    </div>
  ); 
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...restProps} {...input} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...restProps} {...input} />
    </FormControl>
  );
};

export type LoginFormValuesType = {
  email: string;
  password: string;
  rememberMe: boolean;
  captcha: string;
};

type LoginFormValuesTypeKeys = keyof LoginFormValuesType;
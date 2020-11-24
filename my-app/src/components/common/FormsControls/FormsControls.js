import React from 'react';
import classes from './FormsControls.module.css';

const FormControl = ({ input, meta, element, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={classes.formControl + ' ' + (hasError && classes.error)} >
      {props.children}
      {hasError && <span>{meta.error}</span>}
    </div >
  )
}

export const Textarea = (props) => {
  const { input, meta, element, ...restProps } = props;
  return (
    <FormControl {...props}><textarea {...restProps} {...input} /></FormControl>
  )
}

export const Input = (props) => {
  const { input, meta, element, ...restProps } = props;
  return (
    <FormControl {...props}><input {...restProps} {...input} /></FormControl>
  )
}

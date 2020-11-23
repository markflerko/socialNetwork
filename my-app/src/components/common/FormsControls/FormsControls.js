import React from 'react';
import classes from './FormsControls.module.css';

const FormControl = ({ input, meta, ...props }) => {
  const hasError = meta.touched && meta.error;

  return (
    <div className={classes.formControl + ' ' + (hasError && classes.error)} >
      {props.child}
      {hasError && <span>{meta.error}</span>}
    </div >
  )
}

export const Textarea = ({ input, meta, ...props }) => {
  return (
    <FormControl {...props}>
      <textarea {...props} {...input} />
    </FormControl>
  )
}

export const Input = ({ input, meta, ...props }) => {
  return (
    <FormControl {...props}>
      <input {...props} {...input} />
    </FormControl>
  )
}

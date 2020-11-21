import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'login'}
          placeholder={'login'}
          component={'input'}
        />
      </div>
      <div>
        <Field
          name={'password'}
          placeholder={'password'}
          component={'input'}
        />
      </div>
      <div>
        <Field
          name={'rememberMe'}
          type={'checkbox'}
          component={'input'}
        />
      </div>
      <div><button>Sign in</button></div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {
  const onSubmit = (formData) => {

  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}

export default Login;
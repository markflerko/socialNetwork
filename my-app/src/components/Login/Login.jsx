import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import required from '../../utils/validators/required';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'login'}
          placeholder={'login'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={'password'}
          placeholder={'password'}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={'rememberMe'}
          type={'checkbox'}
          component={Input}
          validate={[required]}
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
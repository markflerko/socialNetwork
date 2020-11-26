import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import required from '../../utils/validators/required';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom';
import styles from '../../components/common/FormsControls/FormsControls.module.css';

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field
          name={'email'}
          placeholder={'email'}
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
      {props.error && <div className={styles.formSummaryError}>
        {props.error}
      </div>}
      <div><button>Sign in</button></div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = (props) => {

  const onSubmit = (formData) => {
    props.login(formData.email, formData.password, formData.rememberMe)
  }

  if (props.isAuth) {
    return <Redirect to={'/Profile'} />
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} />
    </div>
  )
}
const mapStateToProps = (state) => ({
  isAuth: state.auth.isAuth
})
export default connect(mapStateToProps, { login })(Login);
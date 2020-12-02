import React from 'react';
import classes from './Login.module.css';
import { reduxForm, Field } from 'redux-form';
import { Input } from '../common/FormsControls/FormsControls';
import required from '../../utils/validators/required';
import { connect } from 'react-redux';
import { login } from '../../redux/authReducer'
import { Redirect } from 'react-router-dom';
import styles from '../../components/common/FormsControls/FormsControls.module.css';

const LoginForm = ({ handleSubmit, error }) => {
  return (
    <form onSubmit={handleSubmit}>
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
          validate={[/* required */]}
        />
      </div>
      {error && <div className={styles.formSummaryError}>
        {error}
      </div>}
      <div><button>Sign in</button></div>
    </form>
  )
}

const ReduxLoginForm = reduxForm({
  form: 'login'
})(LoginForm)

const Login = ({ login, isAuth }) => {

  const onSubmit = (formData) => {
    login(formData.email, formData.password, formData.rememberMe)
  }

  if (isAuth) {
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
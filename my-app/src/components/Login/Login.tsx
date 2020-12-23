import React from "react";
import classes from "./Login.module.css";
import { reduxForm, Field, InjectedFormProps } from "redux-form";
import { Input, LoginFormValuesType } from "../common/FormsControls/FormsControls";
import required from "../../utils/validators/required";
import { connect } from "react-redux";
import { login } from "../../redux/authReducer";
import { Redirect } from "react-router-dom";
import styles from "../../components/common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../redux/reduxStore";

type LoginFromOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<
  InjectedFormProps<LoginFormValuesType, LoginFromOwnProps> & LoginFromOwnProps
> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          name={"email"} 
          placeholder={"email"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"password"}
          placeholder={"password"}
          component={Input}
          validate={[required]}
        />
      </div>
      <div>
        <Field
          name={"rememberMe"}
          type={"checkbox"}
          component={Input}
          validate={
            [
              /* required */
            ]
          }
        />
      </div>
      {captchaUrl && <img src={captchaUrl} />}
      {captchaUrl && (
        <Field
          placeholder={"password"}
          name={"captcha"}
          component={Input}
          validate={[required]}
        />
      )}

      {error && <div className={styles.formSummaryError}>{error}</div>}
      <div>
        <button>Sign in</button>
      </div>
    </form>
  );
};

const ReduxLoginForm = reduxForm<LoginFormValuesType, LoginFromOwnProps>({
  form: "login",
})(LoginForm);

type MapStateToPropsType = {
  captchaUrl: string | null;
  isAuth: boolean;
};

type MapDispatchToPropsType = {
  login: (
    email: string,
    password: string,
    rememberMe: boolean,
    captcha: string,
  ) => void;
};

const Login: React.FC<MapStateToPropsType & MapDispatchToPropsType> = ({
  login,
  isAuth,
  captchaUrl,
}) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    login(
      formData.email,
      formData.password,
      formData.rememberMe,
      formData.captcha,
    );
  };

  if (isAuth) {
    return <Redirect to={"/Profile"} />;
  }

  return (
    <div>
      <h1>Login</h1>
      <ReduxLoginForm onSubmit={onSubmit} captchaUrl={captchaUrl} />
    </div>
  );
};
const mapStateToProps = (state: AppStateType): MapStateToPropsType => ({
  captchaUrl: state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});
export default connect(mapStateToProps, { login })(Login);

import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import styles from "../../components/common/FormsControls/FormsControls.module.css";
import { login } from "../../redux/authReducer";
import { AppStateType } from "../../redux/reduxStore";
import required from "../../utils/validators/required";
import { Input, LoginFormValuesType } from "../common/FormsControls/FormsControls";

type LoginFromOwnProps = {
  captchaUrl: string | null;
};

const LoginForm: React.FC<InjectedFormProps<LoginFormValuesType, LoginFromOwnProps> & LoginFromOwnProps> = ({
  handleSubmit,
  error,
  captchaUrl,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field name={"email"} placeholder={"email"} component={Input} validate={[required]} />
      </div>
      <div>
        <Field name={"password"} placeholder={"password"} component={Input} validate={[required]} />
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
      {captchaUrl && <Field placeholder={"password"} name={"captcha"} component={Input} validate={[required]} />}

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

export const LoginPage: React.FC = () => {
  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);

  const dispatch = useDispatch();

  const onSubmit = (formData: LoginFormValuesType) => {
    dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha));
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
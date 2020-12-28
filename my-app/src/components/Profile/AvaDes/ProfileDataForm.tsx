import React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import classes from "./ProfileDataForm.module.css";
import { Input, LoginFormValuesType, Textarea } from "../../common/FormsControls/FormsControls";
import { ProfileType } from "../../../types/types";

type PropsType = {
  handleSubmit: () => void;
  profile: ProfileType;
  error: string;
};

const ProfileDataForm: React.FC<InjectedFormProps<ProfileType, PropsType> & PropsType> = ({
  handleSubmit,
  profile,
  error,
}) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <button>save</button>
      </div>
      {error && <div className={classes.error}>{error}</div>}
      <div>
        <b>Full Name</b>
        {<Field placeholder={"Full Name"} name={"fullName"} validate={[]} component={Input} />}
      </div>
      <div>
        <b>Looking for a job</b>
        {<Field placeholder={""} name={"lookingForAJob"} validate={[]} component={Input} type={"checkbox"} />}
      </div>
      <div>
        <b>My professional skills</b>
        {
          <Field
            placeholder={"my profisiional skillds"}
            name={"lookingForAJobDescription"}
            validate={[]}
            component={Textarea}
          />
        }
      </div>
      <div>
        <b>About me</b>
        {<Field placeholder={"about me"} name={"aboutMe"} validate={[]} component={Textarea} />}
      </div>
      <div>
        <b>Contacts</b>
        {Object.keys(profile.contacts).map((key) => {
          return (
            <div key={key} className={classes.contact}>
              <b>
                {key}:
                <Field placeholder={key} name={"contacts." + key} validate={[]} component={Input} />
              </b>
            </div>
          );
        })}
      </div>
    </form>
  );
};

const ProfileDataReduxForm = reduxForm<ProfileType, PropsType>({ form: "edit_profile" })(ProfileDataForm);

export default ProfileDataReduxForm;
 
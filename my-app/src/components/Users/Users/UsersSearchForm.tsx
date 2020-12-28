import { Field, Form, Formik } from "formik";
import React from "react";
import { FilterType } from "../../../redux/usersReducer";
import classes from "./UsersSearchForm.module.css";

const userSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

type FormType = {
  term: string,
  friend: 'true' | 'false' | 'null'
}

type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
};

const UserSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === "null" ? null : values.friend === 'true' ? true : false
    }

    onFilterChanged(filter);
    setSubmitting(false);
  };

  return (
    <div className={classes.Formik}>
      <Formik initialValues={{ term: "", friend: 'null' }} validate={userSearchFormValidate} onSubmit={submit}>
        {({ isSubmitting }) => (
          <Form>
            <Field type="text" name="term" />
            <Field name="friend" as="select">
              <option value="null">All</option>
              <option value="true">Only followed</option>
              <option value="false">Only unfollowed</option>
            </Field>
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
});

export default UserSearchForm;

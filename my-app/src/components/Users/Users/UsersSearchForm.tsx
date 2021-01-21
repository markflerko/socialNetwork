import { Field, Form, Formik } from "formik";
import React from "react";
import { useSelector } from "react-redux";
import { FilterType } from "../../../redux/usersReducer";
import { getUserFilter } from "../../../redux/usersSelectors";
import classes from "./UsersSearchForm.module.css";

const userSearchFormValidate = (values: any) => {
  const errors = {};
  return errors;
};

type FormFriendType = "true" | "false" | "null";
type FormType = {
  term: string;
  friend: FormFriendType;
};

type PropsType = {
  onFilterChanged: (filter: FilterType) => void;
};

const UserSearchForm: React.FC<PropsType> = React.memo(({ onFilterChanged }) => {
  const submit = (values: FormType, { setSubmitting }: { setSubmitting: (isSubmiting: boolean) => void }) => {
    const filter: FilterType = {
      term: values.term,
      friend: values.friend === "null" ? null : values.friend === "true" ? true : false,
    };

    onFilterChanged(filter);
    setSubmitting(false);
  };

  const filter = useSelector(getUserFilter);

  return (
    <div className={classes.Formik}>
      <Formik
        enableReinitialize
        initialValues={{ term: filter.term, friend: String(filter.friend) as FormFriendType }}
        validate={userSearchFormValidate}
        onSubmit={submit}
      >
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

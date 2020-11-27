import { stopSubmit } from "redux-form";
import usersAPI, { authAPI } from "../api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
  email: null,
  id: null,
  login: null,
  isAuth: false,
}

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state
  }
}

export const setAuthUserData = (email, id, login, isAuth) => ({
  type: SET_USER_DATA,
  payload: { email, id, login, isAuth }
});

export const auth = () => (dispatch) => {
  return usersAPI.auth().then(data => {
    if (data.resultCode === 0) {
      let { email, id, login } = data.data;
      dispatch(setAuthUserData(email, id, login, true));
    }
  });
}

export const login = (email, password, rememberMe) => {

  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.data.resultCode === 0) {
        dispatch(auth())
      } else {
        let message = data.data.messages.length > 0 ? data.data.messages[0] : 'some error';
        dispatch(stopSubmit('login', { message }));
      }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false))
      }
    });
  }
}

export default authReducer;

import { stopSubmit } from "redux-form";
import usersAPI, { authAPI } from "../api";

const SET_USER_DATA = 'samurai-network/auth/SET_USER_DATA';

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

export const auth = () => async (dispatch) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { email, id, login } = response.data.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
}

export const login = (email, password, rememberMe) => async (dispatch) => {
  let response = await authAPI.login(email, password, rememberMe);

  if (response.data.resultCode === 0) {
    dispatch(auth())
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'some error';
    dispatch(stopSubmit('login', { message }));
  }
}

export const logout = () => async (dispatch) => {
  let response = authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false))
  }
}


export default authReducer;

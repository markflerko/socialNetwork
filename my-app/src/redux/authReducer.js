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
        isAuth: true,
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

export const auth = () => {
  return (dispatch) => {
    usersAPI.auth().then(data => {
      if (data.resultCode === 0) {
        let { email, id, login } = data.data;
        dispatch(setAuthUserData(email, id, login, true));
      }
    });
  }
}

export const login = (email, password, rememberMe) => {
  return (dispatch) => {
    authAPI.login(email, password, rememberMe).then(data => {
      if (data.resultCode === 0) {
        dispatch(auth())
      }
    });
  }
}

export const logout = () => {
  return (dispatch) => {
    authAPI.logout().then(data => {
      if (data.resultCode === 0) {
        dispatch(auth(null, null, null, false))
      }
    });
  }
}

export default authReducer;

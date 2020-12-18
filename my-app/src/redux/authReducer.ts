import { AnyRecord } from "dns";
import { stopSubmit } from "redux-form";
import usersAPI, { authAPI, securityAPI } from "../api";

const SET_USER_DATA = "samurai-network/auth/SET_USER_DATA";
const GET_CAPTCHA_URL_SUCCESS = "samurai-network/auth/GET_CAPTCHA_URL_SUCCESS";

export type InitialStateType2 = {
  email: string | null;
  id: string | null;
  login: string | null;
  isAuth: boolean;
  captchaUrl: string | null;
};

let initialState = {
  email: null as string | null,
  id: null as string | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

export type InitialStateType = typeof initialState;

const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case GET_CAPTCHA_URL_SUCCESS:
    case SET_USER_DATA: {
      return {
        ...state,
        ...action.payload,
      };
    }

    default:
      return state;
  }
};

type SetAuthUserDataPayloadActionType = {
  email: string | null;
  id: number | null;
  login: string | null;
  isAuth: boolean | null;
};

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA;
  payload: SetAuthUserDataPayloadActionType;
};

export const setAuthUserData = (
  email: string | null,
  id: number | null,
  login: string | null,
  isAuth: boolean,
): SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { email, id, login, isAuth },
});

export type getCapthcaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS;
  payload: { captchaUrl: string };
};

export const getCapthcaUrlSuccess = (captchaUrl: string): getCapthcaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: { captchaUrl },
});

export const auth = () => async (dispatch: any) => {
  let response = await authAPI.me();

  if (response.data.resultCode === 0) {
    let { email, id, login } = response.data.data;
    dispatch(setAuthUserData(email, id, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
) => async (dispatch: any) => {
  let response = await authAPI.login(email, password, rememberMe, captcha);

  if (response.data.resultCode === 0) {
    dispatch(auth());
  } else {
    if (response.data.resultCode === 10) {
      dispatch(getCaptchaUrl());
    }
    let message = response.data.messages.length > 0 ? response.data.messages[0] : "some error";
    dispatch(stopSubmit("login", { message }));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(getCapthcaUrlSuccess(captchaUrl));
};

export const logout = () => async (dispatch: any) => {
  let response = authAPI.logout();

  if (response.resultCode === 0) {
    dispatch(setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

import { BaseThunkType, InferActionsTypes } from "./reduxStore";
import { stopSubmit } from "redux-form";
import { ResultCodeForCaptchaEnum, ResultCodesEnum } from "../api";
import { authAPI } from "./../api/authAPI";
import { securityAPI } from "./../api/securityAPI";
import { Action } from "redux";

let initialState = {
  email: null as string | null,
  id: null as number | null,
  login: null as string | null,
  isAuth: false,
  captchaUrl: null as string | null,
};

const authReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "GET_CAPTCHA_URL_SUCCESS":
    case "SET_USER_DATA": {
      return {
        ...state,
        ...action.payload,
      }
    }

    default:
      return state; 
  }
};

export const actions = {
  setAuthUserData: (
    email: string | null,
    id: number | null,
    login: string | null,
    isAuth: boolean,
  ) =>
    ({
      type: 'SET_USER_DATA',
      payload: { email, id, login, isAuth },
    } as const),

  getCapthcaUrlSuccess: (captchaUrl: string) =>
    ({
      type: 'GET_CAPTCHA_URL_SUCCESS',
      payload: { captchaUrl },
    } as const),
};

export const auth = (): ThunkType => async (dispatch) => {
  let meData = await authAPI.me();

  if (meData.resultCode === ResultCodesEnum.Success) {
    let { email, id, login } = meData.data;
    dispatch(actions.setAuthUserData(email, id, login, true));
  }
};

export const login = (
  email: string,
  password: string,
  rememberMe: boolean,
  captcha: string,
): ThunkType => async (dispatch) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha);

  if (loginData.resultCode === ResultCodesEnum.Success) {
    dispatch(auth());
  } else {
    if (loginData.resultCode === ResultCodeForCaptchaEnum.CaptchaIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message =
      loginData.messages.length > 0 ? loginData.messages[0] : "some error";
    dispatch(stopSubmit("login", { message }));
  }
};

export const getCaptchaUrl = (): ThunkType => async (dispatch) => {
  const response = await securityAPI.getCaptchaUrl();
  const captchaUrl = response.data.url;
  dispatch(actions.getCapthcaUrlSuccess(captchaUrl));
};

export const logout = (): ThunkType => async (dispatch) => {
  let response = await authAPI.logout();

  if (response.data.resultCode === ResultCodesEnum.Success) {
    dispatch(actions.setAuthUserData(null, null, null, false));
  }
};

export default authReducer;

export type InitialStateType = typeof initialState;
type ActionsTypes = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsTypes | ReturnType<typeof stopSubmit>>;

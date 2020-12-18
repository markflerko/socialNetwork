// import { stopSubmit } from "redux-form";
import usersAPI, { authAPI } from "../api";
import { auth } from "./authReducer";

const INITIALIZED_SUCCES = "INITIALIZED_SUCCES";

export type InitialStateType = {
  initialized: boolean;
};

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state: InitialStateType = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case INITIALIZED_SUCCES: {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

type initializedSuccesActionType = {
  type: typeof INITIALIZED_SUCCES; // 'INITIALIZED_SUCCES'
};

export const initializedSucces = (): initializedSuccesActionType => ({
  type: INITIALIZED_SUCCES,
});

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(auth());

  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
};

export default appReducer;

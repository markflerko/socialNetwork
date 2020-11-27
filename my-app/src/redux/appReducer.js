import { stopSubmit } from "redux-form";
import usersAPI, { authAPI } from "../api";
import { auth } from "./authReducer";

const INITIALIZED_SUCCES = 'INITIALIZED_SUCCES';

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case INITIALIZED_SUCCES: {
      return {
        ...state,
        initialized: true
      }
    }

    default:
      return state
  }
}

export const initializedSucces = () => ({
  type: INITIALIZED_SUCCES,
});

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(auth());

  Promise.all([promise]).then(() => {
    dispatch(initializedSucces());
  });
}

export default appReducer;

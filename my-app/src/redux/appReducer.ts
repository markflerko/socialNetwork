import { InferActionsTypes } from './reduxStore';
// import { stopSubmit } from "redux-form";
import { auth } from "./authReducer";

let initialState = {
  initialized: false,
};

type ActionsType = InferActionsTypes<typeof actions>

export type InitialStateType = typeof initialState;

const appReducer = (
  state = initialState,
  action: ActionsType,
): InitialStateType => {
  switch (action.type) {
    case 'INITIALIZED_SUCCES': {
      return {
        ...state,
        initialized: true,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  initializedSucces: () => ({
    type: 'INITIALIZED_SUCCES' as const,
  }),
};

export const initializeApp = () => (dispatch: any) => {
  let promise = dispatch(auth());

  Promise.all([promise]).then(() => {
    dispatch(actions.initializedSucces());
  });
};

export default appReducer;

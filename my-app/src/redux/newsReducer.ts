import { updateObjectInArray } from "./../utils/object-helpers";
import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/usersAPI";
import { NewsType, UserType } from "../types/types";
import { AppStateType, InferActionsTypes, BaseThunkType } from "./reduxStore";
import { APIResponseType } from "../api";
import { newsAPI } from "../api/newsAPI";

let initialState = {
  newsItems: [] as Array<NewsType>,
};

export type InitialStateType = typeof initialState;

const newsReducer = (state = initialState, action: ActionsTypes): InitialStateType => {
  switch (action.type) {
    case "SET_NEWS": {
      return { ...state, newsItems: action.data };
    }

    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  setNews: (data: Array<NewsType>) =>
    ({
      type: "SET_NEWS",
      data,
    } as const),
};

export const getNews = (): ThunkType => {
  return async (dispatch) => {
    let data = await newsAPI.getNews();
    dispatch(actions.setNews(data));
  };
};

export default newsReducer;

type ThunkType = BaseThunkType<ActionsTypes>;
type DispatchType = Dispatch<ActionsTypes>;
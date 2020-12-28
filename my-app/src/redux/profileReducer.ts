import { InferActionsTypes, BaseThunkType } from "./reduxStore";
import { PostsType, ProfileType, PhotosType } from "./../types/types";
import { stopSubmit } from "redux-form";
import { profileAPI } from "../api/profileAPI";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: 20 },
    { id: 2, message: "Its my first post", likesCount: 15 },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type initialStateType = typeof initialState;

const profileReducer = (
  state = initialState,
  action: any,
): initialStateType => {
  switch (action.type) {
    case "ADD_POST": {
      let stateCopy = { ...state };

      stateCopy.posts = [...state.posts];

      let newPost = {
        id: stateCopy.posts[stateCopy.posts.length - 1].id + 1,
        message: action.newPostText as string,
        likesCount: 0,
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case "SET_USER_PROFILE": {
      return { ...state, profile: action.profile };
    }

    case "SET_STATUS": {
      return { ...state, status: action.status };
    }

    case "DELETE_POST": {
      return {
        ...state,
        posts: state.posts.filter((p) => p.id != action.postId),
      };
    }

    case "SAVE_PHOTO_SUCCESS": {
      return {
        ...state,
        profile: { ...state.profile, photos: action.photos } as ProfileType,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  addPostActionCreator: (newPostText: string) =>
    ({
      type: "ADD_POST",
      newPostText,
    } as const),

  deletePost: (postId: number | string) =>
    ({
      type: "DELETE_POST",
      postId,
    } as const),

  setStatus: (status: string) =>
    ({
      type: "SET_STATUS",
      status,
    } as const),

  setUserProfile: (profile: ProfileType) =>
    ({
      type: "SET_USER_PROFILE",
      profile,
    } as const),

  savePhotoSuccess: (photos: PhotosType) =>
    ({
      type: "SAVE_PHOTO_SUCCESS",
      photos,
    } as const),
};

export const setUser = (userId: number | null): ThunkType => async (
  dispatch,
) => {
  if (!userId) userId = 12567;

  let response = await profileAPI.setUsers(userId);
  dispatch(actions.setUserProfile(response));
};

export const getStatus = (userId: number | null): ThunkType => async (
  dispatch,
) => {
  if (!userId) userId = 12567;

  let data = await profileAPI.getStatus(userId);

  dispatch(actions.setStatus(data));
};

export const updateStatus = (status: string): ThunkType => async (dispatch) => {
  try {
    let data = await profileAPI.updateStatus(status);

    if (data.resultCode === 0) {
      dispatch(actions.setStatus(status));
    }
  } catch (error) {
    debugger;
  }
};

export const savePhoto = (file: any): ThunkType => async (dispatch) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(actions.savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType): ThunkType => async (
  dispatch,
  getState,
) => {
  const userId = getState().auth.id;
  let response = await profileAPI.saveProfile(profile);
  debugger;
  if (response.data.resultCode === 0) {
    dispatch(setUser(userId));
  } else {
    dispatch(stopSubmit("edit_profile", { _error: response.data.messages[0] }));
    return Promise.reject(response.data.messages[0]);
  }
};

export default profileReducer;

type ActionsType = InferActionsTypes<typeof actions>;
type ThunkType = BaseThunkType<ActionsType | ReturnType<typeof stopSubmit>>;

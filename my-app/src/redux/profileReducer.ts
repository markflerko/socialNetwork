import { PostsType, ProfileType, PhotosType } from './../types/types';
import { stopSubmit } from "redux-form";
import usersAPI, { profileAPI } from "../api";

const ADD_POST = "ADD_POST";
const DELETE_POST = "DELETE_POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";
const SAVE_PHOTO_SUCCESS = "SAVE_PHOTO_SUCCESS";

let initialState = {
  posts: [
    { id: 1, message: "Hi, how are you?", likesCount: "20" },
    { id: 2, message: "Its my first post", likesCount: "15" },
  ] as Array<PostsType>,
  profile: null as ProfileType | null,
  status: "",
  newPostText: "",
};

export type initialStateType = typeof initialState;

const profileReducer = (state = initialState, action: any): initialStateType => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = { ...state };

      stateCopy.posts = [...state.posts];

      let newPost = {
        id: stateCopy.posts[stateCopy.posts.length - 1].id + 1,
        message: action.newPostText as string,
        likesCount: "0",
      };

      return {
        ...state,
        posts: [...state.posts, newPost],
        newPostText: "",
      };
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case DELETE_POST: {
      return { ...state, posts: state.posts.filter((p) => p.id != action.postId) };
    }

    case SAVE_PHOTO_SUCCESS: {
      return { ...state, profile: { ...state.profile, photos: action.photos } as ProfileType };
    }

    default:
      return state;
  }
};

type AddPostActionCreatorActionType = {
  type: typeof ADD_POST;
  newPostText: string;
};
export const addPostActionCreator = (newPostText: string): AddPostActionCreatorActionType => ({
  type: ADD_POST,
  newPostText,
});
type DeletePostActionType = {
  type: typeof DELETE_POST;
  postId: number | string;
};
export const deletePost = (postId: number | string): DeletePostActionType => ({ type: DELETE_POST, postId });
type SetStatusActionType = {
  type: typeof SET_STATUS;
  status: string;
};
export const setStatus = (status: string): SetStatusActionType => ({ type: SET_STATUS, status });
type SetUserProfileActionType = {
  type: typeof SET_USER_PROFILE;
  profile: ProfileType;
};
export const setUserProfile = (profile: ProfileType): SetUserProfileActionType => ({ type: SET_USER_PROFILE, profile });
type SavePhotoSuccessActionType = {
  type: typeof SAVE_PHOTO_SUCCESS;
  photos: PhotosType;
};
export const savePhotoSuccess = (photos: PhotosType): SavePhotoSuccessActionType => ({
  type: SAVE_PHOTO_SUCCESS,
  photos,
});

export const setUser = (userId: number) => async (dispatch: any) => {
  if (!userId) userId = 12567;

  let response = await profileAPI.setUsers(userId);
  dispatch(setUserProfile(response));
};

export const getStatus = (userId: number) => async (dispatch: any) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
};

export const updateStatus = (status: string) => async (dispatch: any) => {
  try {
    let response = await profileAPI.updateStatus(status);

    if (response.data.resultCode === 0) {
      dispatch(setStatus(status));
    }
  } catch (error) {
    debugger;
  }
};

export const savePhoto = (file: any) => async (dispatch: any) => {
  let response = await profileAPI.savePhoto(file);

  if (response.data.resultCode === 0) {
    dispatch(savePhotoSuccess(response.data.data.photos));
  }
};

export const saveProfile = (profile: ProfileType) => async (dispatch: any, getState: any) => {
  const userId = getState().auth.userId;
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

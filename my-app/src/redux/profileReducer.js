import usersAPI, { profileAPI } from "../api";

const ADD_POST = 'ADD_POST';
const DELETE_POST = 'DELETE_POST';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: '20' },
    { id: 2, message: 'Its my first post', likesCount: '15' },
  ],
  profile: null,
  status: '',
}

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST: {
      let stateCopy = { ...state };

      stateCopy.posts = [...state.posts];

      let newPost = {
        id: stateCopy.posts[stateCopy.posts.length - 1].id + 1,
        message: action.newPostText,
        likesCount: 0
      };

      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';

      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    case DELETE_POST: {
      return { ...state, posts: state.posts.filter(p => p.id != action.postId) };
    }

    default:
      return state
  }
}

export const addPostActionCreator = (newPostText) => ({ type: ADD_POST, newPostText });
export const deletePost = (postId) => ({ type: DELETE_POST, postId });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });

export const setUser = (userId) => async (dispatch) => {
  if (!userId) userId = '2';

  let response = await profileAPI.setUsers(userId);
  dispatch(setUserProfile(response));
}

export const getStatus = (userId) => async (dispatch) => {
  let response = await profileAPI.getStatus(userId);

  dispatch(setStatus(response.data));
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status);

  if (response.data.resultCode === 0) {
    dispatch(setStatus(status));
  }
}

export default profileReducer;

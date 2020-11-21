import usersAPI, { profileAPI } from "../api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: '20' },
    { id: 2, message: 'Its my first post', likesCount: '15' },
  ],
  newPostText: 'markus lucius castus',
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
        message: state.newPostText,
        likesCount: 0
      };

      stateCopy.posts.push(newPost);
      stateCopy.newPostText = '';

      return stateCopy;
    }

    case UPDATE_NEW_POST_TEXT: {
      let stateCopy = { ...state };
      stateCopy.newPostText = action.newText;
      return stateCopy;
    }

    case SET_USER_PROFILE: {
      return { ...state, profile: action.profile };
    }

    case SET_STATUS: {
      return { ...state, status: action.status };
    }

    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const setStatus = (status) => ({ type: SET_STATUS, status });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile })

export const setUser = (userId) => {
  return (dispatch) => {
    if (!userId) userId = '2';
    profileAPI.setUsers(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export const getStatus = (userId) => {
  return (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
      debugger;
      dispatch(setStatus(response.data));
    });
  }
}

export const updateStatus = (status) => {
  return (dispatch) => {
    profileAPI.updateStatus(status).then(response => {
      debugger;
      if (response.data.resultCode === 0) {
        dispatch(setStatus(status));
      }
    });
  }
}

export default profileReducer;

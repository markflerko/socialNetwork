import usersAPI from "../api";

const ADD_POST = 'ADD_POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE_NEW_POST_TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: '20' },
    { id: 2, message: 'Its my first post', likesCount: '15' },
  ],
  newPostText: 'markus lucius castus',
  profile: null,
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
      return {...state, profile: action.profile};
    }

    default:
      return state
  }
}

export const addPostActionCreator = () => ({ type: ADD_POST });

export const updateNewPostTextActionCreator = (text) => ({
  type: UPDATE_NEW_POST_TEXT,
  newText: text,
})

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})

export const setUser = (userId) => {
  return (dispatch) => {
    if(!userId) userId = '2';
    usersAPI.setUsers(userId).then(data => {
      dispatch(setUserProfile(data));
    });
  }
}

export default profileReducer;

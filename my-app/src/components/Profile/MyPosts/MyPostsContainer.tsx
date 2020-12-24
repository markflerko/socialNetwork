import React from 'react';
import { actions } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { AppStateType } from '../../../redux/reduxStore';

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch: any) => {
  return {
    //@ts-ignore
    addPost: (newPostText) => {
      dispatch(actions.addPostActionCreator(newPostText))
    },
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;


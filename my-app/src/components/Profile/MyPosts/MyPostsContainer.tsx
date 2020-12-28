import React from 'react';
import { actions } from '../../../redux/profileReducer';
import { connect } from 'react-redux';
import MyPosts, { DispatchPropsType, StatePropsType } from './MyPosts';
import { AppStateType } from '../../../redux/reduxStore';

let mapStateToProps = (state: AppStateType) => {
  return {
    posts: state.profilePage.posts,
    newPostText: state.profilePage.newPostText
  }
}

const MyPostsContainer = connect<StatePropsType, DispatchPropsType, {}, AppStateType>(mapStateToProps, {
  addPost: actions.addPostActionCreator
})(MyPosts);

export default MyPostsContainer;


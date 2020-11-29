import profileReducer, { addPostActionCreator, deletePost } from './profileReducer';

let state = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: '20' },
    { id: 2, message: 'Its my first post', likesCount: '15' },
  ],
}

test('length of posts should be incremented', () => {
  let action = addPostActionCreator('markflerko.com');


  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe((+state.posts.length + 1));
});

test('last message', () => {
  let action = addPostActionCreator('markflerko.com');

  let newState = profileReducer(state, action);

  expect(newState.posts[2].message).toBe('markflerko.com');
});

test('after deleting length of messages should be decrement', () => {
  let action = deletePost(1);

  let newState = profileReducer(state, action);

  expect(newState.posts.length).toBe((+state.posts.length - 1));
});

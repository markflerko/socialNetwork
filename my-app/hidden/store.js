import dialogsReducer from "../src/redux/dialogsReducer";
import profileReducer from "../src/redux/profileReducer";
import sidebarReducer from "../src/redux/sidebarReducer";

let store = {
  _callSubscriber() {
    console.log('state has been changed');
  },

  _state: {
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: '20' },
        { id: 2, message: 'Its my first post', likesCount: '15' },
      ],
      newPostText: 'markus lucius castus',
    },
    dialogsPage: {
      dialogsData: [
        { id: 1, name: 'Dimych', avaImg: 'https://i.insider.com/5f341b9e5fa9a45644447e89?width=856' },
        { id: 2, name: 'Egor', avaImg: 'https://yt3.ggpht.com/a/AATXAJy96YWKawk2Uu3QncQ6WFxQCYADSTyil3zAS5vj5Q=s88-c-k-c0x00ffffff-no-rj' },
        { id: 3, name: 'Mark', avaImg: 'https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s88-c-k-c0x00ffffff-no-rj' },
        { id: 4, name: 'Alex', avaImg: 'https://rslang-team42-andreimedvedevsaratov.netlify.app/assets/img/Aliaksei_Palanevich.jpg' },
        { id: 5, name: 'Lex', avaImg: 'https://yt3.ggpht.com/a/AATXAJxpBp_t03f_AAa4sr6GhAGyqs-vMULVV-v7F7jVoA=s176-c-k-c0x00ffffff-no-rj-mo' },
      ],
      messagesData: {
        1: [
          { id: 1, send: 'Hi' },
          { id: 2, get: 'Howwww' },
          { id: 3, get: '1mln' },
          { id: 4, get: 'until 30 y.o.' },
        ],
        2: [
          { id: 1, send: 'rfdsfsd' },
          { id: 2, get: 'fds' },
          { id: 3, send: 'fsd' },
          { id: 4, get: 'fdsfsdf 30 y.o.' },
        ],
        3: [
          { id: 1, send: 'Hfdsi' },
          { id: 2, get: 'fds' },
          { id: 3, send: 'fds' },
        ],
        4: [
          { id: 1, send: 'Howwww' },
          { id: 2, get: 'until 30 y.o.' },
        ],
        5: [
          { id: 1, send: 'Hi' },
          { id: 2, send: '1mln' },
          { id: 3, get: 'until 30 y.o.' },
        ],
      },
      messageText: '',
    },
    sidebar: {
      friendsOnline: [
        'https://i.insider.com/5f341b9e5fa9a45644447e89?width=856',
        'https://yt3.ggpht.com/a/AATXAJy96YWKawk2Uu3QncQ6WFxQCYADSTyil3zAS5vj5Q=s88-c-k-c0x00ffffff-no-rj',
        'https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s88-c-k-c0x00ffffff-no-rj',
      ]
    },
  },

  _addPost() {
    let arr = this._state.profilePage.posts;

    let newPost = {
      id: arr[arr.length - 1].id + 1,
      message: this._state.profilePage.newPostText,
      likesCount: 0
    };

    arr.push(newPost);
    this._state.profilePage.newPostText = '';
    this._callSubscriber(store);
  },

  _updateNewPostText(action) {
    this._state.profilePage.newPostText = action.newText;
    this._callSubscriber(store);
  },

  _updateNewMessage(action) {
    this._state.dialogsPage.messageText = action.newMessage;
    this._callSubscriber(store);
  },

  _addMessage(action) {
    let arr = this._state.dialogsPage.messagesData[action.id];

    let newMessage = {
      id: arr[arr.length - 1].id + 1,
      send: this._state.dialogsPage.messageText,
    };

    arr.push(newMessage);
    this._state.dialogsPage.messageText = '';
    this._callSubscriber(store);
  },

  getState() {
    return this._state;
  },

  subscribe(observer) {
    this._callSubscriber = observer;
  },

  dispatch(action) {
    this._state.profilePage = profileReducer(this._state.profilePage, action);
    this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
    this._state.sidebar = sidebarReducer(this._state.sidebar, action);

    this._callSubscriber(this._state);
  }
}

window.state = store._state;

export default store;
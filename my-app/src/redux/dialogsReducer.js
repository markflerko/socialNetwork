const ADD_MESSAGE = 'ADD_MESSAGE';

let initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {

  switch (action.type) {
    case ADD_MESSAGE: {
      let stateCopy = { ...state };

      stateCopy.messagesData[action.id] = [...state.messagesData[action.id]];

      let arr = stateCopy.messagesData[action.id];

      let newMessage = {
        id: arr[arr.length - 1].id + 1,
        send: action.newMessage,
      };

      arr.push(newMessage);
      return stateCopy;
    }

    default:
      return state;
  }
}

export const addMessage = (id, newMessage) => ({
  type: ADD_MESSAGE,
  id: id,
  newMessage: newMessage,
})

export default dialogsReducer;
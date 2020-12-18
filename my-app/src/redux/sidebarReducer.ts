let initialState = {
  friendsOnline: [
    "https://i.insider.com/5f341b9e5fa9a45644447e89?width=856",
    "https://yt3.ggpht.com/a/AATXAJy96YWKawk2Uu3QncQ6WFxQCYADSTyil3zAS5vj5Q=s88-c-k-c0x00ffffff-no-rj",
    "https://yt3.ggpht.com/a/AATXAJxegcKj7lnz8MCMgcAz-gpSgPs5u5yMvynOEWiL=s88-c-k-c0x00ffffff-no-rj",
  ],
};

export type InitialStateType = typeof initialState;

const sidebarReducer = (state = initialState, action: any) => {
  return state;
};

export default sidebarReducer;

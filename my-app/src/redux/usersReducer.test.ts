import usersReducer, { actions, InitialStateType } from "./usersReducer";

let state: InitialStateType;

beforeEach(() => {
  state = {
    users: [
      { id: 0, followed: false, name: "kekser", photos: { small: null, large: null }, status: "status0" },
      { id: 1, followed: false, name: "kekser1", photos: { small: null, large: null }, status: "status1" },
      { id: 2, followed: true, name: "kekser2", photos: { small: null, large: null }, status: "status2" },
      { id: 3, followed: true, name: "kekser3", photos: { small: null, large: null }, status: "status3" },
    ],
    pageSize: 5,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingProgress: [],
  };
});

test("", () => {
  const newState = usersReducer(state, actions.follow(1));

  expect(newState.users[0].followed).toBeFalsy();
  expect(newState.users[1].followed).toBeTruthy();
});

test("", () => {
  const newState = usersReducer(state, actions.unfollow(3));

  expect(newState.users[2].followed).toBeTruthy();
  expect(newState.users[3].followed).toBeFalsy();
});

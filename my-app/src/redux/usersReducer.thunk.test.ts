import { APIResponseType, ResultCodesEnum } from "./../api/index";
import { usersAPI } from "./../api/usersAPI";
import { actions, followUser,unfollowUser } from "./usersReducer";

jest.mock("../api/usersAPI");
const userAPIMock = usersAPI as jest.Mocked<typeof usersAPI>;

const result: APIResponseType = {
  resultCode: ResultCodesEnum.Success,
  data: {},
  messages: [],
};

const dispatchMock = jest.fn();
const getStateMock = jest.fn();

beforeEach(() => {
  dispatchMock.mockClear();
  getStateMock.mockClear();
  userAPIMock.followUser.mockClear();
  userAPIMock.unfollowUser.mockClear();
})

userAPIMock.followUser.mockReturnValue(Promise.resolve(result));
userAPIMock.unfollowUser.mockReturnValue(Promise.resolve(result));

test("success follow thunk", async () => {
  const thunk = followUser(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.follow(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});

test("success unfollow thunk", async () => {
  const thunk = unfollowUser(1);

  await thunk(dispatchMock, getStateMock, {});

  expect(dispatchMock).toBeCalledTimes(3);
  expect(dispatchMock).toHaveBeenNthCalledWith(1, actions.toggleFollowingProgress(true, 1));
  expect(dispatchMock).toHaveBeenNthCalledWith(2, actions.unfollow(1));
  expect(dispatchMock).toHaveBeenNthCalledWith(3, actions.toggleFollowingProgress(false, 1));
});

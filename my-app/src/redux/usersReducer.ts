import { Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import { usersAPI } from "../api/usersAPI";
import { UserType } from "../types/types";
import { AppStateType, InferActionsTypes, BaseThunkType } from "./reduxStore";

let initialState = {
  users: [] as Array<UserType>,
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingProgress: [] as Array<number>, //array of users id
};

export type InitialStateType = typeof initialState;

const usersReducer = (
  state = initialState,
  action: ActionsTypes,
): InitialStateType => {
  switch (action.type) {
    // case FOLLOW: {
    //   return {
    //     ...state,
    //     users: updateObjectInArray(
    //       state.users,
    //       action.userId,
    //       "id",
    //       { followed: true }
    //     )
    //   }
    // }

    // case UNFOLLOW: {
    //   return {
    //     ...state,
    //     users: updateObjectInArray(
    //       state.users,
    //       action.userId,
    //       "id",
    //       { followed: false }
    //     )
    //   }
    // }

    case 'FOLLOW': {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: true };
          }
          return u;
        }),
      };
    }

    case 'UNFOLLOW': {
      return {
        ...state,
        users: state.users.map((u) => {
          if (u.id === action.userId) {
            return { ...u, followed: false };
          }
          return u;
        }),
      };
    }

    case 'SET_USERS': {
      return { ...state, users: action.users };
    }

    case 'SET_CURRENT_PAGE': {
      return { ...state, currentPage: action.currentPage };
    }

    case 'SET_TOTAL_USERS_COUNT': {
      return {
        ...state,
        totalUsersCount: action.count > 40 ? 40 : action.count,
      };
    }

    case 'TOGGLE_IS_FETCHING': {
      return { ...state, isFetching: action.isFetching };
    }

    case 'TOGGLE_FOLLOWING_PROGRESS': {
      return {
        ...state,
        followingProgress: action.isFetching
          ? [...state.followingProgress, action.userId]
          : state.followingProgress.filter((id) => id != action.userId),
      };
    }

    default:
      return state;
  }
};

type ActionsTypes = InferActionsTypes<typeof actions>;

export const actions = {
  follow: (userId: number) =>
    ({
      type: 'FOLLOW',
      userId,
    } as const),

  unfollow: (userId: number) =>
    ({
      type: 'UNFOLLOW',
      userId,
    } as const),

  setUsers: (users: Array<UserType>) =>
    ({
      type: 'SET_USERS',
      users,
    } as const),

  setCurrentPage: (currentPage: number) =>
    ({
      type: 'SET_CURRENT_PAGE',
      currentPage,
    } as const),

  setTotalUsersCount: (totalUsersCount: number) =>
    ({
      type: 'SET_TOTAL_USERS_COUNT',
      count: totalUsersCount,
    } as const),

  toggleIsFetching: (isFetching: boolean) =>
    ({
      type: 'TOGGLE_IS_FETCHING',
      isFetching,
    } as const),

  toggleFollowingProgress: (isFetching: boolean, userId: number) =>
    ({
      type: 'TOGGLE_FOLLOWING_PROGRESS',
      isFetching,
      userId,
    } as const),
};

type ThunkType = BaseThunkType<ActionsTypes>
type DispatchType = Dispatch<ActionsTypes>;

export const requestUsers = (page: number, pageSize: number): ThunkType => {
  return async (dispatch, getState) => {
    dispatch(actions.toggleIsFetching(true));
    let data = await usersAPI.getUsers(page, pageSize);
    dispatch(actions.toggleIsFetching(false));
    dispatch(actions.setUsers(data.items));
    dispatch(actions.setTotalUsersCount(data.totalCount));
  };
};

const _followUnfollowFlow = async (
  dispatch: DispatchType,
  id: number,
  apiMethod: any,
  actionCreator: (id: number) => ActionsTypes,
) => {
  dispatch(actions.toggleFollowingProgress(true, id));
  let data = await apiMethod(id);
  if (data.resultCode == 0) {
    dispatch(actionCreator(id));
  }
  dispatch(actions.toggleFollowingProgress(false, id));
};

export const unfollowUser = (id: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      id,
      usersAPI.unfollowUser.bind(usersAPI),
      actions.unfollow,
    );
  };
};

export const followUser = (id: number): ThunkType => {
  return async (dispatch) => {
    _followUnfollowFlow(
      dispatch,
      id,
      usersAPI.followUser.bind(usersAPI),
      actions.follow,
    );
  };
};

export default usersReducer;

import { ThunkAction } from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware, compose, Action } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import sidebarReducer from './sidebarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import {reducer as formReducer} from 'redux-form';
import newsReducer from './newsReducer';

let reducers = combineReducers({
  profilePage: profileReducer,
  dialogsPage: dialogsReducer,
  sidebar: sidebarReducer,
  usersPage: usersReducer,
  auth: authReducer,
  form: formReducer,
  app: appReducer,
  news: newsReducer
});

// type PropertiesTypes<T> = T extends {[key: string]: infer U} ? U : never;
// export type InferActionsTypes<T extends {[key: string]: (...args: any[]) => any}> = ReturnType<PropertiesTypes<T>>

export type InferActionsTypes<T> = T extends {[key: string]: (...args: any[]) => infer U } ? U : never;

type RootReducerType = typeof reducers;
export type AppStateType = ReturnType<RootReducerType>;

export type BaseThunkType<A extends Action, R = Promise<void>> = ThunkAction<R, AppStateType, unknown, A>;

//@ts-ignore
const composeEnhacers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
let store = createStore(reducers, composeEnhacers(applyMiddleware(thunkMiddleware)));

//@ts-ignore
window.__store__ = store;

export default store;
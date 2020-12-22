import { combineReducers, createStore, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import menuReducer from './menuReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import appReducer from './appReducer';
import thunkMiddleware from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';

let reducers = combineReducers({
  profileReducer,
  dialogsReducer,
  menuReducer,
  friendsReducer,
  usersReducer,
  authReducer,
  appReducer,
  form: formReducer,
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;

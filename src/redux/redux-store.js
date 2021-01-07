import { combineReducers, createStore, applyMiddleware, compose } from 'redux';
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

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

export default store;

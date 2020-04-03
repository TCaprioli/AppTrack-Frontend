import { combineReducers } from 'redux';
import signupReducer from './signup';
import cardDataReducer from './cardArray'


export default combineReducers({
  loggedIn:signupReducer,
  cardArray:cardDataReducer
});

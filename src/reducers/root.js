import { combineReducers } from 'redux';
import signupReducer from './signup';
import cardDataReducer from './cardArray'
import searchReducer from './search'



export default combineReducers({
  loggedIn:signupReducer,
  cardObjects:cardDataReducer,
  searchTerm:searchReducer

});

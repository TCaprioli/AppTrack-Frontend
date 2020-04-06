import { combineReducers } from 'redux';
import signupReducer from './signup';
import cardDataReducer from './cardArray'
import searchReducer from './search'
import showReducer from './show'



export default combineReducers({
  loggedIn:signupReducer,
  cardObjects:cardDataReducer,
  searchTerm:searchReducer,
  showCard:showReducer

});

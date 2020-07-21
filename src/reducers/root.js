import { combineReducers } from 'redux';
import signupReducer from './signup';
import cardDataReducer from './cardArray'
import searchReducer from './search'
import showReducer from './showCard'
import resumeReducer from './resume'
import showResReducer from './showResume'
import folderReducer from './folders'



export default combineReducers({
  loggedIn:signupReducer,
  cardObjects:cardDataReducer,
  searchTerm:searchReducer,
  showCard:showReducer,
  resumeData:resumeReducer,
  showResume:showResReducer,
  folderObjects:folderReducer

});

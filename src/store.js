import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducers/root'
import thunk from 'redux-thunk';

export function configureStore(){
  return createStore(
    rootReducer,applyMiddleware(thunk)
    
  );
}

export const store = configureStore()

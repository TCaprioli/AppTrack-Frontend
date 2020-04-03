import { createStore,applyMiddleware,compose } from 'redux'
import rootReducer from './reducers/root'
import thunk from 'redux-thunk';

export function configureStore(){
  return createStore(
    rootReducer,compose(applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
  );
}

export const store = configureStore()

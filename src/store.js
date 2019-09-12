import {createStore, combineReducers, applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk';
import SignupState from './auth/reducer/signup';


export default createStore(
  combineReducers({
    SignupState,
  }),
  applyMiddleware(ReduxThunk),
);

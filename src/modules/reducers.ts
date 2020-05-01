import {combineReducers} from 'redux';
import homeReducer from './home/reducer';
import userReducer from './user/reducer';

export default combineReducers({
  user: userReducer,
  home: homeReducer,
});

import {combineReducers} from 'redux';
import homeReducer from './home/reducer';
import userReducer from './user/reducer';
import donationReducer from './donation/reducer';

export default combineReducers({
  user: userReducer,
  home: homeReducer,
  donation: donationReducer,
});

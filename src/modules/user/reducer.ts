import {IFluxStandardAction} from '@modules/interfaces';
import {userTypes} from './actions';

export interface IUserState {
  isLoggedIn: boolean;
}

const initialLoginState = {
  isLoggedIn: false,
};

const userReducer = (
  state: IUserState = initialLoginState,
  action: IFluxStandardAction<any>,
) => {
  switch (action.type) {
    case userTypes.setUserLoggedIn:
      return {
        ...state,
        ['isLoggedIn']: action.payload,
      };

    default:
      return state;
  }
};

export default userReducer;

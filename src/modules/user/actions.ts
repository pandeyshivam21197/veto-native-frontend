import {IFluxStandardAction} from '@modules/interfaces';

const userPrefix = 'LOGIN/';

export const userTypes = {
  setUserLoggedIn: `${userPrefix}SET_LOGGED_IN`,
};

const setUserLoggedIn = (payload: boolean): IFluxStandardAction<boolean> => {
  return {
    type: userTypes.setUserLoggedIn,
    payload,
  };
};

const UserActions = {setUserLoggedIn};

export default UserActions;

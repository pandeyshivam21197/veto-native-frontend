import {IUserState} from './user/reducer';
import {IHomeState} from './home/reducer';

export interface IFluxStandardAction<
  Payload = undefined,
  Meta = undefined,
  Error = string
> {
  type: string;
  payload?: Payload;
  error?: Error;
  meta?: Meta;
}

export interface IState {
  user: IUserState;
  home: IHomeState;
}

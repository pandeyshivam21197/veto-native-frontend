import {IUserState} from './user/reducer';

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
  home: any;
}

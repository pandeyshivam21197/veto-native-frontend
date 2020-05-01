import {ICampaignRequest} from '@domain/interfaces';

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

export interface IHomeState {
  feeds: ICampaignRequest[] | null;
  loading: {
    feeds: boolean;
  };
  error: {
    feeds: string;
  };
}

export interface IState {
  home: IHomeState;
}

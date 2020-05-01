import {IFluxStandardAction} from '@modules/interfaces';
import {homeTypes} from './actions';
import {ICampaignRequest} from '@domain/interfaces';

export interface IHomeState {
  feeds: ICampaignRequest[] | null;
  loading: {
    feeds: boolean;
  };
  error: {
    feeds: string;
  };
}

const initialHomeState = {
  feeds: null,
  loading: {
    feeds: true,
  },
  error: {
    feeds: '',
  },
};

const homeReducer = (
  state: IHomeState = initialHomeState,
  action: IFluxStandardAction<any>,
) => {
  switch (action.type) {
    case homeTypes.homeFeedLoading:
      return {
        ...state,
        ['loading']: {
          ...state.loading,
          ['feeds']: true,
        },
      };
    case homeTypes.homeFeedSuccess:
      return {
        ...state,
        ['feeds']: action.payload,
        ['loading']: {
          ...state.loading,
          ['feeds']: false,
        },
      };
    case homeTypes.homeFeedError:
      return {
        ...state,
        ['error']: {
          ['feeds']: action.error,
        },
        ['loading']: {
          ...state.loading,
          ['feeds']: false,
        },
      };

    default:
      return state;
  }
};

export default homeReducer;

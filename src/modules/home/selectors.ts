import {IState} from '@modules/interfaces';
import {ICampaignRequest} from '@domain/interfaces';

const getHomeFeeds = (state: IState): ICampaignRequest[] | null => {
  console.log(state, 'state!!');
  const {
    home: {feeds},
  } = state;
  console.log(feeds, 'sselector!!');
  return feeds;
};
const getFeedsLoading = (state: IState): boolean => {
  const {
    home: {
      loading: {feeds},
    },
  } = state;

  return feeds;
};
const getFeedsError = (state: IState): string => {
  const {
    home: {
      error: {feeds},
    },
  } = state;

  return feeds;
};

const HomeSelector = {getHomeFeeds, getFeedsLoading, getFeedsError};

export default HomeSelector;

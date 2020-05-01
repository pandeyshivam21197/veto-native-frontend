import {IFluxStandardAction} from '@modules/interfaces';
import {fetchHomeFeeds} from '@domain/homeRepository';
import {ICampaignRequest} from '@domain/interfaces';

const homeTypePrefix = 'HOME/';

const homeTypes = {
  homeFeedLoading: `${homeTypePrefix}HOME_FEEDS_LOADING`,
  homeFeedSuccess: `${homeTypePrefix}HOME_FEEDS_SUCCESS`,
  homeFeedError: `${homeTypePrefix}HOME_FEEDS_ERROR`,
};

const setHomeFeedsLoading = (
  loading: boolean,
): IFluxStandardAction<boolean> => {
  return {
    type: homeTypes.homeFeedLoading,
    payload: loading,
  };
};

const setHomeFeedsSuccess = (payload: any): IFluxStandardAction<any> => {
  return {
    type: homeTypes.homeFeedLoading,
    payload,
  };
};

const setHomeFeedsError = (
  error: string,
): IFluxStandardAction<undefined, undefined, string> => {
  return {
    type: homeTypes.homeFeedLoading,
    error,
  };
};

const getHomeFeeds = (pageNumber: number) => async (
  dispatch: any,
): Promise<any> => {
  dispatch(setHomeFeedsLoading);
  try {
    const feeds: ICampaignRequest[] = await fetchHomeFeeds(pageNumber);
    dispatch(setHomeFeedsSuccess(feeds));
  } catch (error) {
    dispatch(setHomeFeedsError(error.message));
  }
};

const HomeActions = {
  getHomeFeeds,
};

export default HomeActions;

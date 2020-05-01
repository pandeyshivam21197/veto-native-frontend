import ApiClient from '@network/ApiClient';
import {baseUrl} from '@network/Constants';
import {getHomeCampaignRequests} from './graphQueries';
import {ICampaignRequest} from './interfaces';

const apiClient = new ApiClient({baseUrl});

export const fetchHomeFeeds = (
  pageNumber: number,
): Promise<ICampaignRequest[]> => {
  return apiClient.post(getHomeCampaignRequests(pageNumber), {
    'Content-Type': 'application/json',
  });
};

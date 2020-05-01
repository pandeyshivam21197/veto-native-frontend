import ApiClient from '@network/ApiClient';
import {baseUrl} from '@network/Constants';
import {getHomeCampaignRequests} from './graphQueries';
import {ICampaignRequest} from './interfaces';

const apiClient = new ApiClient({baseUrl});

export const fetchHomeFeeds = async (
  pageNumber: number,
): Promise<ICampaignRequest[]> => {
  return await apiClient.post(getHomeCampaignRequests(pageNumber), {
    'Content-Type': 'application/json',
  });
};

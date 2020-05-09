import {nearestDonationCampaign} from '@domain/graphQueries';
import ApiClient from '@network/ApiClient';
import {baseUrl} from '@network/Constants';
import {ICampaignRequest, Response} from './interfaces';

interface IGetNearestDonationCampaign {
  getNearestDonationCampaign: ICampaignRequest[];
}
const apiClient = new ApiClient({baseUrl});

export const fetchNearestDonationCampaign = async (
  location: string,
  distance: number,
): Promise<Response<IGetNearestDonationCampaign>> => {
  return await apiClient.post(nearestDonationCampaign(location, distance), {
    'Content-Type': 'application/json',
  });
};

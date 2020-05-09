import ApiClient from '@network/ApiClient';
import {baseUrl} from '@network/Constants';
import {patchCampaignEntity, patchCampaignDonation} from '@domain/graphQueries';
import {IEntity, Response, IEntityAmount} from './interfaces';

interface IPatchCampaignEntity {
  postCampaignEntity: IEntity;
}
const apiClient = new ApiClient({baseUrl});

export const postCampaignEntity = async (
  campaignRequestId: string,
  entityInput: IEntity[],
): Promise<Response<IPatchCampaignEntity>> => {
  return await apiClient.post(
    patchCampaignEntity(campaignRequestId, entityInput),
    {
      'Content-Type': 'application/json',
    },
  );
};
export const postCampaignDonation = async (
  campaignRequestId: string,
  entityAmount: IEntityAmount,
): Promise<Response<IPatchCampaignEntity>> => {
  return await apiClient.post(
    patchCampaignDonation(campaignRequestId, entityAmount),
    {
      'Content-Type': 'application/json',
    },
  );
};

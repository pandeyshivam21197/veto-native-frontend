import {patchCampaignEntity} from '@domain/graphQueries';
import ApiClient from '@network/ApiClient';
import {baseUrl} from '@network/Constants';
import {IEntity, Response} from './interfaces';

interface IPatchCampaignEntity {
  postCampaignEntity: IEntity[];
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

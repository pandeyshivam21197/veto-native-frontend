import {IState} from '@modules/interfaces';
import RoutesNames from '@navigation/routes';
import {ICampaignRequest} from '@domain/interfaces';

export const getCampaignById = (
  state: IState,
  id: string,
  screenName: string,
): ICampaignRequest | null => {
  let campaignRequests: ICampaignRequest[] | null = [];
  if (screenName === RoutesNames.DonationScreen) {
    campaignRequests = state.donation.nearestCampaigns;
  } else {
    campaignRequests = state.home.feeds;
  }

  let foundCampaign = null;

  if (campaignRequests) {
    foundCampaign = campaignRequests.find(
      (campaign: ICampaignRequest) => campaign._id === id,
    );
  }

  return foundCampaign ? foundCampaign : null;
};

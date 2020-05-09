import {IState} from '@modules/interfaces';
import {ICampaignRequest} from '@domain/interfaces';

const getNearestCampaigns = (state: IState): ICampaignRequest[] | null => {
  const {
    donation: {nearestCampaigns},
  } = state;
  console.log(nearestCampaigns, 'state');
  return nearestCampaigns;
};

const getNearestCampaignsLoading = (state: IState): boolean => {
  const {
    donation: {
      loading: {nearestCampaigns},
    },
  } = state;
  return nearestCampaigns;
};

const getNearestCampaignsError = (state: IState): string => {
  const {
    donation: {
      error: {nearestCampaigns},
    },
  } = state;
  return nearestCampaigns;
};

const DonationSelectors = {
  getNearestCampaigns,
  getNearestCampaignsLoading,
  getNearestCampaignsError,
};

export default DonationSelectors;

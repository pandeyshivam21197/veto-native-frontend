import {fetchNearestDonationCampaign} from '@domain/donationRepository';
import {ICampaignRequest} from '@domain/interfaces';
import {IFluxStandardAction} from '@modules/interfaces';

const donationTypePrefix = 'campaign/';

export const donationTypes = {
  nearestcampaignsLoading: `${donationTypePrefix}NEAREST_CAMPAIGNS_LOADING`,
  nearestcampaignsSuccess: `${donationTypePrefix}NEAREST_CAMPAIGNS_SUCCESS`,
  nearestcampaignsError: `${donationTypePrefix}NEAREST_CAMPAIGNS_ERROR`,
};

const setNearestCampaignLoading = (
  loading: boolean,
): IFluxStandardAction<boolean> => {
  return {
    type: donationTypes.nearestcampaignsLoading,
    payload: loading,
  };
};

const setNearestCampaignSuccess = (
  payload: any,
): IFluxStandardAction<ICampaignRequest[]> => {
  return {
    type: donationTypes.nearestcampaignsSuccess,
    payload,
  };
};

const setNearestCampaignError = (
  error: string,
): IFluxStandardAction<undefined, undefined, string> => {
  return {
    type: donationTypes.nearestcampaignsError,
    error,
  };
};

const getNearestCampaigns = (location: string, distance: number) => async (
  dispatch: any,
) => {
  dispatch(setNearestCampaignLoading(true));
  try {
    const nearestCampaigns = await fetchNearestDonationCampaign(
      location,
      distance,
    );

    const {
      data: {
        data: {getNearestDonationCampaign},
      },
    } = nearestCampaigns;

    dispatch(setNearestCampaignSuccess(getNearestDonationCampaign));
  } catch (e) {
    dispatch(setNearestCampaignError(e.message));
  }
};

const DonationActions = {
  getNearestCampaigns,
  setNearestCampaignError,
  setNearestCampaignLoading,
  setNearestCampaignSuccess,
};

export default DonationActions;

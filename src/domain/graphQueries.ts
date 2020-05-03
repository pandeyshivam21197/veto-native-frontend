// bootstrap screen
export const getTokenAuth = () => {
  const payload = {
    query: `query{
    getAuthConfirmation
  }`,
  };

  return JSON.stringify(payload);
};

export const postLogin = (email: string, password: string): string => {
  const payload = {
    query: `mutation{
            login(loginInput: {email: "${email}", password: "${password}"}) {
                  token
                }
          }`,
  };
  return JSON.stringify(payload);
};

// app screen

// home
const requiredCampaignData = `
_id
title
status
description
thumbnails{
  url
  type
}
entities{
  title
  requestedAmount
  availedAmount
  currentPrice
  status
  unitType
  currency
}
creatorId{
  _id
  name
  userImage
}
donerIds {
  _id
  name
  userImage
}
groupMemberIds {
  _id
  name
  userImage
}`;

export const getHomeCampaignRequests = (page: number) => {
  const payload = {
    query: `mutation{
    getCampaignRequests(page: ${page}) {
      ${requiredCampaignData}
    }
  }`,
  };

  return JSON.stringify(payload);
};

// user

export const getUserData = (): string => {
  const payload = {
    query: `query{
    getUserData{
      _id
      name
      username
      email
      location
      idProofType
      idProofImageUrl
      DOB
      contactNumber
      rewardPoints
      campaignRequestIds{
        ${requiredCampaignData}
      }
      joinedCampaignIds{
        ${requiredCampaignData}
      }
      donationHistory
      {
        campaignRequestId{
          ${requiredCampaignData}
        },
        donationAmount
      }
      maxDistance
    }
  }`,
  };

  return JSON.stringify(payload);
};

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
export const getHomeCampaignRequests = (page: number) => {
  const payload = {
    query: `mutation{
    getCampaignRequests(page: ${page}) {
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
        _id
      }
      joinedCampaignIds{
        _id
      }
      donationHistory
      {
        campaignRequestId{
          _id
        },
        donationAmount
      }
      maxDistance
    }
  }`,
  };

  return JSON.stringify(payload);
};

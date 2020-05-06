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
const requiredUserData = `
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
`;

export const getUserData = (): string => {
  const payload = {
    query: `query{
    getUserData{
      ${requiredUserData}
    }
  }`,
  };

  return JSON.stringify(payload);
};

// Account

export interface IPatchUserData {
  name?: string;
  username?: string;
  email?: string;
  oldPassword?: string;
  newPassword?: string;
  location?: string;
  idProofType?: string;
  idProofImageUrl?: string;
  maxDistance?: number;
  DOB?: string;
  userImage?: string;
  contactNumber?: number;
}

const getDefinedUserInput = (userInput: IPatchUserData) => {
  let inputString = '';
  let keyValueString = '';
  for (const [key, value] of Object.entries(userInput)) {
    if (value) {
      if (key === 'maxDistance') {
        keyValueString = `${key}: ${value},\n`;
      } else {
        keyValueString = `${key}: "${value}",\n`;
      }
      inputString = inputString + keyValueString;
    }
  }

  return inputString;
};

export const patchUserData = (userInput: IPatchUserData): string => {
  const userIputParam = getDefinedUserInput(userInput);

  const payload = {
    query: `mutation{
      patchUserData(
        userInput: {
          ${userIputParam}
        }){
        ${requiredUserData}
      }
  }`,
  };

  return JSON.stringify(payload);
};

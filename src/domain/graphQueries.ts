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

//home
export const getHomeCampaignRequests = (page: number) => {
  const payload = {
    query: `mutation{
    getCampaignRequests(page: ${page}) {
      description
    }
  }`,
  };

  return JSON.stringify(payload);
};

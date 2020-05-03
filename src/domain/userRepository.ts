import ApiClient from '@network/ApiClient';
import {baseUrl} from '@network/Constants';
import {getUserData} from './graphQueries';
import {IUser, Response} from './interfaces';

const apiClient = new ApiClient({baseUrl});

interface IUserResponse {
  getUserData: IUser;
}

export const fetchUserData = async (): Promise<Response<IUserResponse>> => {
  return await apiClient.post(getUserData(), {
    'Content-Type': 'application/json',
  });
};

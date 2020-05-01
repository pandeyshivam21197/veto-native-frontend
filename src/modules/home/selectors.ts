import {IState} from '@modules/interfaces';

const getHomeFeeds = (state: IState) => {
  return state.home;
};

const HomeSelector = {getHomeFeeds};

export default HomeSelector;

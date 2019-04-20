import * as types from '../actionTypes';
import * as R from 'ramda';

const restaurants = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_INITIAL_LISTINGS:
      return { ...state, initialListings: action.listings };
    case types.FETCH_SEARCH_RESULTS:
      return { ...state, searchResults: action.results };
    case types.FETCH_RESTAURANT_PROFILE:
      return { ...state, selectedRestaurant: action.profile };
    case types.FETCH_RESTAURANT_MENU:
      const lens = R.lensPath(['selectedRestaurant', 'menu']);
      return R.set(lens, action.menu, state);
    default:
      return state;
  }
};

export default restaurants;
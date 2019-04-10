import * as types from '../actionTypes';

const restaurants = (state = {}, action) => {
  switch(action.type) {
    case types.FETCH_INITIAL_LISTINGS:
      return { ...state, initialListings: action.listings };
    case types.FETCH_SEARCH_RESULTS:
      return { ...state, searchResults: action.results };
    default:
      return state;
  }  
};

export default restaurants;
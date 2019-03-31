import * as types from '../actionTypes';

const restaurants = (state = [], action) => {
  switch(action.type) {
    case types.FETCH_INITIAL_LISTINGS:
      return [...action.listings];
    default:
      return state;
  }  
};

export default restaurants;
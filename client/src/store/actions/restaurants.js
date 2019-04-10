import * as types from '../actionTypes';

// TODO: implement an axios helper and make actual ajax requests here.

export const fetchInitialListings = () => dispatch => {
  dispatch({
    type: types.FETCH_INITIAL_LISTINGS,
    listings: [
      {
        id: '1234',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant One',
        address: '148 South East Street, Amherst MA 01002',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
          veniam, quis nostrud exercitation ullamco.`,
        stars: '4.5'
      },
      {
        id: '5678',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant Two',
        address: '148 South East Street, Amherst MA 01003',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.`,
        stars: '1.5'
      },
      {
        id: '9101',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant Three',
        address: '148 South East Street, Amherst MA 01002',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.`,
        stars: '3.5'
      }
    ]
  });
}

export const fetchSearchResults = input => dispatch => {
  dispatch({
    type: types.FETCH_SEARCH_RESULTS,
    results: [
      {
        id: '4444',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant One',
        address: '148 South East Street, Amherst MA 01002',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
          veniam, quis nostrud exercitation ullamco.`,
        stars: '4.5'
      },
      {
        id: '5678',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant Two',
        address: '148 South East Street, Amherst MA 01003',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.`,
        stars: '1.5'
      },
      {
        id: '9101',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant Three',
        address: '148 South East Street, Amherst MA 01002',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.`,
        stars: '3.5'
      }
    ]
  });
};
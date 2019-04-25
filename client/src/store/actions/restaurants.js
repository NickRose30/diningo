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
        descriptionSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
          veniam, quis nostrud exercitation ullamco.`,
        stars: '4.5',
        lat: 40.729269,
        lng: -73.987361
      },
      {
        id: '5678',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant Two',
        address: '148 South East Street, Amherst MA 01003',
        descriptionSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.`,
        stars: '1.5',
        lat: 40.229269,
        lng: -72.987361
        
      },
      {
        id: '9101',
        image:
          'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
        title: 'Restaurant Three',
        address: '148 South East Street, Amherst MA 01002',
        descriptionSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.`,
        stars: '3.5',
        lat: 41.029269,
        lng: -74.087361
      }
    ]
  });
}

export const fetchSearchResults = input => dispatch => {
  dispatch({
    type: types.FETCH_SEARCH_RESULTS,
    results: {
      searchTerm: input, 
      results: [
        {
          id: '4444',
          image:
            'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
          title: 'Restaurant One',
          address: '148 South East Street, Amherst MA 01002',
          descriptionSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
            tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
            veniam, quis nostrud exercitation ullamco.`,
          stars: '4.5',
          lat: 40.329269,
          lng: -73.387361
        },
        {
          id: '5678',
          image:
            'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
          title: 'Restaurant Two',
          address: '148 South East Street, Amherst MA 01003',
          descriptionSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
          veniam, quis nostrud exercitation ullamco.`,
          stars: '1.5',
          lat: 41.729269,
          lng: -72.987361
        },
        {
          id: '9101',
          image:
            'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
          title: 'Restaurant Three',
          address: '148 South East Street, Amherst MA 01002',
          descriptionSnippet: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
          veniam, quis nostrud exercitation ullamco.`,
          stars: '3.5',
          lat: 40.529269,
          lng: -73.087361
        }
      ]
    }
  });
};

export const fetchRestaurantProfile = id => dispatch => {
  dispatch({
    type: types.FETCH_RESTAURANT_PROFILE,
    profile: {
      id: '9876',
      image:
        'https://thimpress.com/wp-content/uploads/2018/04/41993-das-loft-sofitel-19to1.jpeg',
      title: 'Restaurant One',
      address: '148 South East Street, Amherst MA 01002',
      fullDescription: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua.Ut enim ad minim
        veniam, quis nostrud exercitation ullamco.`,
      stars: '3.5',
      currentWait: 55,
      hours: {
        mon: '11:00 AM - 10:00 PM',
        tue: '11:00 AM - 10:00 PM',
        wed: '11:00 AM - 10:00 PM',
        thu: '11:00 AM - 10:00 PM',
        fri: '11:00 AM - 12:00 AM',
        sat: '11:00 AM - 12:00 AM',
        sun: '11:00 AM - 10:00 PM'
      },
      lat: 40.729269,
      lng: -73.987361
    }
  });
};

export const fetchRestaurantMenu = id => dispatch => {
  dispatch({
    type: types.FETCH_RESTAURANT_MENU,
    menu: {
      appetizers: [
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
      ],
      pasta: [
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
      ],
      seafood: [
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
      ],
      sandwiches: [
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
      ],
      sides: [
        {
          item: 'Lucky Charms',
          description: `They're magically delicious.`,
          price: 99.99,
        },
      ],
      drinks: [
        {
          item: 'Beer',
          description: `Yum`,
          price: 0.00,
        },
      ],
      desserts: [
        {
          item: 'Cake',
          description: `An item of soft, sweet food made from a mixture of flour, shortening, eggs, sugar, and other ingredients, baked and often decorated.`,
          price: 12.49,
        },
      ],
    }
  });
};
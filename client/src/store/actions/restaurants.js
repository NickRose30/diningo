import * as types from '../actionTypes';

// TODO: implement an axios helper and make actual ajax requests here.

export const fetchInitialListings = () => dispatch => {
  dispatch({
    type: types.FETCH_INITIAL_LISTINGS,
    listings: [
      {
        "id": "1",
        "image": "https://upload.wikimedia.org/wikipedia/en/3/33/Krusty_Krab_230b.png",
        "title": "Krusty Krab",
        "address": "363 Main Street Amherst MA 01002",
        "descriptionSnippet": "Nautical themed fast food restaurant offering a variety of undersea staples such as our famous Krabby Patties and Kelp Shakes.",
        "stars": "4.5",
        "lat": 42.375687,
        "lng": -72.512738,
      },
      {
        "id": "3",
        "image": "http://vignette2.wikia.nocookie.net/friends/images/9/94/Central_Perk.jpg/revision/latest?cb=20130105161326",
        "title": "Central Perk",
        "address": "51 N Pleasant St, Amherst, MA 01002",
        "descriptionSnippet": "Located in the heart of the city, this is a great place for friends to gather!",
        "stars": "3.5",
        "lat": 42.399943,
        "lng": -72.521003,
      },
      {
        "id": "4",
        "image": "https://www.bing.com/th?id=OIP.uDkV_HBcRbQgMe_ZN8h9hAAAAA&pid=Api&rs=1&p=0",
        "title": "MacLaren's",
        "address": "458 Russell St, Hadley, MA 01035",
        "descriptionSnippet": "Good food, good drinks, good fun. It's always a good time at MacLaren's.",
        "stars": "4.5",
        "lat": 42.065518,
        "lng": -72.536412,
      },
      {
        "id": "5",
        "image": "https://vignette.wikia.nocookie.net/itsalwayssunny/images/1/10/PaddysPub.PNG/revision/latest?cb=20100226001701",
        "title": "Paddy's Pub",
        "address": "35 E Pleasant St, Amherst, MA 01002",
        "descriptionSnippet": "Enjoy a nice drink in Paddy's Pub! You can feel safe at Paddy's with our Head of Security's patented ocular pat-down, and you can feel clean as the rats get bashed daily.",
        "stars": "1.5",
        "lat": 42.780128,
        "lng": -71.969162,
      },
      {
        "id": "6",
        "image": "https://vignette.wikia.nocookie.net/parksandrecreation/images/2/21/JJsDiner1.jpg/revision/latest?cb=20111124075129",
        "title": "JJ's Diner",
        "address": "24 College Street, Amherst, MA 01002",
        "descriptionSnippet": "A classic American breakfast eatery that is well known for famous waffles and large selection of egg based meals.",
        "stars": "4.5",
        "lat": 42.173278,
        "lng": -72.617614,
      },
      {
        "id": "7",
        "image": "https://vignette.wikia.nocookie.net/pixar/images/d/d3/Pizza_Planet2.jpg/revision/latest?cb=20181123080443",
        "title": "Pizza Planet",
        "address": "150 Fearing St, Amherst, MA 01002",
        "descriptionSnippet": "A space themed restaurant specializing in pizza and games for the entire family!",
        "stars": "3.5",
        "lat": 42.381364,
        "lng": -72.027568,
      },
      {
        "id": "8",
        "image": "https://vignette.wikia.nocookie.net/house-of-cards/images/2/29/Freddys_BBQ_Joint.png/revision/latest?cb=20161210201209",
        "title": "Freddy's BBQ Joint",
        "address": "676 Amherst Rd, Sunderland, MA 01375",
        "descriptionSnippet": "Long-running joint with seasonal picnic tables serving ribs, pulled pork & other Southern staples",
        "stars": "4.5",
        "lat": 42.330217,
        "lng": -72.842072,
      },
      {
        "id": "9",
        "image": "https://vignette.wikia.nocookie.net/starwars/images/0/07/MEC.JPG/revision/latest?cb=20090224163944",
        "title": "Mos Eisley Cantina",
        "address": "485 West St, Amherst, MA 01002",
        "descriptionSnippet": "A dimly lit tavern offering food and drinks. It is a popular stopping point for pilots, smugglers, bounty hunters, alien misfits and renegades.",
        "stars": "3.5",
        "lat": 42.439752,
        "lng": -72.420929,
      },
      {
        "id": "10",
        "image": "https://vignette.wikia.nocookie.net/trailerpark/images/2/28/Dirtyburgerlogo-0.jpg/revision/latest?cb=20171019032748",
        "title": "Dirty Burger",
        "address": "30 Boltwood Walk, Amherst, MA 01002",
        "descriptionSnippet": "A food truck based out of a camper that serves burgers and only burgers.",
        "stars": "3.5",
        "lat": 42.276274,
        "lng": -72.218201,
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
          "id": "4",
          "image": "https://www.bing.com/th?id=OIP.uDkV_HBcRbQgMe_ZN8h9hAAAAA&pid=Api&rs=1&p=0",
          "title": "MacLaren's",
          "address": "458 Russell St, Hadley, MA 01035",
          "descriptionSnippet": "Good food, good drinks, good fun. It's always a good time at MacLaren's.",
          "stars": "4.5",
          "lat": 42.065518,
          "lng": -72.536412,
        },
        {
          "id": "2",
          "image": "https://www.bing.com/th?id=OIP.EYmLMGbn76AFbQJd4VAH7QHaEK&pid=Api&rs=1&p=0",
          "title": "Krusty Burger",
          "address": "280 Russell St, Hadley, MA 01035",
          "descriptionSnippet": "Try our Krusty Burger, no longer receiving an F grade from the FDA!",
          "stars": "3.5",
          "lat": 42.952020,
          "lng": -72.863586,

        },
        {
          "id": "7",
          "image": "https://vignette.wikia.nocookie.net/pixar/images/d/d3/Pizza_Planet2.jpg/revision/latest?cb=20181123080443",
          "title": "Pizza Planet",
          "address": "150 Fearing St, Amherst, MA 01002",
          "descriptionSnippet": "A space themed restaurant specializing in pizza and games for the entire family!",
          "stars": "3.5",
          "lat": 42.381364,
          "lng": -72.027568,
        },
        {
          "id": "3",
          "image": "http://vignette2.wikia.nocookie.net/friends/images/9/94/Central_Perk.jpg/revision/latest?cb=20130105161326",
          "title": "Central Perk",
          "address": "51 N Pleasant St, Amherst, MA 01002",
          "descriptionSnippet": "Located in the heart of the city, this is a great place for friends to gather!",
          "stars": "3.5",
          "lat": 42.399943,
          "lng": -72.521003,
        },
        {
          "id": "5",
          "image": "https://vignette.wikia.nocookie.net/itsalwayssunny/images/1/10/PaddysPub.PNG/revision/latest?cb=20100226001701",
          "title": "Paddy's Pub",
          "address": "35 E Pleasant St, Amherst, MA 01002",
          "descriptionSnippet": "Enjoy a nice drink in Paddy's Pub! You can feel safe at Paddy's with our Head of Security's patented ocular pat-down, and you can feel clean as the rats get bashed daily.",
          "stars": "1.5",
          "lat": 42.780128,
          "lng": -71.969162,
        },
        {
          "id": "6",
          "image": "https://vignette.wikia.nocookie.net/parksandrecreation/images/2/21/JJsDiner1.jpg/revision/latest?cb=20111124075129",
          "title": "JJ's Diner",
          "address": "24 College Street, Amherst, MA 01002",
          "descriptionSnippet": "A classic American breakfast eatery that is well known for famous waffles and large selection of egg based meals.",
          "stars": "4.5",
          "lat": 42.173278,
          "lng": -72.617614,
        },
        {
          "id": "8",
          "image": "https://vignette.wikia.nocookie.net/house-of-cards/images/2/29/Freddys_BBQ_Joint.png/revision/latest?cb=20161210201209",
          "title": "Freddy's BBQ Joint",
          "address": "676 Amherst Rd, Sunderland, MA 01375",
          "descriptionSnippet": "Long-running joint with seasonal picnic tables serving ribs, pulled pork & other Southern staples",
          "stars": "4.5",
          "lat": 42.330217,
          "lng": -72.842072,
        },
        {
          "id": "9",
          "image": "https://vignette.wikia.nocookie.net/starwars/images/0/07/MEC.JPG/revision/latest?cb=20090224163944",
          "title": "Mos Eisley Cantina",
          "address": "485 West St, Amherst, MA 01002",
          "descriptionSnippet": "A dimly lit tavern offering food and drinks. It is a popular stopping point for pilots, smugglers, bounty hunters, alien misfits and renegades.",
          "stars": "3.5",
          "lat": 42.439752,
          "lng": -72.420929,
        },
      ]
    }
  });
};

export const fetchRestaurantProfile = id => dispatch => {
  dispatch({
    type: types.FETCH_RESTAURANT_PROFILE,
    profile: {
      id: '3',
      image:
        'http://vignette2.wikia.nocookie.net/friends/images/9/94/Central_Perk.jpg/revision/latest?cb=20130105161326',
      moreImages: [
        'https://peopledotcom.files.wordpress.com/2018/02/friends.jpg',
        'https://hips.hearstapps.com/digitalspyuk.cdnds.net/18/05/1517557864-phoebe-guitar-centralperk.jpg?resize=480:*',
        'https://i.pinimg.com/originals/ea/a1/6d/eaa16d25b3e533cdc70439ef714c9459.jpg',
        'https://www.cheatsheet.com/wp-content/uploads/2018/08/Gunther-Friends.png',
      ],
      "title": "Central Perk",
      "address": "141 2nd Ave, New York, NY 10003",
      fullDescription: `Central Perk is a cozy little coffee shop in the heart of New York. 
        We are known for our coffee and our inviting atmosphere. With plenty of comfortable 
        seating, Central Perk is a great place to relax alone or with friends. We often 
        feature live music from local artists, be sure to check us out!`,
      stars: '5',
      currentWait: 5,
      hours: {
        mon: '6:00 AM - 5:00 PM',
        tue: '6:00 AM - 5:00 PM',
        wed: '6:00 AM - 5:00 PM',
        thu: '6:00 AM - 5:00 PM',
        fri: '6:00 AM - 5:00 PM',
        sat: '8:00 AM - 5:00 PM',
        sun: '8:00 AM - 5:00 PM'
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
          item: 'Chips and Salsa',
          description: 'Some delicious chips served alongside our world famous salse.',
          price: 4.99,
        },
        {
          item: 'Fresh Guacamole',
          description: 'Avocados from Mexico.',
          price: 5.99,
        },
        {
          item: 'Jalapeno Poppers',
          description: `Who doesn't love these?`,
          price: 7.99
        },
      ],
      pasta: [
        {
          item: 'Shrimp Scampi',
          description: 'Shrimp sauteed in a buttery olive oil and garlic sauce served over the pasta of your choice.',
          price: '16.99'
        },
        {
          item: 'Chicken Parm',
          description: 'Breaded chicken pan fried and served alongside our homemade pasta with marinera sauce.',               
			    price: '17.99',
        },
      ],
      burgers: [
        {
          item: 'Classic Burger',
          description: 'Burger cooked to your liking, with lettuce, tomato, onion, and American cheese.',
			    price: '10.99'
        },
        {
          item: 'Southwest Burger',
          description: 'Burger cooked to your liking, with jalapeno peppers, chipotle sauce, and pepperjack cheese.',
			    price: '11.99'
        },
        {
          item: 'Big BBQ Burger',
          description: 'Burger cooked to your liking, with lettuce, crispy onion rings, bacon, and cheddar cheese.',
			    price: '13.99'
        },
        {
          item: 'Triple Burger',
          description: 'Good things come in threes! Three patties stacked sky high, with just about any fixings you can set your heart on.',
			    price: '15.99'
        }
      ],
      pizza: [
        {
          item: 'Cheese',
          description: 'Delicious, classic pizza!',    
			    price: '14.99'
        },
        {
          item: 'Pepperoni',
          description: 'A popular choice!',
			    price: '14.99'
        },
        {
          item: 'Hawaiian',
          description: 'Pineapple and ham make for a great pizza!.',     
			    price: '15.99'
        },
        {
          item: 'BBQ Chicken',
          description: 'BBQ sauce, grilled chicken, bacon, drizzled with ranch.',       
			    price: '16.99'
        },
        {
          item: 'Buffalo Chicken',
          description: 'Our delicious buffalo sauce, topped with grilled chicken.',       
			    price: '15.99'
        },
        {
          item: 'Sausage',
          description: 'Thinly sliced italian sausage covers the entire top of this classic pizza.',       
			    price: '16.99'
        },
        {
          item: 'BBQ Chicken',
          description: 'BBQ sauce, grilled chicken, bacon, drizzled with ranch.',
          price: '16.99'
        }
      ],
      sides: [
        {
          item: 'French Fries',
          description: 'You know what french fries are.',
          price: '3.99'
        },
        {
          item: 'Onion Rings',
          description: 'Some fried rings of onion.',
          price: '3.99'
        },
        {
          item: 'Garlic Bread',
          description: 'The greatest food this world has ever seen.',
          price: '3.99'
        }
      ],
      drinks: [
        {
          item: 'Soda',
          description: 'A variety of Coca-cola products.',
          price: '1.99'
        },
        {
          item: 'Beer',
          description: `Ask your server what's on tap!`,
          price: '5.99'            
		    },
        {
          item: 'Milkshake',
          description: 'Vanilla, chocolate, or strawberry.',
          price: '4.99'
        }
      ],
      desserts: [
        {
          item: 'Brownie Sundae',
          description: 'A rich fudge brownie served over vanilla ice cream.',
          price: '3.99'
        },
        {
          item: 'Triple Chocolate Cake',
          description: 'Hope you like chocolate!',
          price: '4.99'
        },
        {
          item: 'Key Lime Pie',
          description: `Our homemade key lime pie can't be beat!`,
          price: '3.99'            
		    },
      ]
    }
  });
};

export const fetchRestaurantReviews = id => dispatch => {
  dispatch({
    type: types.FETCH_RESTAURANT_REVIEWS,
    reviews: [
      {
        username: 'tschoppe',
        time: 'Mon December 11th, 1996 3:13 PM',
        stars: 4.5,
        review: `There was a crazy lady singing outside, but the food and service was excellent.`,
      },
      {
        username: 'tschoppe',
        time: 'Tue December 12th, 1996 5:04 PM',
        stars: 4,
        review: `Three, four...
          Smelly Cat, Smelly Cat,
          What are they feeding you?
          Smelly Cat, Smelly Cat,
          It’s not your fault
          They won’t take you to the vet
          You’re obviously not their favorite pet
          Smelly Cat, Smelly Cat,
          It’s not your fault
          You may not be a bed of roses
          You’re not friend to those with noses
          I’ll miss you before we’re done
          Or the world will smell as one
          Smelly Cat, Smelly Cat,
          What are they feeding you?
          Smelly Cat, Smelly Cat
          It’s not your fault
          (Phoebe) Oh are we done?
          One, two, what’s that smell?
          Smelly Cat, Smelly Cat,
          What are they feeding you?
          Smelly Cat, Smelly Cat
          You’re getting fat
          I think that I’m gonna be sick
          It’s your ears, and nose and pick
          Part of it, tempt me
          One, two, what’s that smell?
          All the dogs in the neighborhood
          Are saying this for your own good
          What, you’re fat, so you can’t run
          No fun, I bet, No fun
          Smelly Cat, Smelly Cat,
          Porno makes you eat like that
          I saw you in the shopping mall
          Smelly Cat, Smelly Cat,
          It’s not your fault,
          Smelly Cat, Smelly Cat,
          It’s not your fault
          Smelly Cat, Smelly Cat,
          It’s not your fault
          We know what was in your food
          They say it might affect your mood
          You smell like something dead (3x)
          One, two, what’s that smell?`,
      },
      {
        username: 'JShorr03',
        time: 'Fri March 3rd, 1997 9:45 AM',
        stars: 2,
        review: `The waitress was horrible. She sat down and talked to her friends the entire 
          time and never took my order. Also, the coffee mugs are unnecessarily large.`,
      },
      {
        username: 'Nikita07',
        time: 'Tue April 3rd, 1998 11:19 AM',
        stars: 5,
        review: `There was a group of people sitting on the couch talking extremely loud. Other
          than that the food and service was good.`,
      },
      {
        username: 'aric97',
        time: 'Sat June 7th, 1997 12:19 PM',
        stars: 1,
        review: `My burger came out a burned mess. When I asked them to remake it I was told that 
          it was made exactly how they always do it, but after I argued that no food should look 
          like the charcoal it was cooked on, they reluctantly redid it. It came back basically raw, 
          which I am sure was out of spite. I will never go back.`,
      },
      {
        username: 'NickR30',
        time: 'Fri April 5th, 1997 11:19 AM',
        stars: 4.5,
        review: `They didn't have chocolate milk.`,
      },
      {
        username: 'tbritts14',
        time: 'Fri May 5th, 2014 1:19 AM',
        stars: 4,
        review: `Pretty good apps, I come here fairly often with friends.`,
      },
      {
        username: 'dkruegs',
        time: 'Fri April 25th, 1997 5:19 PM',
        stars: 2.5,
        review: `The food was very good but way too overpriced.`,
      },
      {
        username: 'wayne',
        time: 'Fri April 5th, 1996 11:19 AM',
        stars: 4.5,
        review: `You went to this restaurant with some pals the other day... my burger had those good 
          grill marks, bud. It's possible I was just in a good mood having seen a Canada goose on my 
          way, but I liked the place. Well, back to chorin. `,
      }
    ],
  });
};
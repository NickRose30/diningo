package com.diningoinc.diningo.controllers;


import com.diningoinc.diningo.models.Restaurant;
import com.diningoinc.diningo.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

import java.util.Optional;

import static org.springframework.web.bind.annotation.RequestMethod.GET;
import static org.springframework.web.bind.annotation.RequestMethod.POST;

@RestController
public class RestaurantController {

    @Autowired
    private RestaurantRepository restaurantRepository;

    @RequestMapping(value = "/restaurants/{id}", method = GET)
    public Optional<Restaurant> getRestaurant(@PathVariable("id") int id) {
        //poll database for restaurant {id}
        //if it exists return it
        Optional<Restaurant> foundRestaurant = restaurantRepository.findById(id);
        if(foundRestaurant==null){
            Optional<Restaurant> empty = Optional.empty();
            return empty;
        }

        //else return empty restaurant or something
        return foundRestaurant;
    }

    @RequestMapping(value = "restaurants/popular/{num}", method = GET)
    public List<Restaurant> getPopularRestaurants(@PathVariable("num") int numRestaurants) {
        Sort s = new Sort(Sort.Order.desc("rating"));
        Iterable<Restaurant> orderedRestaurants = restaurantRepository.findAll(s);
        List<Restaurant> popularRestaurants = new ArrayList<>();
        int count = 0;
        for(Restaurant r : orderedRestaurants) {
            while (count < numRestaurants) {
                popularRestaurants.add(r);
                break;
            }
            count ++;
        }
        return popularRestaurants;
    }

    @RequestMapping(value = "restaurants/add/testing", method = POST)
    public String createTestRestaurants() {
        Restaurant jj = new Restaurant(1, "JJ's diner", "Casual diner known for its waffles.", "This diner has been a staple in the Pawnee community for many years. Visited by many important government employees.", "Pawnee, IN", 4.8, 1, "5:00am-3:00pm", "http://i.imgur.com/XuXoaS3.jpg");
        Restaurant paddys = new Restaurant(2, "Paddy's Pub", "Dive Bar", "Philly dive bar with cheap drinks. Owners are cool though", "Philadelphia, PA", 3.7, 0, "11:00AM-1:00AM", "https://images.app.goo.gl/cLjQswKQecdf9Am89");
        Restaurant chilis = new Restaurant(3, "Chili's", "Chain that serves Tex-Mex", "Large chain with great Tex-Mex. Known for their Baby Back Ribs", "Scranton, PA", 3.5, 1, "11:30AM-11:00PM", "https://images.app.goo.gl/kCgx7dDbUScRc1KfA");
        Restaurant modeans = new Restaurant(4, "Modean's", "Blue collar local bar", "Simple bar that is great for grabbing a puppers after work", "Letterkenny, Ontario", 4.2, 0, "12:00pm-2:00am", "https://images.app.goo.gl/bGFnjz8AUM2VMzFE8");

        List<Restaurant> restaurantsList = new ArrayList<>();
        restaurantsList.add(jj);
        restaurantsList.add(paddys);
        restaurantsList.add(chilis);
        restaurantsList.add(modeans);

        restaurantRepository.saveAll(restaurantsList);

        return "Created";
    }


}

package com.diningoinc.diningo.controllers;


import com.diningoinc.diningo.models.Restaurant;
import com.diningoinc.diningo.repositories.RestaurantRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

import static org.springframework.web.bind.annotation.RequestMethod.GET;

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


}

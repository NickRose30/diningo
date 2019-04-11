package com.diningoinc.diningo.DiningoApplication;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
public class DiningoController {

    @Autowired
    DiningoRepository DiningoRepository;

    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(path = "/restaurants")
    public List<Item> getAllItems(){
        List<Item> items = new ArrayList<>();
        DiningoRepository.findAll().forEach(items :: add);
        return items;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping(path = "/restaurants")
    public Item addItem(@RequestBody Item item){
        groceryListRepository.save(item);
        return item;
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @DeleteMapping(path = "/restaurantss/{id}")
    public void deleteItem(@PathVariable int id){
        groceryListRepository.deleteById(id);
    }
}
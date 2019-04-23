package com.diningoinc.diningo.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Restaurant {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;
    private String name;
    private String shortDescription;
    private String fullDescription;
    private String location;
    private double rating;
    private int currentWaitTime;
    private String hoursOfOperation;
    private String imageUrl;

    public Restaurant(){
        
    }

    public Restaurant(int id, String name, String shortDescription, String fullDescription, String location, double rating, int currentWaitTime, String hoursOfOperation, String imageUrl) {
        this.id = id;
        this.name = name;
        this.shortDescription = shortDescription;
        this.fullDescription = fullDescription;
        this.location = location;
        this.rating = rating;
        this.currentWaitTime = currentWaitTime;
        this.hoursOfOperation = hoursOfOperation;
        this.imageUrl = imageUrl;
    }


    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getShortDescription() {
        return shortDescription;
    }

    public void setShortDescription(String description) {
        this.shortDescription = description;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public double getRating() {
        return rating;
    }

    public void setRating(double rating) {
        this.rating = rating;
    }

    public String getFullDescription() {
        return fullDescription;
    }

    public void setFullDescription(String fullDescription) {
        this.fullDescription = fullDescription;
    }

    public int getCurrentWaitTime() {
        return currentWaitTime;
    }

    public void setCurrentWaitTime(int currentWaitTime) {
        this.currentWaitTime = currentWaitTime;
    }

    public String getHoursOfOperation() {
        return hoursOfOperation;
    }

    public void setHoursOfOperation(String hoursOfOperation) {
        this.hoursOfOperation = hoursOfOperation;
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }
}
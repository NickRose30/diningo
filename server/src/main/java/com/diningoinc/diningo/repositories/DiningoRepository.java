package com.diningoinc.diningo.DiningoApplication;

import org.springframework.data.jpa.repository.JpaRepository;

public interface DiningoRepository extends JpaRepository<Item, Integer> {


}
package com.salary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.salary.entity.*;


@Repository 
public interface RegistrationRepository extends JpaRepository<Registration, Integer>  {
	Registration findByFirstName(String firstname);
}

package com.salary.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import com.salary.entity.Employee;
import org.springframework.stereotype.Repository;

public interface EmployeeRepository extends JpaRepository<Employee, Long> {
    //
}

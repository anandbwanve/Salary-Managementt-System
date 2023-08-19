package com.salary;

import com.salary.entity.Employee;
import com.salary.repository.EmployeeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

    public static void main(String[] args) {
        SpringApplication.run(SpringbootBackendApplication.class, args);
    }

    @Autowired
    private EmployeeRepository employeeRepository;

    @Override
    public void run(String... args) throws Exception {
//        Employee employee = new Employee();
//        employee.setFirstName("Anand");
//        employee.setLastName("Wanve");
//        employee.setEmailId("abw@gmail.com");
//        employee.setSalary(40000); // Set the salary value
//        employee.calculateDerivedFields(); // Calculate derived fields
//
//        employeeRepository.save(employee);

         Employee employee1 = new Employee();
         employee1.setFirstName("ketan");
         employee1.setLastName("Pawar");
         employee1.setEmailId("pawar@gmail.com");
         employee1.setSalary(5000); // Set the salary value
         employee1.calculateDerivedFields(); // Calculate derived fields
         employeeRepository.save(employee1);
    }
}

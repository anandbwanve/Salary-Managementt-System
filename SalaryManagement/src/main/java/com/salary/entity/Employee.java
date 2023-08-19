package com.salary.entity;

import jakarta.persistence.*;

import org.springframework.lang.NonNull;

@Entity
@Table(name = "employees")
public class Employee {

	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private long id;

	@NonNull
	@Column(name = "first_name")
	private String firstName;

	@NonNull
	@Column(name = "last_name")
	private String lastName;

	@NonNull
	@Column(name = "salary")
	private double salary;

	@Column(name = "tax")
	private double tax;

	@Column(name = "provisional_fund")
	private double provisionalFund;

	@Column(name = "allowance_travel")
	private double allowanceTravel = 0.0;

	@Column(name = "gross")
	private double gross;

	@Column(name = "inhand_salary")
	private double inhandSalary;

	@Column(name = "email_id")
	private String emailId;

	public long getId() {
	    return id;
	}

	public void setId(long id) {
	    this.id = id;
	}

	public String getFirstName() {
	    return firstName;
	}

	public void setFirstName(String firstName) {
	    this.firstName = firstName;
	}

	public String getLastName() {
	    return lastName;
	}

	public void setLastName(String lastName) {
	    this.lastName = lastName;
	}

	public double getSalary() {
	    return salary;
	}

	public void setSalary(double salary) {
	    this.salary = salary;
	}

	public double getTax() {
	    return tax;
	}

	public void setTax(double tax) {
	    this.tax = tax;
	}

	public double getProvisionalFund() {
	    return provisionalFund;
	}

	public void setProvisionalFund(double provisionalFund) {
	    this.provisionalFund = provisionalFund;
	}

	public double getAllowanceTravel() {
	    return allowanceTravel;
	}

	public void setAllowanceTravel(double allowanceTravel) {
	    this.allowanceTravel = allowanceTravel;
	}

	public double getGross() {
	    return gross;
	}

	public void setGross(double gross) {
	    this.gross = gross;
	}

	public double getInhandSalary() {
	    return inhandSalary;
	}

	public void setInhandSalary(double inhandSalary) {
	    this.inhandSalary = inhandSalary;
	}

	public String getEmailId() {
	    return emailId;
	}

	public void setEmailId(String emailId) {
	    this.emailId = emailId;
	}

	// Calculate tax, provisional fund, allowance, and in-hand salary based on the gross salary
	@PrePersist
	@PreUpdate
	public void calculateDerivedFields() {
	    this.gross = salary;
	    this.tax = gross * 0.05;
	    this.provisionalFund = gross * 0.1;
	    this.allowanceTravel = 3000;
	    this.inhandSalary = gross - tax - provisionalFund + allowanceTravel;
	}

	

}

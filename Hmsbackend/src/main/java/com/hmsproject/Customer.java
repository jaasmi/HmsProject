package com.hmsproject;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
public class Customer {

	
	
	
	public Customer() {
		// TODO Auto-generated constructor stub
	}
	public Customer(int cusId, String cusName,int cusDOB,  String cusPhnNo,String cusLoc,String cusAddProof, String cusUsername, String cusPassword,
			String cusEmail) {
		this.cusId = cusId;
		this.cusName = cusName;
		this.cusDOB=cusDOB;
		this.cusPhnNo = cusPhnNo;
		this.cusLoc=cusLoc;
		this.cusAddProof=cusAddProof;
		this.cusUsername = cusUsername;
		this.cusPassword = cusPassword;
		this.cusEmail = cusEmail;
		
	}
	@Id
	
	private int cusId;
	
	private String cusName;
	
@Column(name="CUS_DOB")
	private int cusDOB;
	
	private String cusPhnNo;

	private String cusLoc;
	
	private String cusAddProof;
	private String cusUsername;
	private String cusPassword;
	private String cusEmail;
	public int getCusId() {
		return cusId;
	}
	public void setCusId(int cusId) {
		this.cusId = cusId;
	}
	public String getCusName() {
		return cusName;
	}
	public void setCusName(String cusName) {
		this.cusName = cusName;
	}
	public int getCusDOB() {
		return cusDOB;
	}
	public void setCusDOB(int cusDOB) {
		this.cusDOB = cusDOB;
	}
	public String getCusPhnNo() {
		return cusPhnNo;
	}
	public void setCusPhnNo(String cusPhnNo) {
		this.cusPhnNo = cusPhnNo;
	}
	public String getCusLoc() {
		return cusLoc;
	}
	public void setCusLoc(String cusLoc) {
		this.cusLoc = cusLoc;
	}
	public String getCusAddProof() {
		return cusAddProof;
	}
	public void setCusAddProof(String cusAddProof) {
		this.cusAddProof = cusAddProof;
	}
	public String getCusUsername() {
		return cusUsername;
	}
	public void setCusUsername(String cusUsername) {
		this.cusUsername = cusUsername;
	}
	public String getCusPassword() {
		return cusPassword;
	}
	public void setCusPassword(String cusPassword) {
		this.cusPassword = cusPassword;
	}
	public String getCusEmail() {
		return cusEmail;
	}
	public void setCusEmail(String cusEmail) {
		this.cusEmail = cusEmail;
	}
}

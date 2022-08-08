package com.hmsproject;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class Admin {

	@Id
	private int admId;
	private String admName;
	private String admPhnNo;
	private String admUsername;
	private String admPassword;
	private String admEmail;
	public int getAdmId() {
		return admId;
	}
	public void setAdmId(int admId) {
		this.admId = admId;
	}
	public String getAdmName() {
		return admName;
	}
	public void setAdmName(String admName) {
		this.admName = admName;
	}
	public String getAdmPhnNo() {
		return admPhnNo;
	}
	public void setAdmPhnNo(String admPhnNo) {
		this.admPhnNo = admPhnNo;
	}
	public String getAdmUsername() {
		return admUsername;
	}
	public void setAdmUsername(String admUsername) {
		this.admUsername = admUsername;
	}
	public String getAdmPassword() {
		return admPassword;
	}
	public void setAdmPassword(String admPassword) {
		this.admPassword = admPassword;
	}
	public String getAdmEmail() {
		return admEmail;
	}
	public void setAdmEmail(String admEmail) {
		this.admEmail = admEmail;
	}
	
}
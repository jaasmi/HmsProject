package com.hmsproject;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="Menu")
public class Menu {

	@Id
	private int menId;
	private String menType;
	private String menItem;
	private double menPrice;
	public int getMenId() {
		return menId;
	}
	public void setMenId(int menId) {
		this.menId = menId;
	}
	public String getMenType() {
		return menType;
	}
	public void setMenType(String menType) {
		this.menType = menType;
	}
	public String getMenItem() {
		return menItem;
	}
	public void setMenItem(String menItem) {
		this.menItem = menItem;
	}
	public double getMenPrice() {
		return menPrice;
	}
	public void setMenPrice(double menPrice) {
		this.menPrice = menPrice;
	}
	
}
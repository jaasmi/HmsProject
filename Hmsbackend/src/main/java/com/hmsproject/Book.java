package com.hmsproject;

import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;

@Entity
public class Book {

	@Id
	private int bookId;
	private int cusId;
	private int admId;
	private int roomNo;
	private String walSource;
	private Date bookDate;
	private int noOfRooms;
	private double bookBillamount;
	private String bookStatus;
	private String bookComments;
	public int getBookId() {
		return bookId;
	}
	public void setBookId(int bookId) {
		this.bookId = bookId;
	}
	public int getCusId() {
		return cusId;
	}
	public void setCusId(int cusId) {
		this.cusId = cusId;
	}
	public int getAdmId() {
		return admId;
	}
	public void setAdmId(int admId) {
		this.admId = admId;
	}
	public int getRoomNo() {
		return roomNo;
	}
	public void setRoomNo(int roomNo) {
		this.roomNo = roomNo;
	}
	public String getWalSource() {
		return walSource;
	}
	public void setWalSource(String walSource) {
		this.walSource = walSource;
	}
	public Date getBookDate() {
		return bookDate;
	}
	public void setBookDate(Date bookDate) {
		this.bookDate = bookDate;
	}
	public int getNoOfRooms() {
		return noOfRooms;
	}
	public void setNoOfRooms(int noOfRooms) {
		this.noOfRooms = noOfRooms;
	}
	public double getBookBillamount() {
		return bookBillamount;
	}
	public void setBookBillamount(double bookBillamount) {
		this.bookBillamount = bookBillamount;
	}
	public String getBookStatus() {
		return bookStatus;
	}
	public void setBookStatus(String bookStatus) {
		this.bookStatus = bookStatus;
	}
	public String getBookComments() {
		return bookComments;
	}
	public void setBookComments(String bookComments) {
		this.bookComments = bookComments;
	}
}
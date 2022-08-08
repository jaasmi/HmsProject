package com.hmsproject;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class BookService {

	@Autowired
    private BookRepository repo;
	
	@Autowired
	private BookDAO dao;
	
	@Autowired 
	private RoomDAO rdao;
	
	@Autowired 
	private WalletDAO wdao;
	
	@Autowired
	private BookDAO bdao;
	
	public String acceptOrRejectBooking(int bookId,int admId,String status) {
		Book book = bdao.searchByBookId(bookId);
		int aid = book.getAdmId();
		int cid = book.getCusId();
		String walType =book.getWalSource();
		double billAmount = book.getBookBillamount();
		if (aid!=admId) {
			return "You are unauthorized admin...";
		} 
		if (status.toUpperCase().equals("YES")) {
			return bdao.updateStatus(bookId,"ACCEPTED");
		} else {
			bdao.updateStatus(bookId, "DENIED");
			wdao.refundWallet(cid, walType, billAmount);
			return "Order Rejected and Amount Refunded...";
		}
	}
	public String bookRoom(Book book) {
		Room room = rdao.searchRoom(book.getRoomNo());
		Wallet wallet = wdao.showCustomerWallet(book.getCusId(), book.getWalSource());
		double balance = wallet.getWalAmount();
		double billAmount = book.getNoOfRooms()*room.getRoomPrice();
		System.out.println(balance);
		System.out.println(billAmount);
		if (balance-billAmount > 0) {
			book.setBookStatus("PENDING");
			book.setBookBillamount(book.getNoOfRooms()*room.getRoomPrice());
			repo.save(book);
			wdao.updateWallet(book.getCusId(), book.getWalSource(), billAmount);
			return "Room Booking Successfull...and Amount Debited";
		}
		return "Insufficient Funds...";
	}
	
	public List<Book> showAdminPendingBookings(int admId) {
		return dao.showAdminPendingBookings(admId);
	}
	public List<Book> showAdminBookings(int admId) {
		return dao.showAdminBookings(admId);
	}
	public List<Book> showCustomerBookings(int cid) {
		return dao.showCustomerBookings(cid);
	}
	public List<Book> showCustomerPendingBookings(int cid) {
		return dao.showCustomerPendingBoookings(cid);
	}
	public Book search(int bookId) {
		return repo.findById(bookId).get();
	}
	public List<Book> showBookings() {
		return repo.findAll();
	}
}
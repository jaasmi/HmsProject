package com.hmsproject;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BookController {

	@Autowired
	private BookService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/acceptOrRejectBooking/{bookId}/{admId}/{status}")
	public String acceptOrReject(@PathVariable int bookId,@PathVariable int admId, 
			@PathVariable String status) {
		return service.acceptOrRejectBooking(bookId, admId, status);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/bookRoom")
	public String add(@RequestBody Book book) {
		return service.bookRoom(book);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/customerPendingbookings/{cid}",method = RequestMethod.GET)
	public List<Book> customerPendingBookings(@PathVariable int cid) {
		return service.showCustomerPendingBookings(cid);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/customerBookings/{cid}")
	public List<Book> customerBookings(@PathVariable int cid) {
		return service.showCustomerBookings(cid);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/adminPendingBookings/{aid}")
	public List<Book> adminPendingBookings(@PathVariable int aid) {
		return service.showAdminPendingBookings(aid);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/adminBookings/{aid}")
	public List<Book> adminBookings(@PathVariable int aid) {
		return service.showAdminBookings(aid);
	}
	
	@RequestMapping(value="/showbookings")
	public List<Book> list() {
		return service.showBookings();
	}
	
	@RequestMapping("/booking/{id}")
	public ResponseEntity<Book> get(@PathVariable int id) {
		try {
		Book book = service.search(id);
		return new ResponseEntity<Book>(book,HttpStatus.OK);
		} catch(NoSuchElementException e) {
			return new ResponseEntity<Book>(HttpStatus.NOT_FOUND);
		}
	}
}
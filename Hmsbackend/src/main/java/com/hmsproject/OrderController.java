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
import org.springframework.web.bind.annotation.RestController;

@RestController
public class OrderController {

	@Autowired
	private OrderService service;
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/acceptOrRejectOrder/{ordId}/{admId}/{status}")
	public String acceptOrReject(@PathVariable int ordId,@PathVariable int admId, 
			@PathVariable String status) {
		return service.acceptOrRejectOrder(ordId, admId, status);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@PostMapping("/placeOrder")
	public String add(@RequestBody Orders orders) {
		return service.placeOrder(orders);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/customerPendingOrders/{cid}")
	public List<Orders> customerPendingOrders(@PathVariable int cid) {
		return service.showCustomerPendingOrders(cid);
	}

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/customerOrders/{cid}")
	public List<Orders> customerOrders(@PathVariable int cid) {
		return service.showCustomerOrders(cid);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/adminPendingOrders/{aid}")
	public List<Orders> adminPendingOrders(@PathVariable int aid) {
		return service.showAdminPendingOrders(aid);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/adminOrders/{aid}")
	public List<Orders> adminOrders(@PathVariable int aid) {
		return service.showAdminOrders(aid);
	}
	
	@RequestMapping(value="/showorders")
	public List<Orders> list() {
		return service.showOrders();
	}
	
	@RequestMapping("/order/{id}")
	public ResponseEntity<Orders> get(@PathVariable int id) {
		try {
		Orders orders = service.search(id);
		return new ResponseEntity<Orders>(orders,HttpStatus.OK);
		} catch(NoSuchElementException e) {
			return new ResponseEntity<Orders>(HttpStatus.NOT_FOUND);
		}
	}
}
package com.hmsproject;

import java.util.List;
import java.util.NoSuchElementException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class AdminController {

	@Autowired
	private AdminService service;
	@Autowired
	private AdminDAO adao;
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping(value="/showAdmin")
	public List<Admin> list() {
		return service.showAdmin();
	}
	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/adminAuthenticate/{user}/{pwd}")
	public String autneticateion(@PathVariable String user, @PathVariable String pwd) {
		return service.authenticate(user, pwd);
	}
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/AdminsearchByUser/{user}")
	public ResponseEntity<Admin> AdminsearchByUserName(@PathVariable String user) {
		try {
		Admin admin = adao.searchByAdminUserName(user);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
		} catch(NoSuchElementException e) {
			return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
		}
	} 

	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/admin/{id}")
	public ResponseEntity<Admin> get(@PathVariable int id) {
		try {
		Admin admin = service.search(id);
		return new ResponseEntity<Admin>(admin,HttpStatus.OK);
		} catch(NoSuchElementException e) {
			return new ResponseEntity<Admin>(HttpStatus.NOT_FOUND);
		}
	}
}

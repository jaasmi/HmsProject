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
public class WalletController {

	@Autowired
	private WalletService walletService;
	@Autowired
	private WalletDAO dao;
	
	@CrossOrigin(origins = "http://localhost:3000/cid")
	@RequestMapping("/showcustomerWallet/{cid}")
	public List<Wallet> getCustomerWallet(@PathVariable int cid) {
		return walletService.showCustomerWallets(cid);
	}	
	@CrossOrigin(origins = "http://localhost:3000")
	@RequestMapping("/wallet/{id}")
	public ResponseEntity<Wallet> get(@PathVariable int id) {
		try {
		Wallet wallet = walletService.search(id);
		return new ResponseEntity<Wallet>(wallet,HttpStatus.OK);
		} catch(NoSuchElementException e) {
			return new ResponseEntity<Wallet>(HttpStatus.NOT_FOUND);
		}
	}
}
package com.hmsproject;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
@Transactional
public class AdminService {

	@Autowired
    private AdminRepository repo;
	
	@Autowired
	private AdminDAO adao;
	
	public String authenticate(String user,String pwd) {
		return adao.authenticate(user, pwd);
	}
	
	
	public Admin search(int admId) {
		return repo.findById(admId).get();
	}
	public List<Admin> showAdmin() {
		return repo.findAll();
	}
}
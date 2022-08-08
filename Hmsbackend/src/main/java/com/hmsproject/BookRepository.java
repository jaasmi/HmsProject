package com.hmsproject;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;


public interface BookRepository extends JpaRepository<Book, Integer>{

//	List<Orders> customerOrders(int cusId);
//	List<Orders> vendorOrders(int venId);;
}


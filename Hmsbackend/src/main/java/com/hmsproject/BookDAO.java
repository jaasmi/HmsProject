package com.hmsproject;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class BookDAO {

	@Autowired  
    JdbcTemplate jdbc;  
	
	public Book searchByBookId(int bookId) {
		String cmd = "select * from Book where book_id=?";
		List<Book> bookList=null;
		bookList=jdbc.query(cmd,new Object[] {bookId}, new RowMapper<Book>() {

			@Override
			public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
				Book book = new Book();
				book.setBookId(rs.getInt("BOOK_ID"));
				book.setCusId(rs.getInt("CUS_ID"));
				book.setAdmId(rs.getInt("ADM_ID"));
				book.setWalSource(rs.getString("WAL_SOURCE"));
				book.setRoomNo(rs.getInt("ROOM_NO"));
				book.setBookDate(rs.getDate("BOOK_DATE"));
				book.setNoOfRooms(rs.getInt("NO_OF_ROOMS"));
				book.setBookBillamount(rs.getDouble("BOOK_BILLAMOUNT"));
				book.setBookStatus(rs.getString("BOOK_STATUS"));
				book.setBookComments(rs.getString("BOOK_COMMENTS"));
				return book;
			}
			
		});
		return bookList.get(0);
	}
	
	public String updateStatus(int bookId,String bookStatus) {
		String cmd = "Update Book set BOOK_STATUS=? WHERE book_Id=?";
		jdbc.update(cmd, new Object[] {bookStatus,bookId});
		return "Booking Accepted...";
	}
	
	
	public List<Book> showAdminPendingBookings(int admId) {
		String cmd = "select * from Book where BOOK_STATUS='PENDING' AND adm_id=?";
		List<Book> bookList=null;
		bookList=jdbc.query(cmd,new Object[] {admId}, new RowMapper<Book>() {

			@Override
			public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
				Book book = new Book();
				book.setBookId(rs.getInt("BOOK_ID"));
				book.setCusId(rs.getInt("CUS_ID"));
				book.setAdmId(rs.getInt("ADM_ID"));
				book.setWalSource(rs.getString("WAL_SOURCE"));
				book.setRoomNo(rs.getInt("ROOM_NO"));
				book.setBookDate(rs.getDate("BOOK_DATE"));
				book.setNoOfRooms(rs.getInt("NO_OF_ROOMS"));
				book.setBookBillamount(rs.getDouble("BOOK_BILLAMOUNT"));
				book.setBookStatus(rs.getString("BOOK_STATUS"));
				book.setBookComments(rs.getString("BOOK_COMMENTS"));
				return book;
			}
			
		});
		return bookList;
	}
	
	public List<Book> showAdminBookings(int admId) {
		String cmd = "select * from Book where adm_id=?";
		List<Book> bookList=null;
		bookList=jdbc.query(cmd,new Object[] {admId}, new RowMapper<Book>() {

			@Override
			public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
				Book book = new Book();
				book.setBookId(rs.getInt("BOOK_ID"));
				book.setCusId(rs.getInt("CUS_ID"));
				book.setAdmId(rs.getInt("ADM_ID"));
				book.setWalSource(rs.getString("WAL_SOURCE"));
				book.setRoomNo(rs.getInt("ROOM_NO"));
				book.setBookDate(rs.getDate("BOOK_DATE"));
				book.setNoOfRooms(rs.getInt("NO_OF_ROOMS"));
				book.setBookBillamount(rs.getDouble("BOOK_BILLAMOUNT"));
				book.setBookStatus(rs.getString("BOOK_STATUS"));
				book.setBookComments(rs.getString("BOOK_COMMENTS"));
				return book;
			}
			
		});
		return bookList;
	}
	
	public List<Book> showCustomerBookings(int cid) {
		String cmd = "select * from Book where  CUS_ID=?";
		List<Book> bookList=null;
		bookList=jdbc.query(cmd,new Object[] {cid}, new RowMapper<Book>() {

			@Override
			public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
				Book book = new Book();
				book.setBookId(rs.getInt("BOOK_ID"));
				book.setCusId(rs.getInt("CUS_ID"));
				book.setAdmId(rs.getInt("ADM_ID"));
				book.setWalSource(rs.getString("WAL_SOURCE"));
				book.setRoomNo(rs.getInt("ROOM_NO"));
				book.setBookDate(rs.getDate("BOOK_DATE"));
				book.setNoOfRooms(rs.getInt("NO_OF_ROOMS"));
				book.setBookBillamount(rs.getDouble("BOOK_BILLAMOUNT"));
				book.setBookStatus(rs.getString("BOOK_STATUS"));
				book.setBookComments(rs.getString("BOOK_COMMENTS"));
				return book;
			}
			
		});
		return bookList;
	}
	public List<Book> showCustomerPendingBoookings(int custId) {
		String cmd = "select * from Book where BOOK_STATUS='PENDING' AND cus_id=?";
		List<Book> bookList=null;
		bookList=jdbc.query(cmd,new Object[] {custId}, new RowMapper<Book>() {

			@Override
			public Book mapRow(ResultSet rs, int rowNum) throws SQLException {
				Book book = new Book();
				book.setBookId(rs.getInt("BOOK_ID"));
				book.setCusId(rs.getInt("CUS_ID"));
				book.setAdmId(rs.getInt("ADM_ID"));
				book.setWalSource(rs.getString("WAL_SOURCE"));
				book.setRoomNo(rs.getInt("ROOM_NO"));
				book.setBookDate(rs.getDate("BOOK_DATE"));
				book.setNoOfRooms(rs.getInt("NO_OF_ROOMS"));
				book.setBookBillamount(rs.getDouble("BOOK_BILLAMOUNT"));
				book.setBookStatus(rs.getString("BOOK_STATUS"));
				book.setBookComments(rs.getString("BOOK_COMMENTS"));
				return book;
			}
			
		});
		return bookList;
	}

}

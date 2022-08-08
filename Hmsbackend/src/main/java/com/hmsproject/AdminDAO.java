package com.hmsproject;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class AdminDAO {

	@Autowired  
    JdbcTemplate jdbc;
	public Admin searchByAdminUserName(String userName) {
		String cmd = "select * from Admin where Adm_UserName=?";
		List<Admin> adminList = jdbc.query(cmd, new Object[] {userName}, new RowMapper<Admin>() {

			@Override
			public Admin mapRow(ResultSet rs, int rowNum) throws SQLException {
				Admin admin = new Admin();
				admin.setAdmId(rs.getInt("Adm_ID"));
				admin.setAdmName(rs.getString("Adm_NAME"));
				admin.setAdmPhnNo(rs.getString("Adm_PHN_NO"));
				admin.setAdmUsername(rs.getString("Adm_USERNAME"));
			admin.setAdmPassword(rs.getString("Adm_PASSWORD"));
			admin.setAdmEmail(rs.getString("Adm_EMAIL"));

				return admin;
			}
		});
		return adminList.get(0);
	}
	public String authenticate(String user,String pwd) {
		String cmd = "select count(*) cnt from Admin where Adm_UserName=? "
				+ " AND Adm_Password=?";
		List str=jdbc.query(cmd,new Object[] {user,pwd}, new RowMapper() {

			@Override
			public Object mapRow(ResultSet rs, int rowNum) throws SQLException {
				// TODO Auto-generated method stub
				return rs.getInt("cnt");
			}
			
		});
		return str.get(0).toString();
	}
}
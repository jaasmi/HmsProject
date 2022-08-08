package com.hmsproject;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.stereotype.Repository;

@Repository
public class RoomDAO {

	@Autowired  
    JdbcTemplate jdbc;  
	
	public Room searchRoom(int roomNo) {
		String cmd = "select * from Room where room_no=?";
		List<Room> roomList=jdbc.query(cmd,new Object[] {roomNo}, new RowMapper<Room>() {

			@Override
			public Room mapRow(ResultSet rs, int arg1) throws SQLException {
				Room room = new Room();
				room.setRoomNo(rs.getInt("ROOM_NO"));
				room.setRoomType(rs.getString("ROOM_TYPE"));
				room.setRoomPrice(rs.getDouble("ROOM_PRICE"));
				
				return room;
			}


			
		});
		return roomList.get(0);
	}
}
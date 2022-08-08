import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './menu.scss'
const menu= () =>{
      return( <div className="component-menu">
      <ul className='list'>
      <li> <Link to="/menuShow" className='menu_list'>Place Order</Link></li>
      <li> <Link to="/roomShow" className='menu_list'> Book Room</Link></li>
      <li><Link to="/customerDashboard" className='menu_list'>Profile</Link></li>
      <li> <Link to="/" className='menu_list'>Logout</Link></li>
    </ul>
    </div>);
}
export default menu;

/**
 <li> <Link to="/customerShow">Customer Show</Link></li>

  <li> <Link to="/placeOrder">Place Order</Link></li>
 <li>  <Link to="/customerOrders">Customer Orders</Link></li>
    <li> <Link to="/customerPendingOrders">Customer Pending Orders</Link></li>

        <li> <Link to="/bookRoom">Book Room </Link></li>
    <li> <Link to="/customerBookings">Customer Bookings</Link></li>
     <li> <Link to="/customerPendingBookings">Customer Pending Bookings</Link></li>

 */
      
  
// export default connect(
//     ({ menu }) => ({ ...menu }),
//     dispatch => bindActionCreators({ ...menuActions }, dispatch)
//   )( menu );
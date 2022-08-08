import React, {Component} from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import './vendormenu.scss'

    const vendormenu= () =>{
      return (<div className="component-vendormenu">
        <ul className='adminlist'>
        <li><Link to="/vendorDashBoard" className='menu_list'>Admin Details</Link></li>
        <li> <Link to="/vendorShow" className='menu_list'>Admin List</Link></li>
        <li><Link to="/customerShow" className='menu_list'>Customers List</Link></li>
        <li><Link to="/vendorOrders" className='menu_list'>Orders</Link></li>
        <li><Link to="/adminBookings" className='menu_list'>Bookings</Link></li>
      <li> <Link to="/" className='menu_list'>Logout</Link></li>
      </ul>
      </div>);
    }

  export default vendormenu;
// export default connect(
//     ({ vendormenu }) => ({ ...vendormenu }),
//     dispatch => bindActionCreators({ ...vendormenuActions }, dispatch)
//   )( vendormenu );
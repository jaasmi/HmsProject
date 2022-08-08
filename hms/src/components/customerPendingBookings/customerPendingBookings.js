import React, {Component} from 'react';
import './customerPendingBookings.scss'
import axios from 'axios';
import Menu from '../menu/menu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerPendingOrdersActions from "../../store/customerPendingOrders/actions";
export default class customerPendingBookings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      book : []
    };
}

componentDidMount() {
  let cid = localStorage.getItem("cid")
 // alert(cid)
  axios.get("http://localhost:4445/customerPendingBookings/"+cid)
  .then(response => {
    this.setState({
      book : response.data
    })
    console.log(response.data)
   // localStorage.setItem("cid",response.data.cusId);
//     alert(localStorage.getItem("cid"))
  })
}

render() {
  const {book} = this.state
  return <div className="component-customer-pending-bookings">
    <div className="me"><Menu></Menu> </div>
        <br/><br/><br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <center><table border="3" align='center'>
  <tr>
    <th>Book Id</th>
    <th>Customer Id</th>
    <th>Room No</th>
    <th>Admin Id</th>
    <th>Wallet Source</th>
    <th>No of Rooms</th>
    <th>Bill Amount</th>
    <th>Book Status</th>
    <th>Book Comments</th>
  </tr>
  {
    book.map( book => 
      <tr>
        <td>{book.bookId}</td>
        <td>{book.cusId}</td>
        <td>{book.roomNo}</td>
        <td>{book.admId}</td>
        <td>{book.walSource}</td>
        <td>{book.noOfRooms}</td>
        <td>{book.bookBillamount}</td>
        <td>{book.bookStatus}</td>
        <td>{book.bookComments}</td>
        
      </tr>
  )
  }
</table></center>

  </div>;
}
  }
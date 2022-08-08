import React, {Component} from 'react';
import './adminBookings.scss'
import axios from 'axios';
import Menu from '../menu/menu';
import VendorMenu from '../vendormenu/vendormenu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerOrdersActions from "../../store/customerOrders/actions";
export default class customerBookings extends Component {
  constructor(props) {
    super(props)
    this.state = {
      book : []
    };
}

componentDidMount() {
  let cid = localStorage.getItem("cid")
  //alert(cid)
  axios.get("http://localhost:4445/customerBookings/" +cid)
  .then((response) => {
    this.setState({
      book : response.data
    });
   console.log(response.data)
  });
}

render() {
  const {book} = this.state
  return <div className="component-customer-bookings">
<div className="me"><VendorMenu></VendorMenu> </div>
        <br/><br/><br></br>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
   <center> <table border="3" align='center'>
  <tr>
    <th>Book Id</th>
    <th>Customer Id</th>
    <th>Room No</th>
    <th>Admin Id</th>
    <th>Wallet Source</th>
    <th>No Of Rooms</th>
    <th>Bill Amount</th>
    <th> Comments</th>
  </tr>
  {book.map( book =>
    <tr>
    <td>{book.bookId}</td>
    <td>{book.cusId}</td>
    <td>{book.roomNo}</td>
    <td>{book.admId}</td>
    <td>{book.walSource}</td>
    <td>{book.noOfRooms}</td>
    <td>{book.bookBillamount}</td>
    <td>{book.bookComments}</td>
    
  </tr>
  )
  }
      
  
  
</table>
</center>
  </div>;
}
  }
// export default connect(
//     ({ customerOrders }) => ({ ...customerOrders }),
//     dispatch => bindActionCreators({ ...customerOrdersActions }, dispatch)
//   )( customerOrders );
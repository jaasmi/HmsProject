import React, {Component} from 'react';
import './customerPendingOrders.scss'
import axios from 'axios';
import Menu from '../menu/menu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerPendingOrdersActions from "../../store/customerPendingOrders/actions";
export default class customerPendingOrders extends Component {
  constructor(props) {
    super(props);
    this.state = {
      orders : []
    };
}

componentDidMount() {
  let cid = localStorage.getItem("cid")
 // alert(cid)
  axios.get("http://localhost:4445/customerPendingOrders/"+cid)
  .then(response => {
    this.setState({
      orders : response.data
    })
    console.log(response.data)
   // localStorage.setItem("cid",response.data.cusId);
//     alert(localStorage.getItem("cid"))
  })
}

render() {
  const {orders} = this.state
  return <div className="component-customer-pending-orders">
    <div className="me"><Menu></Menu> </div>
        <br/><br/><br></br>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <center><table border="3" align='center'>
  <tr>
    <th>Order Id</th>
    <th>Customer Id</th>
    <th>Admin Id</th>
    <th>Menu Id</th>
    <th>Wallet Source</th>
    <th>Order Quantity</th>
    <th>Bill Amount</th>
    <th>Order Status</th>
    <th>Order Comments</th>
  </tr>
 
      <tr>
        <td>{orders.ordId}</td>
        <td>{orders.cusId}</td>
        <td>{orders.admId}</td>
        <td>{orders.menId}</td>
        <td>{orders.walSource}</td>
        <td>{orders.ordQuantity}</td>
        <td>{orders.ordBillamount}</td>
        <td>{orders.ordStatus}</td>
        <td>{orders.ordComments}</td>
        
      </tr>
 
 
</table></center>

  </div>;
}
  }
// export default connect(
//     ({ customerPendingOrders }) => ({ ...customerPendingOrders }),
//     dispatch => bindActionCreators({ ...customerPendingOrdersActions }, dispatch)
//   )( customerPendingOrders );
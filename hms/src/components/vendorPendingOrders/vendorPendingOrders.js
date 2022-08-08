import React, {Component} from 'react';
import './vendorPendingOrders.scss'
import axios from 'axios';
import VendorMenu from '../vendormenu/vendormenu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorPendingOrdersActions from "../../store/vendorPendingOrders/actions";
export default class vendorPendingOrders extends Component {
    constructor(props) {
        super(props);
        this.state = {
          orders:[]
        };
    }
    componentDidMount() {
      let aid = localStorage.getItem("aid")
     // alert(cid)
      axios.get("http://localhost:4445/adminPendingOrders/"+aid)
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
      return <div className="component-vendor-pending-orders">
        <div className="me"><VendorMenu></VendorMenu></div>
        <br/><br/><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <center> <table border="3" align='center'>
      <tr>
        <th>Order Id</th>
        <th>Customer Id</th>
        <th>Menu Id</th>
        <th>Admin Id</th>
        <th>Wallet Source</th>
        <th>Order Quantity</th>
        <th>Bill Amount</th>
        <th>Order Status</th>
        <th>Order Comments</th>
      </tr>
      
          <tr>
            <td>{orders.ordId}</td>
            <td>{orders.cusId}</td>
            <td>{orders.menId}</td>
            <td>{orders.admId}</td>
            <td>{orders.walSource}</td>
            <td>{orders.ordQuantity}</td>
            <td>{orders.ordBillamount}</td>
            <td>{orders.ordStatus}</td>
            <td>{orders.ordComments}</td>
            
          </tr>
      
      
    </table></center>
    </div>
    }
  }
// export default connect(
//     ({ vendorPendingOrders }) => ({ ...vendorPendingOrders }),
//     dispatch => bindActionCreators({ ...vendorPendingOrdersActions }, dispatch)
//   )( vendorPendingOrders );
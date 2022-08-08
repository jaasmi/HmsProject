import React, {Component} from 'react';
import './placeOrder.scss'
import  axios  from 'axios';
import Menu from '../menu/menu';
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as placeOrderActions from "../../store/placeOrder/actions";
export default class placeOrder extends Component {
    constructor(props) {
        super(props);
        let cid = localStorage.getItem("cid")
        this.state = {
          cusId:cid,
          menId:'',
          admId:'',
          walSource:'',
          ordQuantity:'',
          ordComments:'',
        };
    }
    changeIdCustomer(event){
      this.setState({
        cusId:event.target.value
      });
    }
    changeIdMenu(event){
      this.setState({
        menId:event.target.value
      });
    }
    changeIdVendor(event){
      this.setState({
        admId:event.target.value
      });
    }
    changeSourceWal(event){
      this.setState({
        walSource:event.target.value
      });
    }
   
    changequantity(event){
      this.setState({
        ordQuantity:event.target.value
      });
    }
    changecomments(event){
      this.setState({
        ordComments:event.target.value
      });
    }
  OrderConfirm = () => {
    axios.post('http://localhost:4445/placeOrder',
      { cusId: this.state.cusId, admId: this.state.admId,
        menId: this.state.menId, walSource: this.state.walSource,
        ordQuantity: this.state.ordQuantity, ordComments: this.state.ordComments })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.state.result = res.data
        alert(res.data)
        this.props.navigate("/customerOrders")
      })
    }
        render() {
      return <div className="component-place-order">
              <div className="me"><Menu></Menu> </div>
        <br/><br/><br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <center> <table border="4" align='center'>
            <tr>
              <th colSpan="2">PlaceOrder</th>
            </tr>
            <tr>
              <th>Customer Id</th>
              <td>
                <input type="text" id="cusId"
                 value={this.state.cusId} 
                 onChange={this.changeIdCustomer.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Menu Id</th>
              <td>
                <input type="text" id="menId"
                 value={this.state.menId} 
                 onChange={this.changeIdMenu.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Admin Id</th>
              <td>
                <input type="text" id="admId"
                 value={this.state.admId} 
                 onChange={this.changeIdVendor.bind(this)} />
              </td>
            </tr>
           
            

            <tr>
        <th>Wallet Source</th>
        <label> 
        <td><select type="text" id="walSource" value={this.state.walSource} onChange={this.changeSourceWal.bind(this)}>
         
        <option values="/"></option>         
         <option values="paytm">PAYTM</option>
          <option values="debit_card">DEBIT_CARD</option>
          <option values="credit_card">CREDIT_CARD</option>
        </select></td>
        </label>
        </tr>
          <tr>
              <th>Quantity</th>
              <td>
                <input type="text" id="ordQuantity"
                 value={this.state.ordQuantity} 
                 onChange={this.changequantity.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Comments</th>
              <td>
                <input type="text" id="ordComments"
                 value={this.state.ordComments} 
                 onChange={this.changecomments.bind(this)} />
              </td>
            </tr>
            
            <tr>
              <th colSpan="2">
              
                <button type="submit" onClick={this.OrderConfirm}><Link to="/customerOrders">Confirm Order</Link></button>
              </th>
            </tr>
          </table>
          </center>
      </div>;
      
    }
  }
// export default connect(
//     ({ placeOrder }) => ({ ...placeOrder }),
//     dispatch => bindActionCreators({ ...placeOrderActions }, dispatch)
//   )( placeOrder );<Link to="/customerOrders">
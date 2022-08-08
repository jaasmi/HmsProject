import React, {Component} from 'react';
import './bookRoom.scss'
import  axios  from 'axios';
import Menu from '../menu/menu';
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as placeOrderActions from "../../store/placeOrder/actions";
export default class bookRoom extends Component {
    constructor(props) {
        super(props);
        let cid = localStorage.getItem("cid")
        this.state = {
          cusId:cid,
          roomNo:'',
          admId:'',
          walSource:'',
          noOfRooms:'',
          bookComments:'',
        };
    }
    changeIdCustomer(event){
      this.setState({
        cusId:event.target.value
      });
    }
    changeIdMenu(event){
      this.setState({
        roomNo:event.target.value
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
        noOfRooms:event.target.value
      });
    }
    changecomments(event){
      this.setState({
        bookComments:event.target.value
      });
    }
  OrderConfirm = () => {
    axios.post("http://localhost:4445/bookRoom",
      { cusId: this.state.cusId, admId: this.state.admId,
        roomNo: this.state.roomNo, walSource: this.state.walSource,
        noOfRooms: this.state.noOfRooms, bookComments: this.state.bookComments })
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.state.result = res.data
        alert(res.data)
        this.props.navigate("/customerBookings")
      })
    }
        render() {
      return <div className="component-book-room">
              <div className="me"><Menu></Menu> </div>
        <br/><br/><br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <center> <table border="4" align='center'>
            <tr>
              <th colSpan="2">Book Room</th>
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
              <th>Room No</th>
              <td>
                <input type="text" id="roomNo"
                 value={this.state.roomNo} 
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
              <th>No of Rooms</th>
              <td>
                <input type="text" id="noOfRooms"
                 value={this.state.noOfRooms} 
                 onChange={this.changequantity.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Comments</th>
              <td>
                <input type="text" id="bookComments"
                 value={this.state.bookComments} 
                 onChange={this.changecomments.bind(this)} />
              </td>
            </tr>
            
            <tr>
              <th colSpan="2">
              
                <button type="submit" onClick={this.OrderConfirm}><Link to="/customerBookings">Book Now</Link></button>
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
//   )( placeOrder );
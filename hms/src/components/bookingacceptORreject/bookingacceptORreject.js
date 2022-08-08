import React, {Component} from 'react';
import './bookingacceptORreject.scss'
import axios from 'axios';
import VendorMenu from '../vendormenu/vendormenu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as orderacceptORrejectActions from "../../store/orderacceptORreject/actions";
export default class bookingacceptORreject extends Component {
    constructor(props) {
        super(props);
        this.state = {
          BookId:'',
          AdminId:'',
          Status:'',
        };
    }
    changeIdOrder(event){
      this.setState({
        BookId:event.target.value
      })
    }
    changeIdVendor(event){
      this.setState({
        AdminId:event.target.value
      })
      }
      changestatus(event){
        this.setState({
          Status:event.target.value
        })
        }

    Status=()=>{
      axios.post('http://localhost:4445/acceptOrRejectBooking/'+this.state.BookId+'/'+this.state.AdminId+'/'+this.state.Status,null)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.state.result = res.data
        alert(res.data)
      })
    }
    render() {
      return <div className="component-bookingaccept-o-rreject">
       <div className="me"><VendorMenu></VendorMenu> </div>
        <br/><br/><br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <center>
          <table border="4" align='center'>
            <tr>
              <th colSpan="2">Accpet/Reject Booking</th>
            </tr>
            <tr>
              <th>Book Id</th>
              <td>
                <input type="text" id="BookId"
                 value={this.state.BookId} 
                 onChange={this.changeIdOrder.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Admin Id</th>
              <td>
                <input type="text" id="AdminId"
                 value={this.state.AdminId} 
                 onChange={this.changeIdVendor.bind(this)} />
              </td>
            </tr>


            <tr>
            <th>YES/NO</th>
        <label> 
        <td><select type="text" id="Status" value={this.state.Status} onChange={this.changestatus.bind(this)}>
          <option values="YES">YES</option>
          <option values="NO">NO</option>
        </select></td>
        </label>
        </tr>


            
            
            <tr>
              <th colSpan="2" >
              
              <button type="submit" onClick={this.Status} >Confirm</button>
              </th>
            </tr>
            </table></center>
      </div>;
    }
}
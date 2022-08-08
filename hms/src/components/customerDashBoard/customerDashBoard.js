import React, {Component} from 'react';
import './customerDashBoard.scss'
import Menu from '../menu/menu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as customerDashBoardActions from "../../store/customerDashBoard/actions";
export default class customerDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          customer : []
        };
    }
    componentDidMount() {
      let user = localStorage.getItem("cuser")
      axios.get("http://localhost:4445/searchByUser/"+user)
      .then(response => {
        this.setState({
          customer : response.data
        })
        console.log(response.data)
        localStorage.setItem("cid",response.data.cusId);
   //     alert(localStorage.getItem("cid"))
      })
    }
    render() {
      const {customer} = this.state
      
      return(
        <div>
        <div className="me"><Menu></Menu> </div>
        <center>
          <div className='table-list'>
            <h3>Profile</h3>
        <table class="table-bordered" align='center'>
              <tr>
                <th className="table-head">Id</th>
                <td width="10%">:</td>
                <td className="table-data">{customer.cusId}</td>
              </tr>
              <tr>
                <th className="table-head">Name	</th>
                <td width="10%">:</td>
                <td className="table-data">{customer.cusName}</td>
              </tr>
              <tr>
                <th className="table-head">Username</th>
                <td width="10%">:</td>
                <td className="table-data">{customer.cusUsername}</td>
              </tr>
              <tr>
                <th className="table-head">DOB</th>
                <td width="10%">:</td>
                <td className="table-data">{customer.cusDOB}</td>
              </tr>
              <tr>
                <th className="table-head">Phone</th>
                <td width="10%">:</td>
                <td className="table-data">{customer.cusPhnNo}</td>
              </tr>
              <tr>
                <th className="table-head">Email</th>
                <td width="10%">:</td>
                <td className="table-data">{customer.cusEmail}</td>
              </tr>
              <tr>
                <th className="table-head">Location</th>
                <td width="10%">:</td>
                <td className="table-data">{customer.cusLoc}</td>
              </tr>
            </table>
            </div>
            </center>
            </div>
      );
      
      /**<div className="component-customer-dash-board">
        <div className="me"><Menu></Menu> </div>
        <br/><br/><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
      <center> <table border="3" align='center'>
      <tr>
        <th>Customer Id</th>
        <th>Customer Name</th>
        <th>Customer DOB</th>
        <th>Customer Phone No</th>
        <th>Customer Location</th>
        <th>Address proof</th>
        <th>Email</th>
         </tr>
        
          <tr>
            <td>{customer.cusId}</td>
            <td>{customer.cusName}</td>
            <td>{customer.cusDOB}</td>
            <td>{customer.cusPhnNo}</td>
            <td>{customer.cusLoc}</td>
            <td>{customer.cusAddProof}</td>
            <td>{customer.cusEmail}</td>

            
           

          </tr>
    
    </table></center></div>;**/
    }
  }
// export default connect(
//     ({ customerDashBoard}) => ({ ...customerDashBoard}),
//     dispatch => bindActionCreators({ ...customerDashBoar }, dispatch)
//   )( customerInformation);

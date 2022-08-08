import React, {Component} from 'react';
import './vendorDashBoard.scss'
import VendorMenu from '../vendormenu/vendormenu';
import axios from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorDashBoardActions from "../../store/vendorDashBoard/actions";
export default class vendorDashBoard extends Component {
    constructor(props) {
        super(props);
        this.state = {
          vendor:[]
        };
    }
    componentDidMount() {
      let user = localStorage.getItem("cuser")
      axios.get("http://localhost:4445/AdminsearchByUser/"+user)
      .then(response => {
        this.setState({
          vendor : response.data
        })
        console.log(response.data)
        //localStorage.setItem("vid",response.data.venId);
      //  alert(localStorage.getItem("vid"))
      })
    }
    render() {
      const {vendor} = this.state
      return(
        <div>
        <div className="me"><VendorMenu></VendorMenu></div>
        <center>
          <div className='vendortable-list'>
            <h3>Profile</h3>
        <table class="table-bordered" align='center'>
              <tr>
                <th className="table-head">Id</th>
                <td width="10%">:</td>
                <td className="table-data">{vendor.admId}</td>
              </tr>
              <tr>
                <th className="table-head">Name	</th>
                <td width="10%">:</td>
                <td className="table-data">{vendor.admName}</td>
              </tr>
              <tr>
                <th className="table-head">Username</th>
                <td width="10%">:</td>
                <td className="table-data">{vendor.admUsername}</td>
              </tr>
              <tr>
                <th className="table-head">Phone</th>
                <td width="10%">:</td>
                <td className="table-data">{vendor.admPhnNo}</td>
              </tr>
              <tr>
                <th className="table-head">Email</th>
                <td width="10%">:</td>
                <td className="table-data">{vendor.admEmail}</td>
              </tr>
            </table>
            </div>
            </center>
            </div>
            
      );
      /**<div className="component-vendor-dash-board">
        <div className="me"><VendorMenu></VendorMenu></div>
        <br/><br/><br></br>
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <center> <table border="3" align='center'>
      <tr>
       <th>Admin Id</th>
        <th>Admin  Name</th>
        <th>Admin  Phone No</th>
        <th>Admin  Username</th>
        <th>Admin  Email</th>
        </tr>
        
          <tr>
            <td>{vendor.admId}</td>
            <td>{vendor.admName}</td>
            <td>{vendor.admPhnNo}</td>
            <td>{vendor.admUsername}</td>
            <td>{vendor.admEmail}</td>
          </tr>
    
    </table></center>
        </div>;**/
    }
  }
// export default connect(
//     ({ vendorDashBoard }) => ({ ...vendorDashBoard }),
//     dispatch => bindActionCreators({ ...vendorDashBoardActions }, dispatch)
//   )( vendorDashBoard );
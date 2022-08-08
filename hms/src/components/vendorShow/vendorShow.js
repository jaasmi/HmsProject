import React, {Component} from 'react';
import './vendorShow.scss'
import VendorMenu from '../vendormenu/vendormenu';
import  axios  from 'axios';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as vendorShowActions from "../../store/vendorShow/actions";
export default class vendorShow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          vendors:[]
        };
    }
    componentDidMount() {
      axios.get("http://localhost:4445/showAdmin")
      .then(response => {
        this.setState({
          vendors: response.data 
        })
        console.log(response.data)
      })
    
    }
    render() {
  const {vendors} = this.state    
      return <div className="component-vendor-show">
       <div className="me"><VendorMenu></VendorMenu></div> 
       <br/><br/><br></br>
       &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
       <center> <table border="3" align='center'>
          <tr>
            <th>Admin Id</th>
            <th>Admin Name</th>
            <th>Admin Phone No</th>
            <th>Admin UserName</th>
            <th>Admin Password</th>
            <th>Admin Email</th>
          </tr>
          {
            vendors.map( vendor => 
              <tr>
                <td>{vendor.admId}</td>
                <td>{vendor.admName}</td>
                <td>{vendor.admPhnNo}</td>
                <td>{vendor.admUsername}</td>
                <td>{vendor.admPassword}</td>
                <td>{vendor.admEmail}</td>
              </tr>
          )
          }
        </table>
        </center>
        </div>;
    }
  }
// export default connect(
//     ({ vendorShow }) => ({ ...vendorShow }),
//     dispatch => bindActionCreators({ ...vendorShowActions }, dispatch)
//   )( vendorShow );
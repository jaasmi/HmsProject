import React, {Component} from 'react';
import './orderacceptORreject.scss'
import axios from 'axios';
import VendorMenu from '../vendormenu/vendormenu';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as orderacceptORrejectActions from "../../store/orderacceptORreject/actions";
export default class orderacceptORreject extends Component {
    constructor(props) {
        super(props);
        this.state = {
          OrderId:'',
          VendorId:'',
          Status:'',
        };
    }
    changeIdOrder(event){
      this.setState({
        OrderId:event.target.value
      })
    }
    changeIdVendor(event){
      this.setState({
        VendorId:event.target.value
      })
      }
      changestatus(event){
        this.setState({
          Status:event.target.value
        })
        }

    Status=()=>{
      axios.post('http://localhost:4445/acceptOrRejectOrder/'+this.state.OrderId+'/'+this.state.AdminId+'/'+this.state.Status,null)
      .then(res => {
        console.log(res);
        console.log(res.data);
        this.state.result = res.data
        alert(res.data)
      })
    }
    render() {
      return <div className="component-orderaccept-o-rreject">
       <div className="me"><VendorMenu></VendorMenu> </div>
        <br/><br/><br></br>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
         <center>
          <table border="4" align='center'>
            <tr>
              <th colSpan="2">Accpet/Reject Order</th>
            </tr>
            <tr>
              <th>Order Id</th>
              <td>
                <input type="text" id="OrderId"
                 value={this.state.OrderId} 
                 onChange={this.changeIdOrder.bind(this)} />
              </td>
            </tr>
            <tr>
              <th>Vendor Id</th>
              <td>
                <input type="text" id="VendorId"
                 value={this.state.VendorId} 
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
// export default connect(
//     ({ orderacceptORreject }) => ({ ...orderacceptORreject }),
//     dispatch => bindActionCreators({ ...orderacceptORrejectActions }, dispatch)
//   )( orderacceptORreject );
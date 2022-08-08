import React, {Component} from 'react';
import './menushow.scss'
import axios from 'axios';
import Menu from '../menu/menu';
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menushowActions from "../../store/menushow/actions";
export default class menushow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          menu : []
        };
    }
    componentDidMount() {
      axios.get("http://localhost:4445/showMenu")
      .then(response => {
        this.setState({
          menu : response.data 
        })
        console.log(response.data)
      })
    
    }
    render() {
      const {menu} = this.state
      return <div className="component-menushow">
        <div className="me"><Menu></Menu> </div>
        <br/><br/><br></br>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <center>    
      <table border="3" align='center'>
          <tr>
            <th>Menu Id</th>
            <th>Menu Type</th>
            <th>Menu Item</th>
            <th>Price</th>
          </tr>
          {
            menu.map( menu => 
              <tr>
                <td>{menu.menId}</td>
                <td>{menu.menType}</td>
                <td>{menu.menItem}</td>
                <td>{menu.menPrice}</td>
              </tr>
          )
          }
        </table>
        </center>
        <button type='submit' className='order_btn'><Link to="/placeOrder" style={{color: "black"}}>Place Order</Link></button>
        </div>;
    }
  }
// export default connect(
//     ({ menushow }) => ({ ...menushow }),
//     dispatch => bindActionCreators({ ...menushowActions }, dispatch)
//   )( menushow );
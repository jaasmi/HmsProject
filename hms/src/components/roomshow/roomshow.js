import React, {Component} from 'react';
import './roomshow.scss'
import axios from 'axios';
import Menu from '../menu/menu';
import { Link } from 'react-router-dom';
// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as menushowActions from "../../store/menushow/actions";
export default class roomshow extends Component {
    constructor(props) {
        super(props);
        this.state = {
          room : []
        };
    }
    componentDidMount() {
      axios.get("http://localhost:4445/showRoom")
      .then(response => {
        this.setState({
          room : response.data 
        })
        console.log(response.data)
      })
    
    }
    render() {
      const {room} = this.state
      return <div className="component-roomshow">
        <div className="me"><Menu></Menu> </div>
        <br/><br/><br></br>    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <center>    
      <table border="3" align='center'>
          <tr>
            <th>Room No</th>
            <th>Room Type</th>
            <th>Price</th>
          </tr>
          {
            room.map( room=> 
              <tr>
                <td>{room.roomNo}</td>
                <td>{room.roomType}</td>
                
                <td>{room.roomPrice}</td>
              </tr>
          )
          }
        </table>
        </center>
        <button type='submit' className='order_btn'><Link to="/bookRoom" style={{color: "black"}}>Book Room</Link></button>
        </div>;
    }
  }
// export default connect(
//     ({ menushow }) => ({ ...menushow }),
//     dispatch => bindActionCreators({ ...menushowActions }, dispatch)
//   )( menushow );
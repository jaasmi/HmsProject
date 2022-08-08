import React, {Component} from 'react';
import './homePage.scss'
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as homePageActions from "../../store/homePage/actions";
export default class homePage extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {};
    // }
    render() {
      return  (
        <div className="component">
          <h1>ADVENTURE AWAITS</h1>
          <p>What are you waiting for?</p>
          <div className='btns'>
          <button><Link to="/login" className="btn1">Customer Login</Link></button>
          &nbsp;&nbsp;&nbsp;
          <button><Link to="/vendorLogin" className="btn2">Admin Login</Link></button>
          </div>
          </div>
        );
    }
  }
// export default connect(
//     ({ homePage }) => ({ ...homePage }),
//     dispatch => bindActionCreators({ ...homePageActions }, dispatch)
//   )( homePage );
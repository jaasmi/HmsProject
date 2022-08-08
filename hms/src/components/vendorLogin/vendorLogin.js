import React, {Component} from 'react';
import { withRouter } from '../../withRouter';
import './vendorLogin.scss'
import  axios  from 'axios';

// import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
// import * as loginActions from "../../store/login/actions";
export  class vendorLogin extends Component {
   
  changeUserName(event) {  
    this.setState({  
        userName: event.target.value
    });  
  }
  changePassword(event) {  
    this.setState({  
        passWord: event.target.value
    });  
  }
  vendorLogin = () => {
    let user= this.state.userName
    let pwd = this.state.passWord
    let result = this.state.result
    axios.get("http://localhost:4445/adminAuthenticate/"+user+"/"+pwd)
    .then(response => {
      if (response.data=='1') {
        localStorage.setItem("cuser",user)
        this.props.navigate("/vendormenu")
      }
      if (response.data=='1') {
        alert("Correct Credentails...");
        this.props.navigate("/vendormenu")
      } else {
        alert("Invalid Credentials...")
      }
    //  alert(response.data)
     // result = response.data
      // this.setState({
      //   customers : response.data 
      // })
      alert(response.data)
     result = response.data
      this.setState({
        vendors : response.data 
      })
      console.log(response.data)
    })
    // if (this.state.userName=="Hexaware" && this.state.passWord=="Hexaware") {
    //   //alert("Correct Credentails...");
    //   this.props.navigate("/menu")
    // } else {
    //   alert("Invalid Credentials...")
    // }
  }
  constructor(props) {
        super(props);
        this.state = {
          userName:'',
          passWord:'',
          result : ''
        };
    }
    render() {
      return (
      <div className="form">
      <form>
        <h2>Admin Login</h2>
          <div className='input-container'>
              <label>Username</label>
              <input type="text" name="uname" placeholder="Enter your Username" 
              id="userName"
              value={this.state.userName} 
              onChange={this.changeUserName.bind(this)}
              required />
          </div>
          <br/>
          <div className='input-container'>
              <label>Password</label>
              <input type="password" name="pwd" placeholder="Enter your Password" 
              id="passWord"
              value={this.state.passWord}
              onChange={this.changePassword.bind(this)}
              required/>
          </div>
          <br/>
          <div className='button-container'>
              <input type="submit" onClick={this.vendorLogin}/>
          </div>
          <br/>
          <div class="links">
              <a href="/signup">Don't have an account?Sign Up here!</a>
          </div>
      </form>
  </div>
      );
    }
  }
  export default withRouter(vendorLogin);
// export default connect(
//     ({ login }) => ({ ...login }),
//     dispatch => bindActionCreators({ ...loginActions }, dispatch)
//   )( login );
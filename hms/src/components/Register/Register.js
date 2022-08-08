import React from 'react'
import './Register.css';

function Register() {
  return (
 
    <body className='register-main'>    
    <div className="register-form">
        <h1>CREATE ACCOUNT</h1>
        <form>
            <div className='register-container'>            
            <table>
                <tr>
                    <td><input type="text" name="fname" id="fname" placeholder="Firstname" required /></td>
                    <td><input type="text" name="lname" id="lname" placeholder="Lastname" required /></td>
                
                </tr>
            </table>
            <table>
                <tr>
            
                <td><input type="number" name="contact" id="cnt" placeholder="Contact Number" required /></td>
            
                <td><input type="date" name="dob" id="dob" placeholder="Date of Birth" required /></td>
                </tr>
            </table>

                <input type="text" name="addr" placeholder="Enter your Address" required />
            
                <input type="email" name="email" placeholder="Enter your email" required/>
            
                <input type="password" name="pwd" placeholder="New Password" required/>
           
                <input type="password" name="pwd" placeholder="Confirm Password" required/>
            
            </div>
            <div className='button-container'>
                <input type="submit" />
            </div>
            <a href="/login">Already have an account?Login here!</a>
        </form>
    </div>
    
    </body>
 

  )
}

export default Register;
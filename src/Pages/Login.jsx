import React, { useState } from 'react'
import SignUpBanner from '../Components/Assets/Banner/SignUpBanner.png'
import './CSS/Login.css'
export const Login = () => {
  const [handleCheckBox, setHandleCheckBox] = useState(false);
  const handleCheckBoxChange = () => {
    setHandleCheckBox(!handleCheckBox);
  };
 
  return (
    <div className='SignupLogin'>
      <div className="SignUpLoginBanner">
        <img className='Banner' src={SignUpBanner} alt='banner' />
      </div>
      <div className="SignUpLoginForm LoginForm">
        <h3>Login</h3>
        <p>Phone number</p>
        <input type="number" placeholder='Enter your phone number...' />
        <p>Password</p>
        <input type="password" placeholder='Enter your password...' />
        <p className='ForgotPassword' style={{color: '#dc3545'}}>Forgot Password?</p>
        <p className='Remember'>
          <input type="checkbox"  checked={setHandleCheckBox} onChange={handleCheckBox}/> Remember me
        </p>
        <button className='SignUpLoginButton'>Login</button>
        <p>Already have an account? <span style={{color: '#dc3545'}}>Sign up</span></p>
      </div>
    </div>
  )
}

export default Login
import React, { useState } from 'react'
import './CSS/Signup.css'
import SignUpBanner from '../Components/Assets/Banner/SignUpBanner.png'
import Eye from '../Components/Assets/Icons/eye.svg'
import CloseEye from '../Components/Assets/Icons/eye-slash.svg'
import { Link } from 'react-router-dom';
export const Signup = () => {
  const [isClose, setHandleCloseEye] = useState(true);
  const handleCloseEye = () => {
    setHandleCloseEye(!isClose);
  }

  const [isClose2, setHandleCloseEye2] = useState(true);
  const handleCloseEye2 = () => {
    setHandleCloseEye2(!isClose2);
  }
  return (
    <div className='SignupLogin'>
      <div className="SignUpLoginBanner">
        <img className='Banner' src={SignUpBanner} alt='banner' />
      </div>
      <div className="SignUpLoginForm">
        <h3>Sign Up</h3>
        <p>User Name</p>
        <input type="text" placeholder='Enter your name...' />
        <p>Phone number</p>
        <input type="tel" placeholder='Enter your phone number...' />
        <p className='SendOTP' style={{color: '#dc3545'}}>Send OTP</p>
        <p>OTP authentication code</p>
        <input type="number" placeholder='Enter your OTP...' />
        <p>Email</p>
        <input type="email" placeholder='Enter your email...' />
        <p>Password</p>
        <div className="Password">
          <input type={isClose ? 'password' : 'text'} placeholder='Enter your password...' />
          <img className='Eye' src={isClose ? CloseEye : Eye} onClick={handleCloseEye} alt='eye' />
        </div>
        <p>Confirm Password</p>
        <div className="Password">
          <input type={isClose2 ? 'password' : 'text'} placeholder='Confirm your password...' />
          <img className='Eye' src={isClose2 ? CloseEye : Eye} onClick={handleCloseEye2} alt='eye' />
        </div>
        <button className='SignUpLoginButton'>Sign Up</button>
        <p>Already have an account? <span ><Link to="/login" style={{color: '#dc3545'}}>Log in</Link></span></p>
      </div>
    </div>
  )
}

export default Signup
import React from 'react'
import {Link} from 'react-router-dom'
import SignUpBanner from '../Components/Assets/Banner/SignUpBanner.png'
import './CSS/ForgotPassword.css'
const ForgotPassword = () => {
    
  return (
    <div className='ForgotPassword'>
      <div className="ForgotPasswordBanner">
        <img className='Banner' src={SignUpBanner} alt='banner' />
      </div>
      <div className="ForgotPasswordForm">
        <h3>Forgot Password</h3>
        <p>Phone number</p>
        <input type="tel" placeholder='Enter your phone number...' />
        <p>Email</p>
        <input type="email" placeholder='Enter your email...' />
        <button className='ForgotPasswordButton'>Send OTP</button>
        <p>Already have an account? <span ><Link to="/login" style={{color: '#dc3545'}}>Log in</Link></span></p>
      </div>

    </div>
  )
}

export default ForgotPassword;
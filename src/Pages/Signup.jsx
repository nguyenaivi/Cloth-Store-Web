import React from 'react'
import './CSS/Signup.css'
import SignUpBanner from '../Components/Assets/Banner/SignUpBanner.png'
export const Signup = () => {
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
        <input type="number" placeholder='Enter your phone number...' />
        <p className='SendOTP' style={{color: '#dc3545'}}>Send OTP</p>
        <p>OTP authentication code</p>
        <input type="number" placeholder='Enter your OTP...' />
        <p>Email</p>
        <input type="email" placeholder='Enter your email...' />
        <p>Password</p>
        <input type="password" placeholder='Enter your password...' />
        <p>Confirm Password</p>
        <input type="password" placeholder='Confirm your password...' />
        <button className='SignUpLoginButton'>Sign Up</button>
        <p>Already have an account? <span style={{color: '#dc3545'}}>Log in</span></p>
      </div>
    </div>
  )
}

export default Signup
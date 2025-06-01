import React, { useState, useEffect } from 'react'
import './CSS/Signup.css'
import SignUpBanner from '../Components/Assets/Banner/SignUpBanner.png'
import Eye from '../Components/Assets/Icons/eye.svg'
import CloseEye from '../Components/Assets/Icons/eye-slash.svg'
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import { AuthContext } from '../Context/AuthContext';

export const Signup = () => {
  const navigate = useNavigate();
  const [isClose, setHandleCloseEye] = useState(true);
  const [isClose2, setHandleCloseEye2] = useState(true);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = React.useContext(AuthContext);

  const handleCloseEye = () => {
    setHandleCloseEye(!isClose);
  }

  const handleCloseEye2 = () => {
    setHandleCloseEye2(!isClose2);
  }

  const handleSignupSubmit = () => {
    if (!firstName || !phone || !email || !password) {
      alert("Please fill all required fields!");
      return;
    }
    const newUser = {
      email: email,
      username: email,
      password: password,
      name: {
        firstname: firstName,
        lastname: lastName || ""
      },
      address: {
        city: "HCM",
        street: "abc",
        number: 12,
        zipcode: "12345",
        geolocation: {
          lat: "0",
          long: "0"
        }
      },
      phone: phone
    };
    axios.post('http://localhost:3001/users', newUser)
    .then(res => {
      console.log("User created:", res.data);
      alert("Sign up successfully!");
      sessionStorage.setItem("user", JSON.stringify(res.data));
      login(res.data);
    })
    .catch(err => {
      console.error("Sign up error:", err);
      alert("Failed to sign up. Please try again.");
    });
  }


  return (
    <div className='SignupLogin'>
      <div className="SignUpLoginBanner">
        <img className='Banner' src={SignUpBanner} alt='banner' />
      </div>
      <div className="SignUpLoginForm">
        <h3>Sign Up</h3>
        <p>First Name</p>
        <input type="text" placeholder='Enter your first name...' onChange={(e) => setFirstName(e.target.value)} />

        <p>Last Name</p>
        <input type="text" placeholder='Enter your last name (optional)...' onChange={(e) => setLastName(e.target.value)} />

        <p>Phone number</p>
        <input type="tel" placeholder='Enter your phone number...' onChange={(e) => setPhone(e.target.value)} />

        <p>Email</p>
        <input type="email" placeholder='Enter your email...' onChange={(e) => setEmail(e.target.value)} />

        <p>Password</p>
        <div className="Password">
          <input type={isClose ? 'password' : 'text'} placeholder='Enter your password...' onChange={(e) => setPassword(e.target.value)} />
          <img className='Eye' src={isClose ? CloseEye : Eye} onClick={handleCloseEye} alt='eye' />
        </div>

        <p>Confirm Password</p>
        <div className="Password">
          <input type={isClose2 ? 'password' : 'text'} placeholder='Confirm your password...' />
          <img className='Eye' src={isClose2 ? CloseEye : Eye} onClick={handleCloseEye2} alt='eye' />
        </div>

        <button className='SignUpLoginButton' onClick={handleSignupSubmit}>Sign Up</button>

        <p>Already have an account? <span ><Link to="/login" style={{ color: '#dc3545' }}>Log in</Link></span></p>
      </div>
    </div>
  )
}

export default Signup;

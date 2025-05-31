import React, { use, useContext, useState } from 'react'
import SignUpBanner from '../Components/Assets/Banner/SignUpBanner.png'
import './CSS/Login.css'
import Eye from '../Components/Assets/Icons/eye.svg'
import CloseEye from '../Components/Assets/Icons/eye-slash.svg'
import { Link } from 'react-router-dom';
import { AuthContext } from '../Context/AuthContext';
import axios from 'axios';
export const Login = () => {
  const [isCheckBox, setHandleCheckBox] = useState(false);
  const handleCheckBoxChange = () => {
    setHandleCheckBox(!isCheckBox);
  };
  const [isClose, setHandleCloseEye] = useState(true);
  const handleCloseEye = () => {
    setHandleCloseEye(!isClose);
  }
  const [phone, setPhone] = useState('');
const [password, setPassword] = useState('');
const [error, setError] = useState('');
const {login} = useContext(AuthContext);
 const handleLogin = async () => {
  setError('');
  try {
    const response = await axios.get('http://localhost:3001/users', {
      params: {
        phone: phone,
        password: password
      }
    });

    const data = response.data;

    if (data.length > 0) {
      alert('Login successfully!');
      login(data[0]); // Cập nhật AuthContext
      // window.location.reload() hoặc navigate nếu cần
    } else {
      setError('Số điện thoại hoặc mật khẩu không đúng!');
    }
  } catch (err) {
    console.error("Login error:", err);
    setError('Có lỗi xảy ra, vui lòng thử lại!');
  }
};
  const [menu, setMenu] = React.useState("home");
  return (
    <div className='SignupLogin'>
      <div className="SignUpLoginBanner">
        <img className='Banner' src={SignUpBanner} alt='banner' />
      </div>
      <div className="SignUpLoginForm LoginForm">
        <h3>Login</h3>
        <p>Phone number</p>
        <input type="tel" placeholder='Enter your phone number...' value = {phone} onChange={e => setPhone(e.target.value)} />
        <p>Password</p>
        <div className="Password">
          <input type={isClose ? 'password' : 'text'} placeholder='Enter your password...' value={password} onChange={e => setPassword(e.target.value)} />
          <img className='Eye' src={isClose ? CloseEye : Eye} onClick={handleCloseEye} alt='eye' />
        </div>
        <div className="ForgotRemember">
          <Link to="/forgotpassword" className="ForgotPassword" >Forgot Password? </Link>
          <label className="CheckboxRemember">
            <input id="rememberMe" type="checkbox" checked={isCheckBox} onChange={handleCheckBoxChange} style={{marginRight: '8px'}} /> Remember Me
          </label>
        </div>
        <button className='SignUpLoginButton' onClick={handleLogin}>Login</button>
        {error && <p style={{color: 'red'}}>{error}</p>}
        <p>Don't have an account? <span><Link to="/signup" className='Signup' style={{color: '#dc3545'}}>Sign up</Link></span></p>
      </div>
    </div>
  )
}

export default Login;
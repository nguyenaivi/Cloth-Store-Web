import React, { useContext, useState } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import './CSS/ProfileEdit.css';

const ProfileEdit = () => {
  const { user, login } = useContext(AuthContext);
  const navigate = useNavigate();

  // Khởi tạo state cho các trường thông tin
  const [firstName, setFirstName] = useState(user.name.firstname);
  const [lastName, setLastName] = useState(user.name.lastname);
  const [email, setEmail] = useState(user.email);
  const [city, setCity] = useState(user.address?.city || '');
  const [street, setStreet] = useState(user.address?.street || '');
  const [phone, setPhone] = useState(user.phone);
  const [password, setPassword] = useState(user.password || '');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  // Nếu chưa đăng nhập, chuyển hướng về login
  if (!user) {
    navigate('/login');
    return null;
  }

  const handleSave = async () => {
    setError('');
    setSuccess('');
    try {
      // Gửi PATCH lên json-server
      const res = await axios.patch(`http://localhost:3001/users/${user.id}`, {
        name: { firstname: firstName, lastname: lastName },
        email,
        address: { city, street},
        password,
        phone
      });
      // Cập nhật lại user trong context
      login(res.data);
      setSuccess('Cập nhật thành công!');
      setTimeout(() => navigate('/profile'), 1000);
    } catch (err) {
      setError('Có lỗi xảy ra, vui lòng thử lại!');
    }
  };

  return (
    <div className="ProfileEdit">
      <h2>Edit Profile</h2>
      <div className="ProfileEditForm">
        <label>First Name</label>
        <input value={firstName} onChange={e => setFirstName(e.target.value)} />

        <label>Last Name</label>
        <input value={lastName} onChange={e => setLastName(e.target.value)} />

        <label>Email</label>
        <input value={email} onChange={e => setEmail(e.target.value)} />

        <label>City</label>
        <input value={city} onChange={e => setCity(e.target.value)} />

        <label>Street</label>
        <input value={street} onChange={e => setStreet(e.target.value)} />

        <label>Password</label>
        <input value={password} onChange={e => setPassword(e.target.value)} />

        <label>Phone</label>
        <input value={phone} onChange={e => setPhone(e.target.value)} />

        <button className="ProfileEditSaveBtn" onClick={handleSave}>Save</button>
        {error && <p style={{color:'red'}}>{error}</p>}
        {success && <p style={{color:'green'}}>{success}</p>}
      </div>
    </div>
  );
};

export default ProfileEdit;
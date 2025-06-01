import React, { useContext } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from 'react-router-dom';
import './CSS/Profile.css';
import Email from '../Components/Assets/Icons/envelope-fill.svg'
const Profile = () => {
    const { user, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    // Nếu chưa đăng nhập, chuyển hướng về login
    if (!user) {
        navigate('/login');
        return null;
    }

    return (
        <div className="Profile">
            <div className='ProfileLeft' style={{ padding: '2rem' }}>
                <h3 >Profile Page</h3>
                <p className='ProfileWelcome'>Welcome, {user.name.firstname}!</p>
                <p onClick={() => navigate('/profile-edit')}>
                    <span className='ProfileNavigation'>Edit Profile</span>
                </p>
                <p onClick={() => {
                    logout();
                    navigate('/login');
                }} style={{ marginTop: '1rem' }}>
                    <span className='ProfileNavigation'>Log out</span>
                </p>
            </div>
            <div className='ProfileRight' style={{ padding: '2rem' }}>
                <h3 className='ProfileTitle'>User Information</h3>
                <p><strong>First Name:</strong> {user.name.firstname}</p>
                <p><strong>Last Name:</strong> {user.name.lastname}</p>
                <p className='ProfileRow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-envelope-fill" viewBox="0 0 16 16">
                        <path d="M.05 3.555A2 2 0 0 1 2 2h12a2 2 0 0 1 1.95 1.555L8 8.414zM0 4.697v7.104l5.803-3.558zM6.761 8.83l-6.57 4.027A2 2 0 0 0 2 14h12a2 2 0 0 0 1.808-1.144l-6.57-4.027L8 9.586zm3.436-.586L16 11.801V4.697z" />
                    </svg>
                    <strong>Email:</strong> {user.email}
                </p>
                <p className='ProfileRow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-house-door-fill" viewBox="0 0 16 16">
                        <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
                    </svg>
                    <strong>Address:</strong> {user.address.city}, {user.address.street}, {user.address.number}
                </p>
                <p className='ProfileRow'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-phone-fill" viewBox="0 0 16 16">
                        <path d="M3 2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zm6 11a1 1 0 1 0-2 0 1 1 0 0 0 2 0" />
                    </svg>
                    <strong>Phone:</strong> {user.phone}
                </p>
            </div>
        </div>


    );
};

export default Profile;

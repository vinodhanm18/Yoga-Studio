import React from 'react';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/pro.css'; 
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';

function ProfilePage() {
  return (
    <div className='oh'>
        <Header></Header>
    <div className="profile-container">
      <div className="profile-info">
        <h1>Profile Page</h1>
        <div className="profile-details">
          <div className="profile-image">
            <img src="/src/assets/images/pro.gif" alt="Profile" />
          </div>
          <div className="profile-text">
            <p><strong>Name:</strong>Shanthi Yogi</p>
            <p><strong>Email:</strong> syogi26@example.com</p>
            <p><strong>Phone:</strong> +918870051808</p>
            <p><strong>Address:</strong> 1826 Yoga Street Rs puram , Coimabtore</p>
            {/* Add more profile details as needed */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfilePage;

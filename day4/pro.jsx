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
            <p><strong>Name:</strong> John Doe</p>
            <p><strong>Email:</strong> john.doe@example.com</p>
            <p><strong>Phone:</strong> +1234567890</p>
            <p><strong>Address:</strong> 123 Yoga Street, City, Country</p>
            {/* Add more profile details as needed */}
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default ProfilePage;

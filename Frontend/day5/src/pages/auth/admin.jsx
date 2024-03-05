import React, { useState } from 'react';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/admin.css'; 

const UserAdminSwitchPage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  const handleSwitch = () => {
    setIsAdmin(!isAdmin);
  };

  return (
    <div className="bgimage">
    <div className="switch-container">
      
      <div className="switch">
        <input
          type="checkbox"
          id="admin-switch"
          checked={isAdmin}
          onChange={handleSwitch}
        />
        <label htmlFor="admin-switch">
        <button type="submit">Admin</button>
          <br></br>
          <br></br>
          <div className='user'>
        <button type="submit">User</button></div>
        </label>
      </div>
    </div>
    </div>
  );
};

export default UserAdminSwitchPage;

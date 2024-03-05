import React, { useState } from 'react';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/login.css'; 
import { Link } from 'react-router-dom';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('');


  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Username:", username);
    console.log("Password:", password);
    setUsername('');
    setPassword('');
  };

  return (
    <div className='fulll'>
    <div className="login-container"><center>
    <div>
          
          <select
            className='role'
            id="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="user">User</option>
            <option value="admin">Admin</option>
          </select><br/><br/>
        </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={handleUsernameChange}
            required
          />
        </div>
        <div>
          <label>Password </label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <br></br>
        <center>
        <button type="submit"><Link to='/home'>Login</Link></button></center>
        <p>Already Have an Account? <Link to='/reg'>Register</Link></p>
      </form>
      </center>
    </div>
    </div>
  );
};

export default LoginPage;

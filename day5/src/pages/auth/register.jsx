import React, { useState } from 'react';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/register.css'; 
import { Link } from 'react-router-dom';

const RegistrationPage = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleFullNameChange = (e) => {
    setFullName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Full Name:", fullName);
    console.log("Email:", email);
    console.log("Password:", password);
    setFullName('');
    setEmail('');
    setPassword('');
  };

  return (
    <div className='reg'>
    <div className="registration-container">
      <form className="registration-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <center><h2>Register</h2></center>
          <br></br>
          <label>Full Name:</label>
          <input
            type="text"
            value={fullName}
            onChange={handleFullNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={handleEmailChange}
            required
          />
        </div>
        <div className="form-group">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={handlePasswordChange}
            required
          />
        </div>
        <button type="submit"><Link to='/home'>Register</Link></button>
      </form>
    </div>
    </div>
  );
};

export default RegistrationPage;

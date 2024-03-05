import React, { useState } from 'react';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/application.css';
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';
import { Link } from 'react-router-dom';

const UserApplicationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const [role, setRole] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log(formData);
    
    setFormData({
      name: '',
      email: '',
      phone: '',
      address: '',
    });

    setRole(''); // Reset role after form submission
  };

  return (
    <div className='nil'>
        <Header></Header>
    <div className='app'>
    <div className="user-application-container">
        
      <h2>Apply Now</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <br></br>
        <div className="form-group">
          <label>Phone:</label>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </div><br></br>
        <div className="form-group">
          <label>Address:</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
          />
        </div><br></br>
        <div className="form-group">
            
          <label htmlFor='role'>Courses:</label>
          <select
            className='input-field'
            id="role"
            required
            value={role}
            onChange={(e) => setRole(e.target.value)} >
            <option value="">Select Course</option>
            <option value="user">Hatha Yoga</option>
            <option value="admin">Vinyasa Flow</option>
            <option value="user">Ashtanga yoga</option>
            <option value="admin">Yin yoga</option>
            <option value="user">Restorative yoga</option>
            <option value="admin">Prenatal yoga</option>
            <option value="user">Anusara yoga</option>
            <option value="admin">Jivamukti yoga</option>
          </select>
        </div>
        <button type="submit"><Link to='/thank'>Submit Application</Link></button>
      </form>
    </div>
    </div>
    </div>
  );
};

export default UserApplicationPage;

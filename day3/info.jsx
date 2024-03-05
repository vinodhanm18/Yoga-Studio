import React from 'react';
import "/Users/vinodhanm/React/vinodhan-react/src/assets/css/info.css";

const UserInfoForm = ({ onChange }) => {
  return (
    <div className="user-info-form"><center>
      <h3>Enter Your Information:</h3>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" onChange={onChange} />
        </div>
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" onChange={onChange} />
        </div>
      </form>
      </center>
    </div>
  );
};

export default UserInfoForm;

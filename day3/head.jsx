import React,{useState} from 'react';
import { Link } from 'react-router-dom'; 
import "/Users/vinodhanm/React/vinodhan-react/src/assets/css/head.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <header className="header">
      <div className="logo">
        <Link to="/">equinox.</Link>
      </div>
      <nav className="navigation">
        <ul>
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/classes">Classes</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
      <div className="profile-icon" onClick={toggleDropdown}>
        <FontAwesomeIcon icon={faUser} /> {/* This is the profile icon */}
        {isDropdownOpen && (
          <div className="dropdown-content">
            {/* Dropdown content goes here */}
            <ul>
              <li><Link to="/dashboard">Dashboard</Link></li>
              <li><Link to="/pro">Profile</Link></li>
              <li><Link to="/login">Logout</Link></li>
              {/* Add more links as needed */}
            </ul>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;

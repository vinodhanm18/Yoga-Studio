import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/contact.css'; 
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';

const ContactPage = () => {
  return (
    <div className='go'>
    <Header></Header>
    <div className="contact-card">
      <div className="card-content">
        <h2>Contact Us</h2>
        <div className="contact-info">
          <div className="info-group">
            <span className="icon">📍</span>
            <span>1826 Yoga Street Rs puram , Coimbatore</span>
          </div>
          <div className="info-group">
            <span className="icon">☎️</span>
            <span>0424-2230104</span>
          </div>
          <div className="info-group">
            <span className="icon">✉️</span>
            <span>info@equinox.com</span>
          </div>
        </div>
        <div className="social-links">
          <a href="https://www.facebook.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faFacebookF} />
          
          </a>
          <a href="https://www.twitter.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTwitter} />
            
          </a>
          <a href="https://www.instagram.com/example" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
           
          </a>
        </div>
      </div>
    </div>
    </div>
  );
};

export default ContactPage;

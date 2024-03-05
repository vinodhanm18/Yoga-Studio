import React from 'react';
import { Link } from 'react-router-dom';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/thank.css';

function ThankYouPage() {
  return (
    <div className='hell'>
    <div className="thank-you-page">
      <div className='con'>
      <h1>Thank You for Your Interest!</h1>
      <p>We appreciate your interest in our yoga studio. Our team will get back to you shortly.</p>
      <p>In the meantime, feel free to explore more about our studio:</p>
      <ul>
        <li><Link to="/classes">View Our Classes</Link></li>
        <li><Link to="/about">Learn About Our Studio</Link></li>
        <li><Link to="/contact">Contact Us</Link></li>
      </ul>
      </div>
    </div>
    </div>
  );
}

export default ThankYouPage;

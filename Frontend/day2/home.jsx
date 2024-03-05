import React from 'react';
import { Link } from 'react-router-dom'; 
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/home.css';
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';

function HomePage() {
  return (
    <div className='full'>
      <Header></Header>
    <div className="home-container">
      <div className="card">
        <header>
          <img src='/src/assets/images/lo.jpg' style={{width:"90%"}}></img>
          <p>Transform your body, mind, and spirit with our holistic yoga classes.</p>
        </header>
      </div>
      <div className="card">
        <section>
          <h2>About Our Program</h2>
          <p>Our yoga program offers a variety of classes suitable for all levels, from beginners to advanced practitioners. Whether you're looking to improve flexibility, reduce stress, or enhance overall well-being, we have something for everyone.</p>
          <p>Join us and embark on a journey to wellness and self-discovery.</p>
        </section>
      </div>
      <div className="card">
        <section>
          <h2>Admission Information</h2>
          <p>Ready to start your yoga journey with us?</p>
          <Link to="/apply" className="admission-link">Apply Now</Link>
        </section>
      </div>
      <footer className="card">
        <p>Contact us for more information: info@equinox.com</p>
      </footer>
    </div>
    </div>
  );
}

export default HomePage;

import React from 'react';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/about.css'; 
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';

const AboutPage = () => {
  return (
    <div className='head'>
      <Header></Header>
      <div className="about-page">
        <div className="card">
          <div className="card-content">
            <h1>About equinox.</h1>
            <img src='/src/assets/images/book.gif' style={{ width: "80%" }} alt="Yoga Studio"></img>
            <p>Welcome to our yoga studio! We provide a peaceful sanctuary for yogis of all levels to practice and grow.</p>
            <p>Our studio offers a variety of classes including Hatha, Vinyasa, Ashtanga, and more. Whether you're a beginner or an experienced practitioner, you'll find a class that suits your needs.</p>
            <p>Join us in our mission to promote health, wellness, and mindfulness through the practice of yoga.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;

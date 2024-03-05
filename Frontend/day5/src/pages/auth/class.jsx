import React from 'react';
import classImage1 from '/src/assets/images/women.gif'; 
import classImage2 from '/src/assets/images/blue.gif'; 
import classImage3 from '/src/assets/images/load.gif'; 
import classImage4 from '/src/assets/images/nose.webp'; 
import classImage5 from '/src/assets/images/yoga.gif'; 
import classImage6 from '/src/assets/images/zen.gif'; 
import classImage7 from '/src/assets/images/day.gif'; 
import classImage8 from '/src/assets/images/girl.gif';
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';
import { Link } from 'react-router-dom';

import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/class.css';

function ClassesPage() {
  const yogaClasses = [
    {
      id: 1,
      title: "Hatha Yoga",
      instructor: "John",
      schedule: "Mondays & Wednesdays, 9:00 AM - 10:30 AM",
      description: "Hatha yoga is a classical style of yoga that focuses on breath control and posture alignment. Suitable for all levels.",
      image: classImage1 
    },
    {
      id: 2,
      title: "Vinyasa Flow",
      instructor: "Kumar",
      schedule: "Tuesdays & Thursdays, 6:00 PM - 7:30 PM",
      description: "Vinyasa flow yoga is a dynamic practice that synchronizes movement with breath. Energize your body and mind in this class.",
      image: classImage2 
    },
    {
        id: 2,
        title: "Ashtanga yoga",
        instructor: "Smith",
        schedule: "Friday & Saturday, 6:00 PM - 7:30 PM",
        description: "In Sanskrit, ashtanga is translated as Eight Limb path. In Mysore, India, people gather to practice this form of yoga together at their own pace—if you see Mysore-led ashtanga.",
        image: classImage3
      },
      {
        id: 2,
        title: "Yin yoga",
        instructor: "Krish",
        schedule: "Monday & Thursdays, 6:00 PM - 7:30 PM",
        description: "Yin yoga is a slow-paced style of yoga with seated postures that are held for longer periods of time. Yin can also be a meditative yoga practice that helps you find inner peace.",
        image: classImage4
      },
      {
        id: 2,
        title: "Restorative yoga",
        instructor: "Luna",
        schedule: "Monday & Thursdays, 6:00 PM - 7:30 PM",
        description: "VRestorative yoga focuses on winding down after a long day and relaxing your mind. At its core, this style focuses on body relaxation. Restorative yoga also helps to cleanse and free your mind.",
        image: classImage5
      },{
        id: 2,
        title: "Prenatal yoga",
        instructor: "Shanthi",
        schedule: "Tuesdays & Saturdays, 6:00 PM - 7:30 PM",
        description: "Prenatal yoga is carefully adapted for moms-to-be, and is tailored to women in all trimesters. Many have said that prenatal is one of the best types of exercise for expectant moms because of the pelvic floor work, focus on breathing, and bonding with the growing baby. Prenatal yoga also helps mothers prepare for labor and delivery.",
        image: classImage6
      },{
        id: 2,
        title: "Anusara yoga",
        instructor: "Rishi",
        schedule: "Tuesdays & Saturdays, 6:00 PM - 7:30 PM",
        description: "Anusara is a modern-day version of hatha yoga, most similar to vinyasa in that it focuses on alignment, but with more emphasis on the mind-body-heart connection. It was founded by John Friend who created a unique system called the Universal Principals of Alignment. He resigned in 2012 after accusations of sexual misconduct and financial mismanagement. Friend has since partnered with Desi and Micah Springer to teach the Bowspring method.",
        image: classImage7
      },{
        id: 2,
        title: "Jivamukti yoga",
        instructor: "Yogi",
        schedule: "Tuesdays & Saturdays, 6:00 PM - 7:30 PM",
        description: "Jivamukti was founded in 1984 by Sharon Ganon and David Life. Jivamukti is mainly vinyasa-flow-style classes infused with Hindu spiritual teachings. At its core, this style emphasizes connection to Earth as a living being, so most Jivamukti devotees follow a vegetarian philosophy.",
        image: classImage8
      },
    
  ];
  return (
    <div className='whole'>
    <div className="classes-page">
      <Header></Header>
      <h1>Courses</h1>
      <div className="class-list">
        {yogaClasses.map(yogaClass => (
          <div key={yogaClass.id} className="class-card">
            <img src={yogaClass.image} alt={yogaClass.title} style={{ width: "100%" }} /> 
            <h2>{yogaClass.title}</h2>
            <p><strong>Instructor:</strong> {yogaClass.instructor}</p>
            <p><strong>Schedule:</strong> {yogaClass.schedule}</p> 
            
            <p>{yogaClass.description}</p><br></br>
            <br></br>
            <button><Link to='/book'>Book Now</Link></button>
          </div>
          
        ))}
      </div>
    </div>
    </div>
  );
}

export default ClassesPage;
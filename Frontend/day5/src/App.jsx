import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from '/src/pages/auth/home.jsx'; 
import AboutPage from '/src/pages/auth/about.jsx';
import ContactPage from '/src/pages/auth/contact.jsx';
import ClassesPage from '/src/pages/auth/class.jsx';
import DashboardPage from '/src/pages/auth/dash.jsx';
import RegistrationPage from '/src/pages/auth/application.jsx';
import SlotBookingPage from '/src/pages/auth/book.jsx';
import Application from '/src/pages/auth/application.jsx'
import Login from '/src/pages/auth/login.jsx'
import Register from '/src/pages/auth/register.jsx'
import Thank from '/src/pages/auth/thank.jsx'
import Profile from '/src/pages/auth/pro.jsx'


const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<HomePage/>} />
        <Route path='/home' element={<HomePage/>}/>
        <Route path="/about" element={<AboutPage/>} />
        <Route path="/contact" element={<ContactPage/>} />
        <Route path="/classes" element={<ClassesPage/>} />
        <Route path="/dashboard" element={<DashboardPage/>} />
        <Route path="/register" element={<RegistrationPage/>} />
        <Route path="/book" element={<SlotBookingPage/>} />
        <Route path="/apply" element={<Application/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/reg" element={<Register/>}/>
        <Route path="/thank" element={<Thank/>}/>
        <Route path="/pro" element={<Profile/>}/>
      </Routes>
    </Router>
  );
};

export default App;

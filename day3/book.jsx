
import React, { useState } from 'react';
import SlotSelector from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/select.jsx';
import UserInfoForm from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/info.jsx';
import ConfirmationModal from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/model.jsx';
import '/Users/vinodhanm/React/vinodhan-react/src/assets/css/book.css';
import Header from '/Users/vinodhanm/React/vinodhan-react/src/pages/auth/head.jsx';


const SlotBookingPage = () => {
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [userInfo, setUserInfo] = useState({});
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleSlotSelect = (slot) => {
    setSelectedSlot(slot);
  };

  const handleUserInfoChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  };

  const handleConfirmBooking = () => {
    setShowConfirmation(true);
  };

  const handleConfirmModalClose = () => {
    setShowConfirmation(false);
  };

  const handleBookingSubmit = () => {
    // Submit booking details to backend API
    console.log('Booking submitted:', { slot: selectedSlot, userInfo });
    // Reset state after submission
    setSelectedSlot(null);
    setUserInfo({});
    setShowConfirmation(false);
  };

  return (
    <div><Header></Header>
    <div className='background-image'>
      
        <div>
    <div className='book'><center>
      <h2>Book Your Slot</h2>
      
      <SlotSelector onSelect={handleSlotSelect} />
      {selectedSlot && (
        <>
        
          <UserInfoForm onChange={handleUserInfoChange} />
          <button onClick={handleConfirmBooking} className='btn'>Confirm Booking</button>
        </>
      )}
      
      <ConfirmationModal
        show={showConfirmation}
        onClose={handleConfirmModalClose}
        onConfirm={handleBookingSubmit}
        slot={selectedSlot}
        userInfo={userInfo}
      />
      </center>
    </div>
    </div>
    </div>
    </div>
    
  );
};

export default SlotBookingPage;

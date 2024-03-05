import React from 'react';
import "/Users/vinodhanm/React/vinodhan-react/src/assets/css/model.css";

const ConfirmationModal = ({ show, onClose, onConfirm, slot, userInfo }) => {
  if (!show) {
    return null;
  }

  return (
    <div className="confirmation-modal">
      <div className="modal-content">
        <h3>Confirm Booking</h3>
        <p>An appointment with yourself is the greatest gift you can give yourself !</p>
        <div className='hi'>
        <p><strong>Slot </strong> {slot}</p>
        <p><strong>Name </strong> {userInfo.name}</p>
        <p><strong>Email </strong> {userInfo.email}</p>
        <p><strong>Phone </strong> {userInfo.phone}</p>
        </div>
        <div className="button-group">
          <button onClick={onClose}>Cancel</button>
          <button onClick={onConfirm}>Confirm</button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationModal;

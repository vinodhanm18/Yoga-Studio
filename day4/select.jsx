import React from 'react';
import "/Users/vinodhanm/React/vinodhan-react/src/assets/css/select.css";

const SlotSelector = ({ onSelect }) => {
  // Dummy data for available slots
  const availableSlots = ['9:00 AM', '11:00 AM', '2:00 PM', '4:00 PM'];

  return (
    <div className="slot-selector"><center>
      <h3>Select a Slot:</h3>
      <div className="slot-list"><center>
        {availableSlots.map(slot => (
          <button key={slot} onClick={() => onSelect(slot)}>{slot}</button>
        ))}
        </center>
      </div>
      </center>
    </div>
  );
};

export default SlotSelector;

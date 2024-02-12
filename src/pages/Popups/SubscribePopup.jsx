// SubscribePopup.jsx
import React from 'react';
import ReactDOM from 'react-dom';
import SubscribePopupForm from './Subscribeform';

const SubscribePopup = ({ onClose }) => {
  return ReactDOM.createPortal(
    <div className="popup-overlay">
      <div className="popup-container">
        <SubscribePopupForm onClose={onClose} />
      </div>
    </div>,
    document.getElementById('popup-root')
  );
};

export default SubscribePopup;

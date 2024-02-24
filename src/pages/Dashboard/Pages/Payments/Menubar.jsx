// Sidebar.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Menubar.scss';

const Menubar = () => {
  const [activeLink, setActiveLink] = useState(null);

  const handleLinkClick = (linkId) => {
    // Remove active class from previously active link
    if (activeLink) {
      activeLink.classList.remove('active');
    }

    // Add active class to the clicked link
    const link = document.getElementById(linkId);
    link.classList.add('active');
    setActiveLink(link);
  };

  return (
    <div className="menubar-div2">
      <ul>
        <li>
          <Link
            id='Details'
            to="/dashboard/payment/"
            onClick={() => handleLinkClick('Details')}
            className={activeLink === 'Details' ? 'active' : ''}
          >
           Payment Details
          </Link>
        </li>
        <li>
          <Link
            id='History'
            to="/dashboard/payment/paymenthistory"
            onClick={() => handleLinkClick('History')}
            className={activeLink === 'History' ? 'active' : ''}
          >
            Payment History
          </Link>
        </li>
       
      </ul>
    </div>
  );
};

export default Menubar;

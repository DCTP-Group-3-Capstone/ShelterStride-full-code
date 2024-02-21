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
    <div className="menubar-div">
      <ul>
        <li>
          <Link
            id='profile'
            to="/dashboard/settings/"
            onClick={() => handleLinkClick('profile')}
            className={activeLink === 'profile' ? 'active' : ''}
          >
            Profile
          </Link>
        </li>
        <li>
          <Link
            id='rental'
            to="/dashboard/settings/rental"
            onClick={() => handleLinkClick('rental')}
            className={activeLink === 'rental' ? 'active' : ''}
          >
            Rental History
          </Link>
        </li>
        <li>
          <Link
            id='employment'
            to="/dashboard/settings/employmentDetails"
            onClick={() => handleLinkClick('employment')}
            className={activeLink === 'employment' ? 'active' : ''}
          >
            Employment Details
          </Link>
        </li>
        <li>
          <Link
            id='guarantor'
            to="/dashboard/settings/guarantor"
            onClick={() => handleLinkClick('guarantor')}
            className={activeLink === 'guarantor' ? 'active' : ''}
          >
            Guarantor
          </Link>
        </li>
        <li>
          <Link
            id='documents'
            to="/dashboard/settings/document"
            onClick={() => handleLinkClick('documents')}
            className={activeLink === 'documents' ? 'active' : ''}
          >
            Documents
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Menubar;

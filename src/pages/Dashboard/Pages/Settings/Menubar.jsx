// Sidebar.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import './Menubar.scss';

const Menubar = () => {
  
  return (
     <div className="menubar-div">
    <ul>
      <li><Link to="/dashboard/settings/">Profile</Link></li>
      <li><Link to="/dashboard/settings/rental">Rental History</Link></li>
      <li><Link to="/dashboard/settings/employmentDetails">Employment Details</Link></li>
      <li><Link to="/dashboard/settings/guarantor">Guarantor</Link></li>
      <li><Link to="/dashboard/settings/document">Documents</Link></li>

    </ul>
  </div>
  );
};

export default Menubar;

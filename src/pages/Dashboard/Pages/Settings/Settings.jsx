// Dashboard.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Menubar from "./Menubar";
import "./Settings.scss";
import Profile from './Pages/Profile';
import Rental from './Pages/Rental';
import EmploymentDetails from './Pages/EmploymentDetails';
import Guarantor from './Pages/Guarantor';
import Document from './Pages/Document';
// Import other page components

const Settings = () => {
  return (
    <section className="settings-div">

    <h1>Account Settings</h1>

    <div className="menu-div">

      <div >
        <Menubar />
      </div>

      <div className="main-content">
        <Routes>
        <Route index element={<Profile />} /> 


          <Route path="/profile" element={<Profile />} />
          <Route path="/rental" element={<Rental />} />
          <Route path="/employmentDetails" element={<EmploymentDetails />} />
          <Route path="/guarantor" element={<Guarantor />} />
          <Route path="/document" element={<Document />} />
          {/* Add routes for other pages */}
        </Routes>
      </div>
      </div>
    </section>
  );
};

export default Settings;

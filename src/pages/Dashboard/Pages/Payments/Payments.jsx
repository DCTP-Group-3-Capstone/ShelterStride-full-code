// Dashboard.jsx
import React from "react";
import { Route, Routes } from "react-router-dom";
import Menubar from "./Menubar";
import "./Payments.scss";
import PaymentDetails from "./Pages/PaymentDetails";
import PaymentHistory from "./Pages/PaymentHistory";
// Import other page components

const Payments = () => {
  return (
    <section className="settings-div">

    <h1>Payment</h1>
    <h5>Manage payments on ShelterStride</h5>

    <div className="menu-div">

      <div >
        <Menubar />
      </div>

      <div className="payment-content">
        <Routes>
        <Route index element={<PaymentDetails />} /> 


          <Route path="/paymentdetails" element={<PaymentDetails />} />
          <Route path="/paymenthistory" element={<PaymentHistory />} />
          
          {/* Add routes for other pages */}
        </Routes>
      </div>
      </div>
    </section>
  );
};

export default Payments;

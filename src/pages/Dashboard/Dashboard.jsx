// DashboardLayout.jsx
import React from 'react';
import { Routes, Route } from "react-router-dom";
import SideNav from './components/SideNav';
import '../Dashboard/Dashboard.scss';
import HomeBuy from './Pages/BuyHome/HomeBuy';
import RentHome from './Pages/RentHome/RentHome'
import DashboardHome from './Pages/DashboardHome/DashboardHome';
import Maintenance from './Pages/Maintenance/Maintenance';
import Payments from './Pages/Payments/Payments';
import Settings from './Pages/Settings/Settings';


const Dashboard =()=> {
  
  return (
    <div className="dashboard-layout">
      <SideNav />
    
      <div className="content">
        {/* <Outlet /> */}

        <Routes>
          <Route index element={<DashboardHome />} /> 


          <Route path='/dashboard' element={<DashboardHome />} />   
          <Route path='/rent' element={<RentHome />}/>
          <Route path='/buy' element={<HomeBuy />} />
          <Route path='/maintenance' element={<Maintenance />} />
          <Route path='/payment' element={<Payments />} />
          <Route path='/settings/*' element={<Settings />} />
          <Route path='/payment/*' element={<Payments />} />
         

        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;

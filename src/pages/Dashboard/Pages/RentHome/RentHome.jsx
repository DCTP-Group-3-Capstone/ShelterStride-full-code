import React from "react";
import reddot from '../../../../assets/icon/reddot.svg'
import "../RentHome/RentHome.scss";
import { useNavigate } from 'react-router-dom';


const RentHome = () => {
  const navigate = useNavigate();

  const handleExplore = () => {
    // Navigate to the new page within the page
    navigate('/HomeRent');
  };




  return (
    <section className="Rent-section">
      <div>
        <h1>Rent A Home</h1>
        <p>Let’s help you own a home</p>
      </div>
      <div>
        <ul className="list-header">
          <li>Space name</li>
          <li>Plan</li>
          <li>Pre cost</li>
          <li>Subscription Date</li>
          <li>Status</li>
        </ul>
      </div>

      <div className="list">
      <ul className="list-items">
          <li>Unit 1 self con</li>
          <li>Monthly</li>
          <li>N 30,000</li>
          <li>Feb 03, 2024</li>
          <li> <div className="item-border">
          <img src={reddot} alt="" /> Pending</div></li>
        </ul>

        <ul className="list-items2">
          <li>Unit 1 self con</li>
          <li>Monthly</li>
          <li>N 30,000</li>
          <li>Feb 03, 2024</li>
          <li> 
          <div className="item-border">
          <img src={reddot} alt="" /> Unavailable
          </div></li>
        </ul>
      </div>
      <div className="but-div"><button onClick={handleExplore}
      className="button-explore">
        Explore More
      </button></div>
    </section>
  );
};

export default RentHome;

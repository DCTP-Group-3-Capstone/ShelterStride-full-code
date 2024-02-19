import React, { useState, useEffect } from 'react';
import bell from "../../../../assets/icon/notify_white.svg";
import mail from "../../../../assets/icon/purple_mail.svg";
import phone from "../../../../assets/icon/green_phone.svg";
import circle from "../../../../assets/icon/speech-bubble.svg";
import dashboard from "../../../../assets/icon/Home.svg";
import "../DashboardHome/DashboardHome.scss";
import { isLoggedIn, logout } from '../../../../auth';


const ToggleButton = ({ initialValue = false, onChange }) => {
  const [isActive, setIsActive] = useState(initialValue);

  const handleClick = () => {
    const newValue = !isActive;
    setIsActive(newValue);
    if (onChange) {
      onChange(newValue);
    }
  };

  return (
    <button className={`toggle-button ${isActive ? 'active' : ''}`} onClick={handleClick}>
      <span className="toggle-circle"></span>
    </button>
  );
};


function DashboardHome() {

  const [userName, setUserName] = useState('');

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        // Check if the user is logged in
        if (isLoggedIn()) {
          const token = localStorage.getItem('secret_token');
          const response = await fetch('https://shelterstride.onrender.com/api/v1/users', {
            method: 'GET',
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });

          if (response.ok) {
            const data = await response.json();
            setUserName(data.firstname);
          } else {
            console.error('Failed to fetch user information');
          }
        } else {
          // Redirect to login page or handle unauthorized access
          console.log('User is not logged in');
        }
      } catch (error) {
        console.error('Error fetching user information:', error);
      }
    };

    fetchUserInfo();
  }, []);


  return (
    <div className="dashboard">
      <div className="userName">
        <h1 className='header'>Good day, {userName}</h1>
        <p className='head'>Welcome to your Shelterstride dashboard</p>
      </div>
<div className="dash">

      <section className="overview">
        <div>
          <p>Here is a quick overview of what’s happening.</p>
        </div>
        <div className="subscription">
          <div className="whiteCard">
            <div className="sub-status">
              <div>
                <img src={dashboard} alt="dashboard icon" />
              </div>
              <div className="sub-stats">
                <h3>Subscription Status</h3>
                <p>Active subscription</p>
                <h1>0</h1>
                <p>View all</p>
              </div>
            </div>
           
          </div>
        </div>
<div className="prop-flex">
<div className="prop">
              <div className="sub-status">
                <div className="sub-stats">
                  <h3>Property Management</h3>
                  <p>Property Purchased</p>
                  <h1>0</h1>
                  <p>View all</p>
                </div>
              </div>
            </div>

            <div className="prop">
              <div className="sub-status">
                <div className="sub-stats">
                  <h3>Maintenance Request</h3>
                  <p>Active Request</p>
                  <h1>0</h1>
                  <p>View all</p>
                </div>
              </div>
            </div>
</div>
    
      </section>

<div className='Notifications'>

<section>
<div>
  Notifications
</div>
<div className="unread">
<div className="imggg">
  <img src={bell} alt="" />
  <p>Unread</p>
  <ToggleButton />
</div>

<hr />

<img className='cir' src={circle} alt="" />
<p className='pp'>No Notices yet </p>
<p className='ppp'>View all</p>
</div>
      </section>


      <section className='support'>
<div>
Need help? Check our support team
</div>
<div className="unreadd">
<div className="i-contact">
  <img src={phone} alt="" />
  <div>
  <h3> Contact support</h3>
<p>Reach out to our team</p>
  </div>

</div>
<div className="i-mail">
  <img src={mail} alt="" />
  <div>
  <h3>Mail Shelterstride</h3>
<p>Submit a ticket for assistance</p>
  </div>

</div>
</div>
      </section>

  
</div>
   
      
        
</div>


    </div>
  );
}

export default DashboardHome;

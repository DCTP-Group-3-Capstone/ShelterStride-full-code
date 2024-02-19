import React from 'react'
import housesearching from "../../../../assets/images/housesearching.svg";
import '../Maintenance/Maintenance.scss'


const Maintenance = () => {
  return (
    <section className="maintenance-section">
    <div>
      <h1>Maintenance Request</h1>
      <p>Keep track of your maintenance requests with Shelterstride</p>
    </div>
    <div>
    <div>
      <ul className="list-header">
        <li>Reason</li>
        <li>Date/Time Created</li>
        <li>Status</li>
        <li>Actions</li>
      </ul>
    </div>

    <div className='oops'>
    <h2>Oop! there’s nothing here</h2>
       <div className="home-request">
    <div>
    <img src={housesearching} alt="" />
    </div>  
<h5>There are no maintenance request yet on this account</h5>
        <button>Get Started</button>
       </div>
    </div>
    </div>
  
</section>
  )
}

export default Maintenance
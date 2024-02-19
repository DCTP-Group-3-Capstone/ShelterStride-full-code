import React, { useState } from "react";
import housesearching from "../../../../assets/images/house-searching.svg";
import "../RentHome/HomeRent.scss";


function HomeRent() {
 

  return (
    <>
      <div className="HomeRent-page">
        <h2>Your rent subscriptions will appear here</h2>
        <img src="{housesearching}" alt="" />
        <h2>
          Step into a world where renting a home goes beyond four walls. Get
          started with Shelterstride buy a home plan.
        </h2>

        <button>Get Started</button>
      </div>
    </>
  );
}

export default HomeRent;

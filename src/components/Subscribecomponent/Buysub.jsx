import React, { useState } from "react";
import "../Subscribecomponent/Buysub.scss";

const Buysub = () => {
  const buyData = [
    {
      id: 1,
      image: "/src/assets/images/ImageBuy1.svg",
      pricing: "135,000/month",
      cancelled: "#500,000/month",
      address: "Babola close, ota",
      description: "1 plot of land ota ",
    },
    {
      id: 2,
      image: "/src/assets/images/ImageBuy2.svg",
      pricing: "300,000/month",
      cancelled: "#800,000/month",
      address: "Akinwumi str off Babola close",
      description: "2 plots of land ota ",
    },
    {
      id: 3,
      image: "/src/assets/images/ImageBuy3.svg",
      pricing: "500,000/month",
      cancelled: "#1,500,000/month",
      address: "Akin str off Babola close",
      description: "3 plots of land ota ",
    },
  ];
  const [buyers, setBuyers] = useState(buyData);

  const displayBuyers = buyers.map((buy) => {
    return (
      <div key={buy.id} className="single-grid">
        <img src={buy.image} />
        <div className="flex">
          <h3>{buy.pricing}</h3>
          <p>{buy.cancelled}</p>
        </div>
        <p>{buy.address}</p>
        <p>{buy.description}</p>
      </div>
    );
  });
  return <div className="grid-container">{displayBuyers}</div>;
};

export default Buysub;

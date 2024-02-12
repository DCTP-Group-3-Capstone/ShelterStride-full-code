import React, { useState } from "react";
import "./Rentsub.scss";

const RentSub = () => {
  const Data = [
    {
      id: 1,
      image: "/src/assets/images/RentContainer1.svg",
      pricing: "30,000/month",
      cancelled: "#50,000/month",
      address: "Akinwumi str off Babola close",
      description: "1 Bed 1 Bath Iyana-Ipaja ",
    },
    {
      id: 2,
      image: "/src/assets/images/RentContainer2.svg",
      pricing: "30,000/month",
      cancelled: "#50,000/month",
      address: "Akinwumi str off Babola close",
      description: "1 Bed 1 Bath Iyana-Ipaja ",
    },
    {
      id: 3,
      image: "/src/assets/images/RentContainer3.svg",
      pricing: "30,000/month",
      cancelled: "#50,000/month",
      address: "Akinwumi str off Babola close",
      description: "1 Bed 1 Bath Iyana-Ipaja ",
    },
  ];
  const [users, setUsers] = useState(Data);

  const displayUsers = users.map((user) => {
    return (
      <div key={user.id} className="single-grid">
        <img src={user.image} />
        <div className="flex">
          <h3>{user.pricing}</h3>
          <p>{user.cancelled}</p>
        </div>
        <p>{user.address}</p>
        <p>{user.description}</p>
      </div>
    );
  });
  return <div className="grid-container">{displayUsers}</div>;
};

export default RentSub;
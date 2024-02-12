import React, { createContext, useState, useContext } from "react";

const DonateContext = createContext();

export const DonateProvider = ({ children }) => {
  const [selectedAmount, setSelectedAmount] = useState("");

  return (
    <DonateContext.Provider value={{ selectedAmount, setSelectedAmount }}>
      {children}
    </DonateContext.Provider>
  );
};

export const useDonateContext = () => useContext(DonateContext);

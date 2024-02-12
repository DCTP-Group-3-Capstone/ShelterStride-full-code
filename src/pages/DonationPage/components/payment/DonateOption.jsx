import { useState } from "react";
import { DonateProvider } from "./DonateContext";
import DonationCard from "../paymentCards/DonationCard";
import PaymentDetails from "../paymentCards/PaymentDetails";

function DonateOption() {
  const [currentCard, setCurrentCard] = useState("DonationCard"); // Initial card to display

  // Function to toggle between different cards
  const toggleCard = () => {
    setCurrentCard(
      currentCard === "DonationCard" ? "PaymentDetails" : "DonationCard"
    );
  };

  return (
    <div className="paymentCardContainer">
      <div className="paymentCardIndicator">
        <p style={{ fontWeight: currentCard === "DonationCard" ? 600 : 400 }}>
          Donation
        </p>
        <p style={{ fontWeight: currentCard === "PaymentDetails" ? 600 : 400 }}>
          Payment details
        </p>
      </div>
      <DonateProvider>
        {currentCard === "DonationCard" ? (
          <DonationCard toggleCard={toggleCard} />
        ) : (
          <PaymentDetails toggleCard={toggleCard} />
        )}
      </DonateProvider>
    </div>
  );
}

export default DonateOption;

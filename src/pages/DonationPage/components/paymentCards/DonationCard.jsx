import { useDonateContext } from "../payment/DonateContext";
import btnIcon from "../../../../assets/icon/whiteRight arrow.svg";
function DonationCard({ toggleCard }) {
  const { setSelectedAmount } = useDonateContext();
  const handleButtonClick = (amount) => {
    setSelectedAmount(amount);
  };
  return (
    <div className="donationCard">
      <div className="giveButtons">
        <button>Give Monthly</button>
        <button>Give One Time</button>
      </div>
      <div className="chooseText">
        <p>Choose an amount to donate today</p>
      </div>
      <div className="paymentAmount">
        <div className="buttonSect">
          <button onClick={() => handleButtonClick(25000)}>25,000</button>
          <button onClick={() => handleButtonClick(40000)}>40,000</button>
        </div>
        <div className="buttonSect">
          <button onClick={() => handleButtonClick(75000)}>75,000</button>
          <button onClick={() => handleButtonClick(125000)}>125,000</button>
        </div>
        <div className="buttonSect">
          <button onClick={() => handleButtonClick("other")}>Other</button>
        </div>
      </div>
      <div className="continueBtn">
        <button onClick={toggleCard}>
          Continue <img src={btnIcon} alt="button icon" />
        </button>
      </div>
    </div>
  );
}

export default DonationCard;

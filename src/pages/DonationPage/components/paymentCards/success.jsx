import success from "../../icon/thankYou.svg";
import close from "../../icon/error.svg";

function Success() {
  return (
    <div className="successCard">
      <div>
        <img src={close} alt="close Pop-up" />
      </div>
      <div className="successBox">
        <div className="successIcon">
          <img src={success} alt="successful Payment" />
        </div>
        <div className="successTxt">
          <h4>Thank you for your donation</h4>
        </div>
      </div>
    </div>
  );
}

export default Success;

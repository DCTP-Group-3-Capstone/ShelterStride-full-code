import tick from "../../icon/Tick Circle.svg";
function DonateText() {
  return (
    <div className="donateText">
      <div className="headerText">
        <h1>
          LET’S <span>HELP</span> <br />
          YOU MAKE A <br />
          <span>DIFFERENCE</span>
        </h1>
        <p>
          Are you passionate about helping people ? if yes, ShelterStride is the
          best place for you.
          <strong>
            &ensp; Give one time or monthly - Every donation makes a difference
          </strong>
        </p>
      </div>
      <div className="bulletList">
        <div className="bulletListTitle">
          <p>If you provide a monthly donation, you:</p>
        </div>
        <div className="bulletin">
          <p>
            <img src={tick} alt="bullet point" />
            If you provide a monthly donation, you:
          </p>
        </div>
        <div className="bulletin">
          <p>
            <img src={tick} alt="bullet point" />
            If you provide a monthly donation, you:
          </p>
        </div>
      </div>
    </div>
  );
}

export default DonateText;

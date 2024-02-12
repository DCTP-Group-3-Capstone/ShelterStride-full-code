import arrow from "../../../assets/icon/whiteRight arrow.svg";
function FooterDonate() {
  return (
    <div className="donateAndContact">
      <div className="donateWrapper">
        <div className="donateText">
          <h4>Give us a helping hand</h4>
        </div>
        <div>
          <button>
            Donate <img src={arrow} alt="donate" />
          </button>
        </div>
      </div>
      {/* contact Us */}
    </div>
  );
}

export default FooterDonate;
import logo from "../../../assets/images/ShelterStrideSideLogo.svg";
function FooterText() {
  return (
    <div className="textWrapper">
      {/* main text wrapper */}
      <div className="textBox">
        <div className="imgWrapper">
          <img src={logo} alt="SheltersStride Logo" />
        </div>
        <div>
          <p>
            We are committed to providing sustainable living spaces for
            individuals and families Through our innovative housing solutions,
            we aim to create a world where everyone has the opportunity to
            thrive, regardless of their economic circumstances. Join us on this
            journey of compassion, resilience, and hope.
          </p>
        </div>
      </div>
      {/* company list */}
      <div className="listWrapper">
        <ul className="ul">
          <h4>Company</h4>
          <li className="marginBottom">What we do</li>
          <li className="marginBottom">Gift-A-Home</li>
          <li>Blog</li>
        </ul>
      </div>
    </div>
  );
}

export default FooterText;
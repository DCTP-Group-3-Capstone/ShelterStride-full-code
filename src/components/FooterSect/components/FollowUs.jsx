import facebook from "../icons/Facebook.svg";
import google from "../icons/Google.svg";
import linkedIn from "../icons/LinkedIn.svg";
import instagram from "../icons/Instagram.svg";

function FollowUs() {
  return (
    <div className="followUsWrapper">
      <div className="linksWrapper">
        <div>
          <h4>Follow us On:</h4>
        </div>
        <div className="iconWrapper">
          <img src={google} alt="Google link" />
          <img src={linkedIn} alt="linkedIn link" />
          <img src={facebook} alt="facebook link" />
          <img src={instagram} alt="Instagram link" />
        </div>
      </div>

      <div>
        <ul>
          <li>Terms of service</li>
          <li>Privacy policy</li>
          <li>© Shelterstride Inc, 2024</li>
        </ul>
      </div>
    </div>
  );
}

export default FollowUs;
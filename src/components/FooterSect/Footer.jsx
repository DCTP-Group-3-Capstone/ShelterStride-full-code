//component import
import FollowUs from "./components/FollowUs";
import ContactUs from "./components/ContactUs";
import FooterDonate from "./components/FooterDonate";
import FooterText from "./components/FooterText";
import Subscribe from "./components/Subscribe";

//style import
import "./footer.scss";

function Footer() {
  return (
    <div className="footerWrapper">
      <div className="footerContent">
        <Subscribe />
        <div className="middle-sect">
          <FooterText />
          <div className="secondHalf">
            <FooterDonate />
            <ContactUs />
          </div>
        </div>
        <FollowUs />
      </div>
    </div>
  );
}

export default Footer;

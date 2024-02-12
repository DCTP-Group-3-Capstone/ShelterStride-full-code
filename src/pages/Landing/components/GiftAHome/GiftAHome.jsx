
//import { useHistory } from 'react-router-dom';
import "../GiftAHome/GiftAhome.scss";
import frame256 from "../../img/Frame286.svg";
import phone from "../../img/phone.svg";
import House from "../../img/House.svg";
import house2 from "../../img/house2.svg";
import Person from "../../../../assets/icon/Profile.svg";
import Time from "../../../../assets/icon/Time.svg";
import Wallet from "../../../../assets/icon/Wallet.svg";
import Footer from "../../../../components/FooterSect/Footer";


function GiftAHome() {





  return (

    <div>


    <section className="giftAHome">

    <div>


<div>


      <div className="giftAHomeTextandpicture">
        <div className="part1">
          <div className="text-Part">
            <h4 className="title-Home">Gift a home</h4>
            <div className="p-textdiv">
            <p className="p-text">
              Discover a range of thoughtfully designed, affordable homes that
              not only provide you with a secure and comfortable living space
              but also contribute directly to our mission of providing housing
              solutions for the less privileged.
            </p>
            </div>
           
          </div>
        </div>

        <div className="pic-Part">
          <img className="img-part1" src={frame256} alt="homeimage" />
        </div>
      </div>

      <div className="getStarted">
        <div className="howit-Works">
          <h1> How it works</h1>   
          <h2>Ready to find your home</h2>

          <img className="imgphone" src={phone} alt="phoneimage" />
        </div>

        <div className="steps-lists">
          <div className="bullet-list-item">
            <div className="content-container">
              <img src={Person} alt="Your Icon" className="bullet-icon" />
              <p className="bullet-text">
                Create an account and search listings.
              </p>
            </div>
            <h5 className="bullet-text2">
              Explore all our listings when you register on our platform.
            </h5>
          </div>
          <div className="bullet-list-item">
            <div className="content-container">
              <img src={Time} alt="Your Icon" className="bullet-icon" />
              <p className="bullet-text">Schedule a visit.</p>
            </div>
            <h5 className="bullet-text2">
              Check out the properties in person or virtually.
            </h5>
          </div>
          <div className="bullet-list-item">
            <div className="content-container">
              <img src={Wallet} alt="Your Icon" className="bullet-icon" />
              <p className="bullet-text">
                Proceed with the payment and own your property.
              </p>
            </div>
            <h5 className="bullet-text2">
              Enjoy zero payment hassles and be a part of our community.
            </h5>
          </div>

          <button  className="butgetStarted"> Get started</button>
        </div>
      </div>

      <div className="buynow-paylater-container">
        <div className="image-frame">
          <img className="img-house" src={House} alt="" />
        </div>

        <div className="buynow-paylater">
          <h1 className="buypaytext">Buy now, Pay later</h1>
          <div className="buynow-paylater-content">
            <p>
              Beyond the walls and roof, you're not just purchasing a property;
              you're investing in dreams, stability, and the promise of a secure
              tomorrow. Buy with the assurance that each property not only
              offers you comfort and security but also serves as a beacon of
              hope for those seeking the same.
            </p>
            <label>
              <a href="#">Buy a home</a>
            </label>
          </div>
        </div>
      </div>


      <div className="rentnow-paylater-container">
        <div className="image-frame">
          <img className="img-house" src={house2} alt="" />
        </div>

        <div className="rentnow-paylater">
          <h1 className="rentpaytext">Rent now, Pay later</h1>
          <div className="rentnow-paylater-content">
            <p>
            Your monthly rent goes beyond just sustaining your living space; 
            it becomes a lifeline for someone else. By choosing to rent with us,
             you contribute directly to creating a more inclusive and compassionate society.
            </p>
            <label>
              <a href="#">Rent a home</a>
            </label>
          </div>
        </div>
      </div>
</div>

    </div>

    </section>
     
<Footer/>
    </div>
  );
}

export default GiftAHome;

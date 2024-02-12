//import { useHistory } from "react-router-dom";
import Footer from "../../components/FooterSect/Footer";
import Details from "../Landing/img/Details.svg";
import Circlecheck from "../../assets/icon/Check mark.svg";
import "./RentAHomeProduct.scss";
import React, { useState } from "react";
import SchedulePopupForm from "../Popups/Scheduleform";
import SubscribePopupForm from "../Popups/Subscribeform";

import RentSub from "../../components/Subscribecomponent/Rentsub";

function RentProduct() {
  const [showSubscribePopup, setShowSubscribePopup] = useState(false);
  const [showSchedulePopup, setShowSchedulePopup] = useState(false);
 // const history = useHistory();

  const handleGoBack = () => {
    history.goBack();  // Navigate back to the previous page
  };

  const handleOpenSubscribePopup = () => {
    setShowSubscribePopup(true);
  };

  const handleCloseSubscribePopup = () => {
    setShowSubscribePopup(false);
  };

  const handleOpenSchedulePopup = () => {
    setShowSchedulePopup(true);
  };

  const handleCloseSchedulePopup = () => {
    setShowSchedulePopup(false);
  };

  return (
    <div>
      <section className="rentproduct-section">
      <label onClick={handleGoBack}>Back</label>

        <img className="details" src={Details} alt="" />

        <div className="self-conprice">
          <div className="self-con">
            <h1 className="header1">ShelterStride Unit 1 Self-con</h1>
            <p className="address">
              Akinwunmi str, off babalola close, Iyana-ipaja, Lagos
            </p>

            <div className="content-container">
              <img src={Circlecheck} alt="Your Icon" className="bullet-icon" />
              <p className="icon-textpro">Verified Property</p>
            </div>
            <div className="hrs">
              <hr className="horizontalhr" />

              <div className="room-container">
                <div className="bedroom-rom">
                  <h1 className="rrroom">BEDROOM</h1>
                  <div className="icon-number">
                    <img
                      src={Circlecheck}
                      alt="Your Icon"
                      className="bullet-icon"
                    />
                    <p className="icon-text">1</p>
                  </div>
                </div>

                <div className="bathroom room">
                  <h1 className="rrroom">BATHROOM</h1>
                  <div className="icon-number">
                    <img
                      src={Circlecheck}
                      alt="Your Icon"
                      className="bullet-icon"
                    />
                    <p className="icon-text">1</p>
                  </div>
                </div>

                <div className="toilet room">
                  <h1 className="rrroom">TOILET</h1>
                  <div className="icon-number">
                    <img
                      src={Circlecheck}
                      alt="Your Icon"
                      className="bullet-icon"
                    />
                    <p className="icon-text">1</p>
                  </div>
                </div>

                <div className="furnishing room">
                  <h1 className="rrroom">FURNISHING</h1>
                  <div className="icon-number">
                    <img
                      src={Circlecheck}
                      alt="Your Icon"
                      className="bullet-icon"
                    />
                    <p className="icon-text">0</p>
                  </div>
                </div>
              </div>

              <hr className="horizontalhr" />
            </div>

            <div className="some-info">
              <h1 className="header2">Property info:</h1>
              <p className="paratext">
                This is a self container with a room and toilet, it is located
                in a safe part of the city.{" "}
              </p>
            </div>

            <div className="attractions">
              <h1 className="header3">Key attractions:</h1>
              <ul>
                <li>Secure Environment</li>
                <li>Zero charge</li>
              </ul>
            </div>

            <div className="Amenities">
              <h1 className="ameni">Amenities</h1>
              <div className="content-con">
                <div className="content-container2">
                  <img
                    src={Circlecheck}
                    alt="Your Icon"
                    className="bullet-icon"
                  />
                  <p className="icon-text2">security</p>
                </div>

                <div className="content-container2">
                  <img
                    src={Circlecheck}
                    alt="Your Icon"
                    className="bullet-icon"
                  />
                  <p className="icon-text2">Running water</p>
                </div>
              </div>
            </div>

            <div className="House-rules">
              <h1 className="ameni">House rules</h1>
              <div className="content-con">
                <div className="content-container2">
                  <img
                    src={Circlecheck}
                    alt="Your Icon"
                    className="bullet-icon"
                  />
                  <p className="icon-text2">No smoking</p>
                </div>

                <div className="content-container3">
                  <img
                    src={Circlecheck}
                    alt="Your Icon"
                    className="bullet-icon"
                  />
                  <p className="icon-text2">Private/residential use only</p>
                </div>
              </div>
            </div>
          </div>

          <div className="sub-price">
            <div className="labelbutton">
              <h1 className="hprice">Subscription Price</h1>
              <button disabled={true} className="available">
                {" "}
                available
              </button>
            </div>

            <div className="month-sub">
              <h1 className="monthprice">N30,000/month</h1>
              <h1 className="fee">No additional free</h1>
            </div>

            <div className="but-ton">
              <button className="schedulebut" onClick={handleOpenSchedulePopup}>
                Schedule a visit{" "}
              </button>
              {showSchedulePopup && (
                <SchedulePopupForm onClose={handleCloseSchedulePopup} />
              )}

              <button
                onClick={handleOpenSubscribePopup}
                className="subscribebut"
              >
                Subscribe{" "}
              </button>
              {showSubscribePopup && (
                <SubscribePopupForm onClose={handleCloseSubscribePopup} />
              )}

              <h1 className="info">
                {" "}
                Kindly schedule a visit before proceeding to subscribe
              </h1>
            </div>
          </div>
        </div>

        <div>
          <h2>Similar Properties nearby</h2>
        </div>
      </section>
      <div>
        <RentSub />
        <Footer />
      </div>
    </div>
  );
}

export default RentProduct;

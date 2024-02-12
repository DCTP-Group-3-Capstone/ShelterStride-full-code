import julius from "../icon/juliusberger.svg";
import thrive from "../icon/thrive.svg";
import zenith from "../icon/zenith.svg";
import dangote from "../icon/Dangote.svg";
function Partners() {
  return (
    <section className="partnersWrapper">
      <div className="partnersText">
        <h3>Our partners</h3>
        <p>
          Building a better future requires collaboration. We've forged 30+
          partnerships with like-minded organizations, and government agencies
          to amplify our impact.
        </p>
      </div>
      <div className="partnersIcon">
        <img src={julius} alt="Julius Company Berger Logo Icon" />
        <img src={thrive} alt="Thrive Company Logo Icon" />
        <img src={zenith} alt="Zenith Bank Logo Icon" />
        <img src={dangote} alt="Dangote Company Logo icon" />
      </div>
    </section>
  );
}

export default Partners;

import heroImg from "../img/Hero.svg";
function Hero() {
  return (
    <section
      className="heroSect"
      style={{
        backgroundImage: `linear-gradient(
          0deg,
          rgba(23, 23, 23, 0.2) 0%,
          rgba(23, 23, 23, 0.2) 100%
        ),
        url(${heroImg})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="heroContent">
        <div className="heroHeader">
          <h3>
            Unlocking <span>Dreams,</span> <br />
            One <span>Home</span> at a Time
          </h3>
        </div>
        <div className="heroText">
          <p>
            Transforming Lives Through Accessible Housing Solutions, Empowering
            communities, building hope together
          </p>
        </div>
        <div className="heroBtn">
          <button className="pryBtn">Donate</button>
          <button className="secBtn">Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

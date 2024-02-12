import hero from "../img/blohHero.svg";
function BlogHero() {
  return (
    <section
      className="blogHero"
      style={{
        backgroundImage: `
          url(${hero})`,
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="heroContent">
        <div className="heroHeader">
          <h3>Journey with us through stories of impact</h3>
        </div>
        <div className="heroText">
          <p>
            Transforming Lives Through Accessible Housing Solutions, Empowering
            communities, building hope together
          </p>
        </div>
        <div className="heroBtn">
          <button className="pryBtn">Sign Up</button>
          <button className="secBtn">Learn more</button>
        </div>
      </div>
    </section>
  );
}

export default BlogHero;

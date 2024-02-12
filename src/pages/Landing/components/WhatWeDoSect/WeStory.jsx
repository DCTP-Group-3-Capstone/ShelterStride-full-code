import WeImage from "../../img/WhatWeDo.svg";
function WeStory() {
  return (
    <div className="weStoryWrapping">
      <div className="weStoryImg">
        <img
          src={WeImage}
          alt="A yellow tractor being driven on the road of a construction site"
        />
      </div>

      <div className="weStoryText">
        <h4>What we do </h4>
        <h6>Our Story: Building Homes, Changing Lives</h6>
        <hr />
        <p>
          We believe that a home is more than just a shelter; it's a sanctuary
          where dreams take root and possibilities unfold. Our journey began
          with a simple yet profound vision: to provide affordable housing
          solutions that empower individuals and transform entire communities.
        </p>
      </div>
    </div>
  );
}

export default WeStory;

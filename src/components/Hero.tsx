import React from "react";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="row">
        <div className="info col-lg-6 col-sm-1">
          <h1>
            More than just <br /> shorter links
          </h1>
          <p>
            Build your brand’s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="btn rounded-pill px-6 py-2">Get Started</button>
        </div>
        <div className="work col-lg-6 col-sm-1">
          <img src="./images/illustration-working.svg" alt="work" />
        </div>
      </div>
    </div>
  );
};

export default Hero;

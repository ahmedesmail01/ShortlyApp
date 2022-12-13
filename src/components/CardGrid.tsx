import React from "react";
import Card from "./Card";

const CardGrid = () => {
  return (
    <div className="card-grid container text-center my-5">
      <div className="sh-row row gap-3">
        <div className="col">
          <Card
            image={`icon-brand-recognition`}
            title="Brand Recognition"
            para={`Boost your brand recognition with each click. Generic links don’t mean a thing. Branded links help instil confidence in your content.`}
          />
        </div>
        <div className="detailed col">
          <Card
            image={`icon-detailed-records`}
            title="Detailed Records"
            para="Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions."
          />
        </div>
        <div className="custom col">
          <Card
            image={`icon-fully-customizable`}
            title="Fully Customizable"
            para="Improve brand awareness and content discoverability through customizable links, supercharging audience engagement."
          />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
};

export default CardGrid;

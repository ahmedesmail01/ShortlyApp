import React from "react";

const Card: React.FC<{ image: string; title: string; para: string }> = ({
  image,
  title,
  para,
}) => {
  return (
    <div className="sh-card bg-light p-5">
      <div className="sh-card-image">
        <img src={`./images/${image}.svg`} alt="icon" />
      </div>
      <h2>{title}</h2>
      <p>{para}</p>
    </div>
  );
};

export default Card;

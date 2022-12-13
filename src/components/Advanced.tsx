import React from "react";
import CardGrid from "./CardGrid";

const Advanced = () => {
  return (
    <div className="advanced pb-5">
      <div className="info">
        <h1>Advanced Statistics</h1>
        <p>
          Track how your links are performing across the web with <br /> our
          advanced statistics dashboard.
        </p>
      </div>
      <CardGrid />
    </div>
  );
};

export default Advanced;

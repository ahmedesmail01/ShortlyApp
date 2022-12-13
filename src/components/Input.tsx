import React from "react";

const Input = () => {
  return (
    <div className="input container">
      <input type="text" placeholder="shorten a link here..." />
      <button className="btn" type="submit">
        Shorten it!
      </button>
    </div>
  );
};

export default Input;

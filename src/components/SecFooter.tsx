import React from "react";

const SecFooter = () => {
  return (
    <div className="footer">
      <div className=" container d-flex p-5">
        <h2>Shortly</h2>
        <div className="features">
          <h3>Features</h3>
          <p>Link Shortening</p>
          <p>Branded Links</p>
          <p>Analytics</p>
        </div>
        <div className="resources">
          <h3>Resources</h3>
          <p>Blog</p>
          <p>Developers</p>
          <p>Support</p>
        </div>
        <div className="company">
          <h3>Company</h3>
          <p>About</p>
          <p>Our Team</p>
          <p>Careers</p>
          <p>Contact</p>
        </div>
        <div className="social-icons d-flex">
          <i className="fa-brands fa-square-facebook"></i>
          <i className="fa-brands fa-twitter"></i>
          <i className="fa-brands fa-pinterest"></i>
          <i className="fa-brands fa-instagram"></i>
        </div>
      </div>
      <div className="attribution">
        Challenge by
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
        >
          Frontend Mentor
        </a>
        . Coded by{" "}
        <a href="https://www.linkedin.com/in/ahmed-esmail-a28152239">
          Ahmed Esmail
        </a>
        .
      </div>
    </div>
  );
};

export default SecFooter;

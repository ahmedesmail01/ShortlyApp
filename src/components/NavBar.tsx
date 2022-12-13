import React from "react";

const NavBar = () => {
  return (
    <nav className="sh-navbar navbar navbar-expand-lg ">
      <div className="container">
        <a className="navbar-brand" href="/#">
          <img src="./images/logo.svg" alt="Logo" />
        </a>
        <button
          className="navbar-toggler shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="sh-navContainer collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item ms-lg-4">
              <a
                className="nav-link mt-sm-3 mt-lg-0 "
                aria-current="page"
                href="/#"
              >
                Features
              </a>
            </li>
            <li className="nav-item ms-sm-0  ms-lg-4">
              <a className="nav-link" href="/#">
                Pricing
              </a>
            </li>
            <li className="res nav-item mx-sm-auto  ms-lg-4">
              <a className="nav-link" href="/#">
                Resources
              </a>
            </li>
          </ul>
          <ul className="navSign navbar-nav mb-2 mx-sm-4 mb-lg-0 bg-sm-primary">
            <li className="nav-item  ms-lg-4">
              <a className="nav-link" href="/#">
                login
              </a>
            </li>
            <li className="nav-item  ms-lg-4">
              <a className="nav-link signUp btn rounded-pill px-4" href="/#">
                sign Up
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg position-fixed vw-100"
      style={{ top: 0, zIndex: 1 }}
    >
      <div className="container-fluid">
        <Link
          className="navbar-brand"
          style={{ fontWeight: "bold", fontSize: "1.5em" }}
          to="/"
        >
          Predict Bus
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link" to="/about">
                About Us
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">
                Contact Us
              </Link>
            </li>
          </ul>
          <div className="d-flex">
            <Link to="/login">
              <button className="btn me-3 btn-outline-dark">Login</button>
            </Link>
            <Link to="/signup">
              <button className="btn me-5 btn-outline-dark">Sign up</button>
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

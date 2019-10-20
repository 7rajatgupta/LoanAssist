import React from "react";
import { Link } from "react-router-dom";
import "./Nav.css";
import logo from "../static/img/logo.png";
const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src={logo} alt="Home" />
          </Link>
        </div>
        <ul className="navbar nav-links navbar-right">
          <Link to="/">
            <li className="nav-item">Home</li>
          </Link>
          <Link to="/generate">
            <li className="nav-item">Loan Assist</li>
          </Link>
          <Link to="/about">
            <li className="nav-item">About</li>
          </Link>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

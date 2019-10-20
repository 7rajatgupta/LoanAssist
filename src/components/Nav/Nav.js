import React from "react";
import "./Nav.css";
import logo from "../static/img/logo.png";
const Nav = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src={logo} alt="Home" />
        </a>
        <ul className="navbar  nav-links navbar-right">
          <li className="nav-item">
            <a className="nav-link" href="/">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/generate">
              Loan Assist
            </a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/about">
              About
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;

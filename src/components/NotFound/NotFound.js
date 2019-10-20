import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "../static/img/NotFound.gif";

const NotFound = () => {
  return (
    <div>
      <div className="container mt-5">
        <img src={NotFoundImg} alt="404" />
      </div>
      <div className="container mt-5">
        <Link to="/">
          <button className="btn btn-secondary">Guide me Home</button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;

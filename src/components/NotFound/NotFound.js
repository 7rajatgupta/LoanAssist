import React from "react";
import NotFoundImg from "../static/img/NotFound.gif";

const NotFound = () => {
  return (
    <div>
      <div className="container mt-5">
        <img src={NotFoundImg} alt="404" />
      </div>
      <div className="container mt-5">
        <a href="/" className="btn btn-secondary">
          Guide me Home
        </a>
      </div>
    </div>
  );
};

export default NotFound;

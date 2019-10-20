import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";
import background from "../static/img/home-bg.jpg";

const containerStyle = {
  backgroundImage: `url(${background})`,
  height: "48vh"
};

const Home = () => {
  return (
    <div>
      <div className="container" style={containerStyle}>
        <div className="home-content">
          <h2 className="heading">Loan Assist by FullThrottle Labs</h2>
          <h4 className="text">
            Knowing about loan structures can be <br />
            really frustrating these days.
          </h4>
          <h5 className="sub-text">
            We help you know about Loan Interest Rates and other details
            efficiently. <br /> <br /> All you need to know is the Amount and
            the duration of months. <br /> That's it.
          </h5>
        </div>
        <div className="mt-5">
          <Link to="/generate">
            <button className="btn btn-primary btn-main">Try it out</button>
          </Link>
        </div>
      </div>

      <div className=" container home-footer">
        <p className="text-muted">GitHub @7rajatgupta</p>
      </div>
    </div>
  );
};

export default Home;

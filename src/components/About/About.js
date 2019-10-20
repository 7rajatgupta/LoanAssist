import React from "react";
import "./About.css";

const About = () => {
  return (
    <div className="container">
      <h1 className="text-primary mt-5">About</h1>
      <div className="jumbotron mt-5 mb-5 description">
        <h5>
          This app was developed by Rajat Gupta as a test project task given by
          FullThrottle Labs.
        </h5>
        <p>
          I have used React with Hooks, Bootstrap for styling, Axios for API
          calls and React-Input-Range for Sliders. <br /> While building this
          app, I've used my skills to develop it as a production ready website
          providing all the basic pages like Home, About & NotFound (404) pages
          with proper Routing and Validation while keeping things user friendly.{" "}
        </p>{" "}
        <p>
          {" "}
          I have given attention to details and also tried to mimic the look and
          feel of your official website using the same Color schemes, Fonts and
          Navigation style.
        </p>{" "}
        <p>
          {" "}
          Hope you enjoy your time on this app. <br /> Also, Lorem Ipsum is so
          overrated.
        </p>
        <h5>
          {" "}
          <a
            className="btn btn-secondary"
            href="https://www.github.com/7rajatgupta"
          >
            View my other projects
          </a>
        </h5>
      </div>
    </div>
  );
};

export default About;

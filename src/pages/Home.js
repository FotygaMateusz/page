import React from "react";
import logo from "../logo.svg";

const Home = () => {
  return (
    <div>
      <img src={logo} className="App-logo" alt="logo" />
      <p className="mainp">
        The entire application was built using React.js with additional modules
        such as React Router DOM or React Redux.
      </p>
    </div>
  );
};

export default Home;

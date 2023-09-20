import React from "react";

import Login from "../Login/Login";
import "./home.css";
import Footer from "../Footer/Footer";
import WhyChoose from "../WhyChoose/WhyChoose";
import TopPackage from "../TopPackage/TopPackage";
import About from "../About/About";

const Home = () => {
  return (
    <div className="home-container">
      <Login />
      <div className="free-container">
        <div className="free-info-container">
          <img alt="award-logo" className="" src="/rotary.png" />
          <p className="free-text">NABL Accredited Labs</p>
        </div>
        <div className="free-info-container">
          <img alt="award-logo" className="" src="/handshake.png" />
          <p className="free-text">Free sample collection</p>
        </div>
      </div>
      <About />
      <TopPackage />
      <WhyChoose />
      <Footer />
    </div>
  );
};

export default Home;

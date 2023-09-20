import React from "react";
import { AiOutlineCopyright } from "react-icons/ai";
import { MdOutlineCall } from "react-icons/md";

import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer-main-container">
      <div className="footer-info-container">
        <div className="footer-card">
          <img
            alt="nil-logo"
            src="/footerlogo.png"
            className="footer-nil-logo"
          />
          <p className="footer-info">
            Book doctor appointments online and get your ailments treated in no
            time with our expert medical support systems. Get rid of all your
            medical problem with our expert panel of doctors who guide you
            towards a healthier life.
          </p>
          <div className="contact-container">
            <p className="tel-code">
              +91 <span className="number">9876543210</span>
            </p>
            <button className="call-btn">
              <MdOutlineCall size={30} className="call-btn-icon" />
            </button>
          </div>
        </div>
        <div className="services-container">
          <div className="service-card">
            <h1 className="service-head">Services</h1>
            <ul className="services-list-container">
              <li className="service-name">Appointments</li>
              <li className="service-name">Lab tests</li>
              <li className="service-name">A-Z medicine</li>
              <li className="service-name">Doctor support</li>
            </ul>
          </div>
          <div className="service-card">
            <h1 className="service-head">Legal</h1>
            <ul className="services-list-container">
              <li className="service-name">General info</li>
              <li className="service-name">Privacy policy</li>
              <li className="service-name">Terms of services</li>
              <li className="service-name">Consultation</li>
              <li className="service-name">How it works</li>
            </ul>
          </div>
          <div className="service-card">
            <h1 className="service-head">Talk to us</h1>
            <ul className="services-list-container">
              <li className="service-name">support@notinline.com</li>
              <li className="service-name">appointment@notinline.com</li>
              <li className="service-name">+91 12345 67899</li>
              <li className="service-name">+91 97642 09752</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="copy-rights-container">
        <AiOutlineCopyright size={30} className="copy-right-icon" />
        <p className="copy-right-text">2021-2023 All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;

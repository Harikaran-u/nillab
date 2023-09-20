import React, { useState } from "react";
import { BiLogoPlayStore } from "react-icons/bi";
import { GiHamburgerMenu } from "react-icons/gi";
import Popup from "reactjs-popup";
import "./navbar.css";

const Navbar = () => {
  const [selectedTab, setSelectedTab] = useState("home");

  return (
    <nav className="header-container">
      <div className="app-logo-container">
        <img alt="nil-logo" className="app-logo" src="/nillogo.png" />
        <img alt="NotInLine" className="app-name" src="/labname.png" />
      </div>
      <ul className="navigation-container">
        <li
          className={`nav-link ${selectedTab === "home" && "active-tab"}`}
          onClick={() => setSelectedTab("home")}
        >
          Home
        </li>
        <li
          className={`nav-link ${
            selectedTab === "health conditions" && "active-tab"
          }`}
          onClick={() => setSelectedTab("health conditions")}
        >
          Health Conditions
        </li>
        <li
          className={`nav-link ${selectedTab === "lab tests" && "active-tab"}`}
          onClick={() => setSelectedTab("lab tests")}
        >
          Lab Tests
        </li>
        <li
          className={`nav-link ${selectedTab === "medicines" && "active-tab"}`}
          onClick={() => setSelectedTab("medicines")}
        >
          Medicines
        </li>
      </ul>
      <div className="use-case-container">
        <button className="custom-btn">For patients</button>
        <button className="custom-btn">For hospitals</button>
      </div>
      <button className="app-store-btn">
        <BiLogoPlayStore size={20} className="app-icon" /> Play store
      </button>
      <Popup
        trigger={
          <button className="mobile-menu-bar">
            <GiHamburgerMenu />
          </button>
        }
      >
        <div className="mobile-menu-container">
          <ul className="navigation-container-mobile">
            <li
              className={`nav-link ${selectedTab === "home" && "active-tab"}`}
              onClick={() => setSelectedTab("home")}
            >
              Home
            </li>
            <li
              className={`nav-link ${
                selectedTab === "health conditions" && "active-tab"
              }`}
              onClick={() => setSelectedTab("health conditions")}
            >
              Health Conditions
            </li>
            <li
              className={`nav-link ${
                selectedTab === "lab tests" && "active-tab"
              }`}
              onClick={() => setSelectedTab("lab tests")}
            >
              Lab Tests
            </li>
            <li
              className={`nav-link ${
                selectedTab === "medicines" && "active-tab"
              }`}
              onClick={() => setSelectedTab("medicines")}
            >
              Medicines
            </li>
          </ul>
          <div className="use-case-container-mobile">
            <button className="custom-btn">For patients</button>
            <button className="custom-btn">For hospitals</button>
            <button className="app-store-btn-mobile">
              <BiLogoPlayStore size={10} className="app-icon" /> Play store
            </button>
          </div>
        </div>
      </Popup>
    </nav>
  );
};

export default Navbar;

import React from "react";
import { BsPerson } from "react-icons/bs";
import { MdOutlineCall } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";

import "./login.css";

const Login = () => {
  return (
    <div className="login-page-container">
      <div className="main-form-container">
        <form
          className="login-form-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="form-info">Fill in the details to get a call!</h3>
          <div className="input-container">
            <BsPerson className="input-icon" />
            <input className="user-input" type="text" placeholder="Full name" />
          </div>
          <div className="input-container">
            <MdOutlineCall className="input-icon" />
            <input
              className="user-input"
              type="tel"
              placeholder="Phone number"
            />
          </div>
          <div className="input-container">
            <IoLocationOutline className="input-icon" />
            <input className="user-input" type="text" placeholder="Location" />
          </div>
          <div className="input-container">
            <input type="checkbox" className="check-box-input" id="terms" />
            <label htmlFor="terms" className="terms">
              By continuing, you agree to our
              <span className="conditions">T&C and privacy policy</span>
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Proceed
          </button>
        </form>
        <div className="offer-container">
          <p className="deal-price">
            Get a Full Body Checkup <b>Now</b> at
            <b className="original-price">₹5,999</b>
            <b className="offer-price">₹999</b>
          </p>
          <p className="offer-percentage">70% OFF</p>
        </div>
      </div>
      <div className="main-form-container-mobile">
        <div className="ad-head-container-mobile">
          <h1 className="ad-head-mobile">
            <span className="highlight-head">Best in class</span> lab tests!
          </h1>
          <img className="highlight-img" alt="highlight" src="/highlight.png" />
        </div>
        <div className="offer-container">
          <p className="deal-price">
            Get a Full Body Checkup <b>Now</b> at
            <b className="original-price">₹5,999</b>
            <b className="offer-price">₹999</b>
          </p>
          <p className="offer-percentage">70% OFF</p>
        </div>
        <form
          className="login-form-container"
          onSubmit={(e) => e.preventDefault()}
        >
          <h3 className="form-info">Fill in the details to get a call!</h3>
          <div className="input-container">
            <BsPerson className="input-icon" />
            <input className="user-input" type="text" placeholder="Full name" />
          </div>
          <div className="input-container">
            <MdOutlineCall className="input-icon" />
            <input
              className="user-input"
              type="tel"
              placeholder="Phone number"
            />
          </div>
          <div className="input-container">
            <IoLocationOutline className="input-icon" />
            <input className="user-input" type="text" placeholder="Location" />
          </div>
          <div className="input-container">
            <input type="checkbox" className="check-box-input" id="terms" />
            <label htmlFor="terms" className="terms">
              By continuing, you agree to our
              <span className="conditions">T&C and privacy policy</span>
            </label>
          </div>
          <button type="submit" className="submit-btn">
            Proceed
          </button>
        </form>
      </div>
      <div className="ad-container">
        <div className="ad-head-container">
          <h1 className="ad-head">
            <span className="highlight-head">Best in class</span> lab tests!
          </h1>
          <img className="highlight-img" alt="highlight" src="/highlight.png" />
        </div>
        <div className="ad-display-container">
          <div className="picture-outer-container">
            <div className="picture-container">
              <img alt="lab-ad" src="/microscope.png" className="ad-picture" />
            </div>
          </div>
        </div>
        <div className="works-container work-1">
          <img alt="work-profile" className="work-img" src="/Ellipse1.png" />
          <h1 className="work-name">Timely sample collection</h1>
        </div>
        <div className="works-container work-2">
          <img alt="work-profile" className="work-img" src="/Ellipse2.png" />
          <h1 className="work-name">Complementary report consultation</h1>
        </div>
        <div className="works-container work-3">
          <img alt="work-profile" className="work-img" src="/Ellipse3.png" />
          <h1 className="work-name">Accurate timely reports</h1>
        </div>
      </div>
    </div>
  );
};

export default Login;

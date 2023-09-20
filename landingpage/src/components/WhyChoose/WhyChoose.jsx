import React from "react";
import "./whychoose.css";

const WhyChoose = () => {
  return (
    <div className="why-choose-us-container">
      <div className="why-head-container">
        <h1 className="why-head">
          Why <span className="why-highlight">choose</span>us?
        </h1>
        <img
          alt="highlight"
          src="/highlight.png"
          className="highlight-pattern-why"
        />
      </div>
      <p className="why-choose-info">
        We want you and your heart to be healthy so you can live a happy life!
      </p>
      <div className="why-choose-info-flow-container">
        <div className="why-choose-cards-container">
          <div className="why-choose-card nabl-certificate">
            <h1 className="why-choose-card-head">NABL Accredited Labs</h1>
            <p className="why-choose-card-info">
              Get accurate and safe results from our NABL-certified lab
              partners.
            </p>
            <div className="image-pop-up">
              <img
                alt="why-choose-logo"
                src="/record.png"
                className="why-choose-logo"
              />
            </div>
          </div>
          <div className="why-choose-card value-card">
            <h1 className="why-choose-card-head">Value experience</h1>
            <p className="why-choose-card-info">
              Experience seamless care without the hassle of waiting in long
              lines for an appointment. Book with us for a healthier lifestyle.
            </p>
            <div className="image-pop-up">
              <img
                alt="why-choose-logo"
                src="/doctor3.png"
                className="why-choose-logo"
              />
            </div>
          </div>
          <div className="why-choose-card timely-card">
            <h1 className="why-choose-card-head">Timely collections</h1>
            <p className="why-choose-card-info">
              We collect samples timely to prevent treatment delays and ensure
              your continued well-being.
            </p>
            <div className="image-pop-up">
              <img
                alt="why-choose-logo"
                src="/doctor2.png"
                className="why-choose-logo"
              />
            </div>
          </div>
          <div className="why-choose-card transparancy-card">
            <h1 className="why-choose-card-head">Transparency</h1>
            <p className="why-choose-card-info">
              Enjoy hassle free medical assistance with our transparent
              approach. We prioritize transparency for your smooth
              medical journey.
            </p>
            <div className="image-pop-up">
              <img
                alt="why-choose-logo"
                src="/doctor1.png"
                className="why-choose-logo"
              />
            </div>
          </div>
        </div>
        <img
          alt="professional"
          src="/doctorpose.png"
          className="professional-img"
        />
      </div>
      <img
        alt="professional"
        src="/doctorpose.png"
        className="professional-img-tab"
      />
    </div>
  );
};

export default WhyChoose;

import React from "react";
import "./about.css";

const aboutLabArray = [
  { count: 5, infoName: "Labs", id: 0 },
  { count: 100, infoName: "Collection centers", id: 1 },
  { count: 1000, infoName: "Monthly tests", id: 2 },
  { count: 2200, infoName: "Test menu", id: 3 },
  { count: 5, infoName: "Cities present in", id: 4 },
];

const About = () => {
  return (
    <div className="branches-container">
      <div className="expand-head-container">
        <h1 className="expand-head">
          We keep <span className="expand-highlight">expanding</span>!
        </h1>
        <img
          alt="highlight"
          src="/highlight.png"
          className="highlight-pattern"
        />
      </div>
      <ul className="multi-work-container">
        {aboutLabArray.map((eachInfo) => (
          <li className="multi-work" key={eachInfo.id}>
            <p className="work-number">{eachInfo.count}+</p>
            <p className="work-info-name">{eachInfo.infoName}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default About;

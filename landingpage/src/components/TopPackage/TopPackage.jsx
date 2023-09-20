import React from "react";
import { AiFillStar } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

import "./top.css";

const packagesArray = [
  {
    packageName: "Basic Full Body Checkup",
    rating: 4.3,
    reviews: 75,
    testCount: 53,
    mrp: "10,000",
    offerPrice: "8,490",
    id: 0,
  },
  {
    packageName: "Advance Full Body Checkup",
    rating: 4.7,
    reviews: 100,
    testCount: 70,
    mrp: "12,000",
    offerPrice: "10,000",
    id: 1,
  },
  {
    packageName: "Liver Function Test (LFT)",
    rating: 4.3,
    reviews: 43,
    testCount: 89,
    mrp: "13,299",
    offerPrice: "11,299",
    id: 2,
  },
];

const TopPackage = () => {
  return (
    <div className="top-packages-container">
      <div className="top-head-container">
        <h1 className="top-head">
          Top <span className="top-highlight">packages</span>
        </h1>
        <img
          alt="highlight"
          src="/highlight.png"
          className="highlight-pattern-top"
        />
      </div>
      <p className="package-info">
        Explore our wide range of tests! We ensure that you don’t miss out on
        any chance to keep yourself healthy.
      </p>
      <ul className="package-cards-container">
        {packagesArray.map((eachPackage) => (
          <li className="package-card" key={eachPackage.id}>
            <h1 className="package-name">{eachPackage.packageName}</h1>
            <div className="ratings-container">
              <p className="rating">{eachPackage.rating}</p>
              <AiFillStar size={20} className="rating-icon" />
              <p className="reviews">({eachPackage.reviews} reviews)</p>
            </div>
            <p className="test-numbers">
              Number of tests - {eachPackage.testCount}
            </p>
            <p className="mrp">
              MRP:₹<s>{eachPackage.mrp}</s>{" "}
              <span className="discount-offer">₹{eachPackage.offerPrice}</span>
            </p>
            <button className="book-now-btn">Book now</button>
          </li>
        ))}
      </ul>
      <div className="swipe-container">
        <button className="swipe-arrow">
          <BsArrowRight size={40} />
        </button>
      </div>
    </div>
  );
};

export default TopPackage;

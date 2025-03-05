import React from "react";
import "./Hero.css";
import ph from "@/assets/ph.jpg";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" paddings innerWidth flexCenter hero-container">
        {/* Left section  */}
        <div className="flexColStart hero-left">
          <div className="hero-title">
            <h1>
              Real estate <br />
              is not about houses, <br />
              it's about people.
            </h1>
          </div>
          <div className="flexColStart hero-de">
            <span>Find your next property</span>
            <span>
              Maximise the potential of your <br />
              property investment with
              <br />
              Australia's #1 real estate brand
            </span>
          </div>
          <div className="search-bar">Search</div>
        </div>
        {/* Right section  */}
        <div className=" flexCenter hero-right">
          <div className="image-container">
            <img src={ph} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

import React from "react";
import "./GetStarted.css";

const GetStarted = () => {
  return (
    <section g-wrapper>
      <div className="paddings innerWidth g-container">
        <div className="flexColCenter inner-container">
          <span className="primaryText">Get Started With Dinesh Property</span>
          <span className="secondaryText">
            Subscribe and find super attractive price quotes from us. Find your
            residence soon
          </span>
          <button className="button">
            <a href="mailto:abc@gmail.com">Get started</a>
          </button>
        </div>
      </div>
    </section>
  );
};

export default GetStarted;

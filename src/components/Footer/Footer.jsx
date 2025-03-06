import React from "react";
import "./Footer.css";
import logo from "@/assets/logop.png";

const Footer = () => {
  return (
    <section className="f-wrapper">
      <div className="paddings innerWidth flexCenter f-container">
        {/* Left side  */}
        <div className="flexColStart f-left">
          <img src={logo} alt="" width={120} />
          <span className="secondaryText">
            Our vision is to make all people
            <br /> the best place to live
          </span>
        </div>
        {/* Right side  */}
        <div className=" flexColStart f-right">
          <span className="primaryText">Information</span>
          <span className="secondaryText">
            93A Collier Road, Embleton, 6062 WA
          </span>
          <div className="flexCenter f-menu">
            <span>Property</span>
            <span>Services</span>
            <span>Products</span>
            <span>About Us</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;

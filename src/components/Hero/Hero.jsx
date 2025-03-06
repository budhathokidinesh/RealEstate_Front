import React from "react";
import "./Hero.css";
import ph from "@/assets/ph.jpg";
import { HiLocationMarker } from "react-icons/hi";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="hero-wrapper">
      <div className=" paddings innerWidth flexCenter hero-container">
        {/* Left section  */}
        <div className="flexColStart hero-left">
          {/* Title  */}
          <div className="hero-title">
            <div className="orange-circle" />
            <motion.h1
              initial={{ y: "2rem", opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 2,
                type: "spring",
              }}
            >
              Real estate <br />
              is not about houses, <br />
              it's about people.
            </motion.h1>
          </div>
          {/* Description  */}
          <div className="flexColStart hero-de">
            <span className="secondaryText">
              Find your next property with us.
            </span>
            <br />
            <span className="secondaryText">
              Maximise the potential of <br />
              your property investment with
              <br />
              Australia's #1 real estate brand.
            </span>
          </div>
          {/* Search Bar  */}
          <div className="flexCenter search-bar">
            <HiLocationMarker color="var(--blue)" size={25} />
            <input type="text" />
            <button className="button">Search</button>
          </div>
          {/* Countng Numbers  */}
          <div className="flexCenter stats">
            <div className="flexColCenter stat">
              <span>
                <CountUp start={8000} end={9000} duration={10} />
                <span>+</span>
              </span>
              <span>Premium Products</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp start={810} end={1000} duration={10} />
                <span>+</span>
              </span>
              <span>Happy customers</span>
            </div>
            <div className="flexColCenter stat">
              <span>
                <CountUp end={30} />
                <span>+</span>
              </span>
              <span>Award Winning</span>
            </div>
          </div>
        </div>
        {/* Right section  */}
        <div className=" flexCenter hero-right">
          <motion.div
            initial={{ x: "7rem", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{
              duration: 2,
              type: "spring",
            }}
            className="image-container"
          >
            <img src={ph} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

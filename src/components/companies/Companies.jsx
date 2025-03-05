import React from "react";
import "./Companies.css";
import c1 from "@/assets/1.png";
import c2 from "@/assets/2.png";
import c3 from "@/assets/3.png";
import c4 from "@/assets/4.png";
const Companies = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container ">
        <img src={c1} alt="" />
        <img src={c2} alt="" />
        <img src={c3} alt="" />
        <img src={c4} alt="" />
      </div>
    </section>
  );
};

export default Companies;

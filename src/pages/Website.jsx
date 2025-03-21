import React from "react";

import Hero from "@/components/Hero/Hero.jsx";
import Companies from "@/components/companies/Companies.jsx";
import Residencies from "@/components/Residencies/Residencies.jsx";
import Value from "@/components/Value/Value.jsx";
import Contact from "@/components/Contact/Contact.jsx";
import GetStarted from "@/components/GetStarted/GetStarted.jsx";

const Website = () => {
  return (
    <div className="App">
      <div>
        <div className="white-gradient" />

        <Hero />
      </div>
      <Companies />
      <Residencies />
      <Value />
      <Contact />
      <GetStarted />
    </div>
  );
};

export default Website;

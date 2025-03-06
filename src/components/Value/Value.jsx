import React, { useState } from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
  AccordionItemState,
} from "react-accessible-accordion";
import "react-accessible-accordion/dist/fancy-example.css";
import { MdOutlineArrowDropDown } from "react-icons/md";
import "./Value.css";
import data from "@/utils/accordion.jsx";
const Value = () => {
  const [className, setClassNeme] = useState(null);
  return (
    <section className="v-wraper">
      <div className="paddings innerWidth flexCenter v-container">
        {/* Left side  */}
        <div className="v-left">
          <div className="image-container">
            <img src="./r1.jpg" alt="" />
          </div>
        </div>
        {/* Right side  */}
        <div className="flexColStart v-right">
          <span className="orangeText">Our Values</span>
          <span className="primaryText">Value we give to you</span>
          <span className="secondaryText">
            We always ready to help you providing te best services for you
            <br />
            We believe a good place to live can make your life better.
          </span>
          {/* Accordian section  */}
          <Accordion
            className="accordian"
            allowMultipleExpanded={false}
            preExpanded={[0]}
          >
            {data.map((item, i) => {
              return (
                <AccordionItem
                  className={`accordianItem ${className}`}
                  key={i}
                  uuid={i}
                >
                  <AccordionItemHeading>
                    <AccordionItemButton className=" flexCenter accordianButton">
                      <AccordionItemState>
                        {({ expanded }) =>
                          expanded
                            ? setClassNeme("expanded")
                            : setClassNeme("collapsed")
                        }
                      </AccordionItemState>
                      <div className="flexCenter icon">{item.icon}</div>
                      <span className="primaryText">{item.heading}</span>
                      <div className="flexCenter icon">
                        <MdOutlineArrowDropDown size={20} />
                      </div>
                    </AccordionItemButton>
                  </AccordionItemHeading>
                  <AccordionItemPanel>
                    <p className="secondaryText">{item.detail}</p>
                  </AccordionItemPanel>
                </AccordionItem>
              );
            })}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default Value;

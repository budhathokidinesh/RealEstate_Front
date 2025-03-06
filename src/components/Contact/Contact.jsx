import React from "react";
import "./Contact.css";
import { MdCall } from "react-icons/md";
import { BsChatDotsFill, BsFillChatDotsFill } from "react-icons/bs";
import { HiChatBubbleBottomCenterText } from "react-icons/hi2";
import { MdVideoCall } from "react-icons/md";

const Contact = () => {
  return (
    <section className="c-wrapper">
      <div className="paddings innerWidth flexCenter c-container">
        {/* Left side  */}
        <div className=" flexColStart c-left">
          <span className="orangeText">Contact Us</span>
          <span className="secondaryText">
            We are always ready to help you by providing the best service.
            <br /> We believe a good place to live can make your life better.
          </span>
          <div className="flexColStart contactModes">
            {/* First Row  */}
            <div className="flexStart row">
              {/* First Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Call</span>
                    <span className="secondaryText">0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Call Now</div>
              </div>
              {/* Second Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <BsChatDotsFill size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Chat</span>
                    <span className="secondaryText">0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Chat Now</div>
              </div>
            </div>
            {/* Second Row  */}
            <div className="flexStart row">
              {/* Third Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <MdVideoCall size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Video Call</span>
                    <span className="secondaryText">0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Video Call Now</div>
              </div>
              {/* Forth Mode  */}
              <div className="flexColCenter mode">
                <div className="flexStart">
                  <div className="flexCenter icon">
                    <HiChatBubbleBottomCenterText size={25} />
                  </div>
                  <div className="flexColStart detail">
                    <span className="primaryText">Message</span>
                    <span className="secondaryText">0123456789</span>
                  </div>
                </div>
                <div className="flexCenter button">Message Now</div>
              </div>
            </div>
          </div>
        </div>
        {/* Right Side  */}
        <div className="c-right">
          <div className="image-container">
            <img src="./r1.jpg" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from "react";
import "./Property.css";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "@/utils/api.js";
import { PuffLoader } from "react-spinners";
import { AiFillHeart } from "react-icons/ai";
import { FaShower } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiSolidCarGarage } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import Map from "@/components/Map/Map.jsx";
const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );
  if (isError) {
    return (
      <div className="wrapper">
        <span>Error while fetching data. Try it later. Thanks</span>
      </div>
    );
  }
  if (isLoading) {
    return (
      <div
        className="wrapper flexCenter"
        style={{
          height: "60vh",
        }}
      >
        <PuffLoader
          height="80"
          width="80"
          radius={1}
          color="#4066ff"
          aria-level="puff-loading"
        />
      </div>
    );
  }

  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* like button  */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        {/* Image  */}
        <img src={data?.image} alt="home image" />
        <div className="flexCenter property-details">
          {/* left side  */}
          <div className="flexColStart left">
            {/* head  */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "1.5rem" }}>
                ${data?.price}
              </span>
            </div>
            {/* facilities  */}
            <div className="flexStart facilities">
              {/* Bathrooms  */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span>{data?.facilities?.bathrooms} Bathrooms</span>
              </div>
              {/* Bedrooms  */}
              <div className="flexStart facility">
                <MdOutlineBedroomParent size={20} color="#1F3E72" />
                <span>{data?.facilities?.bedrooms} Bedrooms</span>
              </div>
              {/* Car parking  */}
              <div className="flexStart facility">
                <BiSolidCarGarage size={20} color="#1F3E72" />
                <span>{data?.facilities?.parkings} Parkings</span>
              </div>
            </div>
            {/* Description  */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>
            {/* address  */}
            <div className="flexStart" style={{ gap: "1rem" }}>
              <MdLocationOn size={25} />
              <span className="secondaryText">
                {data?.address}, {data?.city}, {data?.country}
              </span>
            </div>
            {/* booking button  */}
            <button className="button">Book Your Visit</button>
          </div>
          {/* right side  */}
          <div className="map">
            <Map
              address={data?.address}
              city={data?.city}
              country={data?.country}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;

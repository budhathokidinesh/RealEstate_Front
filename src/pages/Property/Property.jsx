import React, { useContext, useState } from "react";
import "./Property.css";
import { useMutation, useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "@/utils/api.js";
import { PuffLoader } from "react-spinners";
import { FaShower } from "react-icons/fa6";
import { MdOutlineBedroomParent } from "react-icons/md";
import { BiSolidCarGarage } from "react-icons/bi";
import { MdLocationOn } from "react-icons/md";
import Map from "@/components/Map/Map.jsx";
import useAuthCheck from "@/components/hooks/useAuthCheck.jsx";
import { useAuth0 } from "@auth0/auth0-react";
import BookingModel from "@/components/BookingModel/BookingModel";
import UserDetailContext from "@/context/UserDetailContext.js";
import { Button } from "@mantine/core";
import { toast } from "react-toastify";
import { removeBooking } from "@/utils/api.js";
import Heart from "@/components/Heart/Heart.jsx";

const Property = () => {
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];

  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );
  const [modelOpened, setModelOpened] = useState(false);
  const { validateLogin } = useAuthCheck();
  const { user } = useAuth0();

  const {
    userDetails: { token, bookings },
    setUserDetails,
  } = useContext(UserDetailContext);

  const { mutate: cancelBooking, isLoading: cancelling } = useMutation({
    mutationFn: () => removeBooking(id, user?.email, token),
    onSuccess: () => {
      setUserDetails((prev) => ({
        ...prev,
        bookings: prev.bookings.filter((booking) => booking?.id !== id),
      }));
      toast.success("Booking cancelled", { position: "bottom-right" });
    },
  });

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
          <Heart id={id} />
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
            {bookings?.map((booking) => booking.id).includes(id) ? (
              <>
                <Button
                  variant="outlne"
                  w={"100%"}
                  color="red"
                  onClick={() => cancelBooking()}
                  disabled={cancelling}
                >
                  <span>Cancel Booking</span>
                </Button>
                <span>
                  Your visit is already booked for this date{" "}
                  {bookings?.filter((booking) => booking?.id === id)[0].date}
                </span>
              </>
            ) : (
              <button
                className="button"
                onClick={() => {
                  validateLogin() && setModelOpened(true);
                }}
              >
                Book Your Visit
              </button>
            )}

            {/* Booking Model  */}
            <BookingModel
              opened={modelOpened}
              setOpened={setModelOpened}
              propertyId={id}
              email={user?.email}
            ></BookingModel>
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

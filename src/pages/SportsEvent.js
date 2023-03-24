import React from "react";
import Navbar from "../components/Navbar";
import SportCard from "../components/SportCard";

const SportsEvents = () => {
  return (
    <>
      <Navbar />
      <div className="container d-flex justify-content-center">
        <h1 className="event-heading">SPORTS</h1>
      </div>
      <SportCard />
    </>
  );
};

export default SportsEvents;

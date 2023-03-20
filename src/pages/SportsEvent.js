import React from "react";
import Navbar from "../components/Navbar";
import SportCard from "../components/SportCard";

const SportsEvents = () => {
  return (
    <>
      {/* <Design /> */}
      <Navbar />

      {/* <div style={{textAlign:'center',marginTop:'70px'}}>
      <h1 style={{color:'white', fontSize: '6rem', fontWeight: '400' }} >EVENTS</h1>
      </div> */}

      <SportCard />
    </>
  );
};

export default SportsEvents;

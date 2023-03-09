import React from "react";
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Design from "../components/Design";

const Events = () => {
  return (
    <>
      <Design />
      <Navbar />

      {/* <div style={{textAlign:'center',marginTop:'70px'}}>
      <h1 style={{color:'white', fontSize: '6rem', fontWeight: '400' }} >EVENTS</h1>
      </div> */}

      <Card />
    </>
  );
};

export default Events;

import React from "react";
import Navbar from "../components/Navbar";
import Design from "../components/Design";

const Calander = () => {
  return (
    <>
      <Design />
      <Navbar />
      <div style={{ textAlign: "center" }}>
        <h1 style={{ color: "white" }}>Calender</h1>
      </div>
    </>
  );
};

export default Calander;

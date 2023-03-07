import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Registration.css";
import Design from "../components/Design";

const Registration = () => {
  return (
    <>
      <Design />
      <Navbar />
      <div id="reg-tag">
        <h1 id="title-reg">REGISTRATION</h1>
      </div>
      <Footer />
    </>
  );
};

export default Registration;

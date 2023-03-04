import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Registration.css";

const Registration = () =>
{
    return(
        <>
        <Navbar />
		<div id="reg-tag"><h1 id="title-reg">REGISTRATION</h1></div>
        <Footer /> 
		</>
    );        
};

export default Registration;
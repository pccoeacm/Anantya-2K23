import React, { useState } from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import Data from "../API/card-data";
import Design from "../components/Design";
import { NavLink } from "react-router-dom";

const About = ({ ids }) => {
  return (
    <>
      <Design />
      <Navbar />

      {Data.filter((item) => item.id == ids).map((elem) =>{
        return(
          <>
          <div
        className="row about-page"
        style={{ margin: "5% 3%", display: "flex", justifyContent: "center" }}
      >
        <div className="bg-1-gradient"></div>
        <div className="card col-lg-4">
          <div style={{ textAlign: "center" }}>
            <img
              src="https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg"
              alt="image"
            />
          </div>
        </div>
        <div className="col-lg-8 events-details-container">
          <div style={{ textAlign: "center" }}>
            <h1>{elem.event_name}</h1>
          </div>

          <div style={{ margin: "5%" }}>
            <h2>Description</h2>
          </div>

          <div className="event-details-description">
            <p className="description-para-tag">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              libero non laborum repudiandae? Dolorum aspernatur voluptatibus
              accusantium officiis numquam, asperiores consectetur temporibus,
              neque voluptate mollitia voluptates delectus dolores magni magnam.
            </p>
          </div>

          <div className="event-details-description">
            <div className="row description-para-tag">
              <div className="col-lg-4">
                <h2>Type</h2>
                <p>Team / Solo</p>
              </div>
              <div className="col-lg-4">
                <h2>Prizes</h2>
                <p>Rank 1: 1000</p>
                <p>Rank 2: 500</p>
                <p>Rank 3: 300</p>
              </div>
              <div className="col-lg-4">
                <h2>Fees</h2>
                <p>Free</p>
              </div>
            </div>
          </div>


          
          <NavLink to={elem.path} className="nav-link">
									<span className="navitem"><button>Register</button></span>
					</NavLink>


        </div>
      </div>
          </>
        );
      })}
        
    
    
      
     
    </>
  );
};

export default About;

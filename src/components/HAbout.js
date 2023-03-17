import React from "react";
import ISS from "./ISS";

const HAbout = () => {
    return (
        <div className="container about-main-div">
            <div className="d-flex justify-content-between">
                <div className="row rounded-4 d-flex justify-content-between">
                    <h1 className="about-heading rounded-4">ANANTYA</h1>
                </div>
                <div className="model">{/* <ISS /> */}</div>
            </div>
            <div className="row rounded-4 d-flex justify-content-center">
                <p className="about-desc rounded-4">
                    Anantya is a technology and innovation event organized by
                    the Department of Computer Engineering, PCCoE.
                    <br />
                    <br />
                    With 13 different technical and non-technical events,
                    participants can showcase their skills and knowledge in a
                    competitive yet friendly environment. Anantya is designed to
                    test participants' technical expertise, creativity, and
                    critical thinking skills, pushing them to their limits and
                    beyond. <br />
                    <br />
                    There are prizes to be won, including cash and exciting
                    gadgets, but even those who don't win can benefit from the
                    experience. If you're an undergraduate student with a
                    passion for technology and innovation, don't miss out on
                    Anantya. Check out the brochure and get ready to create,
                    hack, innovate, and show off your talents!
                </p>
                <button className="button-64">
                    <span className="text">DOWNLOAD BORCHURE</span>
                </button>
            </div>
        </div>
    );
};

export default HAbout;

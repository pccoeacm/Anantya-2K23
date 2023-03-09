import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { HomeCss } from "../styles";
import { aboutBG, astronaut } from "../assets";
import Design from "../components/Design";

const Home = () => {
  return (
    <>
      <Design />
      <Navbar />
      <div className="bg-1-gradient">.</div>
      <div className="bg-2-gradient">.</div>
      <img src={astronaut} className="astronaut" />
      <div className="about-box">
        <h1 className="about-anantya">ANANTYA</h1>
        <p className="about-anantya-desc">
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock, a Latin professor at
          Hampden-Sydney College in Virginia, looked up one of the more obscure
          Latin words, consectetur, from a Lorem Ipsum passage, and going
          through the cites of the word in classical literature, discovered the
          undoubtable source. Lorem Ipsum comes from sections 1.10.32 and
          1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and
          Evil) by Cicero, written in 45 BC. This book is a treatise on the
          theory of ethics, very popular during the Renaissance. The first line
          of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in
          section 1.10.32.
        </p>
        <div className="about-inside-box">
          <img src={aboutBG} className="aboutBg" />
        </div>
      </div>
      <div className="our-sponsors">
        <h1 className="our-sponsors-heading">OUR SPONSORS</h1>
        <div className="our-sponsors-card"></div>
      </div>
      <div className="bg-3-gradient">.</div>
      <Footer />
    </>
  );
};

export default Home;

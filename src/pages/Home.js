import React from "react";
import { HomeAbCSS } from "../styles";
import { Navbar, Sponsorcard, HAbout, ISS, Design } from "../components";
import MainLogo from "../components/MainLogo";

const Home = () => {
    return (
        <div>
            <MainLogo />
            <div>
                <section id="about">
                    <HAbout />
                </section>
                <div className="container sponsors-main-div">
                    <div className="row">
                        <h1 className="text-center sponsors-heading">
                            OUR SPONSORS
                        </h1>
                    </div>
                    <Sponsorcard />
                </div>
            </div>
        </div>
    );
};

export default Home;

import React from "react";
import { HomeAbCSS } from "../styles";
import { Navbar, Sponsorcard, HAbout, ISS } from "../components";
import { mainLogo, mainLogoM } from "../assets";

const Home = () => {
	return (
		<div>
			<Navbar />
			<div className="container main-logo">
				<img src={mainLogo} className="img-fluid logo-img" />
				<img src={mainLogoM} className="img-fluid logo-img-m" />
			</div>
			<HAbout />
			<div className="container sponsors-main-div">
				<div className="row">
					<h1 className="text-center sponsors-heading">OUR SPONSORS</h1>
				</div>
				<Sponsorcard />
				{/* <div className="row d-flex justify-content-center">
					<div className="col-6 col-md-4 col-sm-6"></div>
				</div> */}
			</div>
		</div>
	);
};

export default Home;

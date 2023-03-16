import React from "react";
import { HomeCss } from "../styles";
import { Navbar, Sponsorcard, About, ISS } from "../components";

const Home = () => {
	return (
		<div>
			<Navbar />
			<About />
			<div className="container sponsors-main-div">
				<div className="row">
					<h1 className="text-center sponsors-heading">OUR SPONSORS</h1>
				</div>
				<div className="row d-flex justify-content-center">
					<div className="col-6 col-md-4 col-sm-6">
						<Sponsorcard />
					</div>
					<div className="col-6 col-md-4 col-sm-6">
						<Sponsorcard />
					</div>
					<div className="col-6 col-md-4 col-sm-6">
						<Sponsorcard />
					</div>
					<div className="col-6 col-md-4 col-sm-6">
						<Sponsorcard />
					</div>
					<div className="col-6 col-md-4 col-sm-6">
						<Sponsorcard />
					</div>
					<div className="col-6 col-md-4 col-sm-6">
						<Sponsorcard />
					</div>
					<div className="col-6 col-md-4 col-sm-6">
						<Sponsorcard />
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;

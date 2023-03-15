import React from "react";
import { HomeCss } from "../styles";
import { Design, Footer, ISS, Navbar, Sponsorcard, About } from "../components";
import { astronaut, aboutBG, aboutBGM } from "../assets";

const Home = () => {
	return (
		<div>
			<Navbar />
			{/* <ISS /> */}
			{/* <div className="container about-section">
				<div className="grid-main">
					<div className="about-bg">
						<img src={aboutBG} className="img-fluid about-bg-img" />
						<img src={aboutBGM} className="img-fluid about-bgm-img" />
					</div>
					<div className="heading-cont">
						<div className="about-heading">
							<h1 className="about-anantya">ANANTYA</h1>
						</div>
						<div className="about-desc-div">
							<p className="about-desc-content">
								Contrary to popular belief, Lorem Ipsum is not simply random
								text. It has roots in a piece of classical Latin literature from
								45 BC, making it over 2000 years old. Richard McClintock, a
								Latin professor at Hampden-Sydney College in Virginia, looked up
								one of the more obscure Latin words, consectetur, from a Lorem
								Ipsum passage, and going through the cites of the word in
								classical literature, discovered the undoubtable source. Lorem
								Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus
								Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero,
								written in 45 BC. This book is a treatise on the theory of
								ethics, very popular during the Renaissance. The first line of
								Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line
								in section 1.10.32.
							</p>
						</div>
			{/* <ISS /> */}
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

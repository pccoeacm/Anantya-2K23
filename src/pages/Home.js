import React from "react";
import { HomeCss } from "../styles";
import { Design, Footer, ISS, Navbar } from "../components";
import { astronaut, aboutBG } from "../assets";

const Home = () => {
	return (
		<div>
			<Navbar />
			<ISS />
			<div className="bg-gradients">
				<div className="bg-gradient-1">.</div>
				<div className="bg-gradient-2">.</div>
				<div className="bg-gradient-3">.</div>
				<div className="bg-gradient-4">.</div>
			</div>
			{/*<div className="container">
				<img src={astronaut} className="astro-png" />
				<div className="container-fluid anantya-title-bg">
					<div className="bg-image">
						<img src={aboutBG} className="about-bg" />
					</div>
					<h1 className="display-1 anantya-title">ANANTYA</h1>
					<p className="anantya-para">
						Contrary to popular belief, Lorem Ipsum is not simply random text.
						It has roots in a piece of classical Latin literature from 45 BC,
						making it over 2000 years old. Richard McClintock, a Latin professor
						at Hampden-Sydney College in Virginia, looked up one of the more
						obscure Latin words, consectetur, from a Lorem Ipsum passage, and
						going through the cites of the word in classical literature,
						discovered the undoubtable source. Lorem Ipsum comes from sections
						1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes
						of Good and Evil) by Cicero, written in 45 BC. This book is a
						treatise on the theory of ethics, very popular during the
						Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
						amet..", comes from a line in section 1.10.32.
					</p>
				</div>
			</div> */}
		</div>
	);
};

export default Home;

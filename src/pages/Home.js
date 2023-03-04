import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Home.css";
import { astronaut } from "../assets";

const Home = () => {
	return (
		<>
			<Navbar />
			<div className="bg-1-gradient">.</div>
			<div className="bg-2-gradient">.</div>
			<img src={astronaut} className="astronaut" />
			<div className="bg-3-gradient">.</div>

			{/* <Footer /> */}
		</>
	);
};

export default Home;

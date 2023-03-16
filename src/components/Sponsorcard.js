import React from "react";
import { aboutBGM } from "../assets";
import { sponsorCss } from "../styles";

const Sponsorcard = ({ logo, sname }) => {
	return (
		<div className="container sponsor-card">
			<img src={aboutBGM} className="img-fluid sponsor-card-img" />
			<h3 className="sponsor-name">PCCOE</h3>
		</div>
	);
};

export default Sponsorcard;

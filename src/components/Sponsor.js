import React from "react";
import { budhani, mfive } from "../assets";
import "./Sponsor.css";
import { NavLink, Link } from "react-router-dom";

const Sponsor = () => {
	return (
		<>
			<div className="row sponsors-container-main">
				<div className="container sponsor-card col-lg-3 col-md-6 ">
					<img src={budhani} className="img-fluid sponsor-card-img" />
				</div>
				<div className="container sponsor-card col-lg-3 col-md-6 ">
					<img src={mfive} className="img-fluid sponsor-card-img" />
				</div>
			</div>
		</>
	);
};

export default Sponsor;

import React from "react";
import Navbar from "../components/Navbar";
import "../styles/About.css";
import Data from "../API/card-data";
import { NavLink } from "react-router-dom";

const About = ({ ids }) => {
	return (
		<>
			{/* <Design /> */}
			<Navbar />

			{Data.filter((item) => item.id == ids).map((elem) => {
				return (
					<>
						<div
							className="row about-page"
							style={{
								margin: "5% 3%",
								display: "flex",
								justifyContent: "center",
							}}>
							<div className="bg-1-gradient"></div>
							<div className="card col-lg-4">
								<div style={{ textAlign: "center" }}>
									<img
										src="https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg"
										alt="image"
									/>
								</div>
							</div>
							<div className="col-lg-8 events-details-container">
								<div style={{ textAlign: "center" }}>
									<h1>{elem.event_name}</h1>
								</div>

								<div style={{ margin: "5%" }}>
									<h2>Description</h2>
								</div>

								<div className="event-details-description">
									<p className="description-para-tag">
										{elem.detailed_description}
										{/* Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
              libero non laborum repudiandae? Dolorum aspernatur voluptatibus
              accusantium officiis numquam, asperiores consectetur temporibus,
              neque voluptate mollitia voluptates delectus dolores magni magnam. */}
									</p>
								</div>

								<div className="event-details-description">
									<div className="row description-para-tag">
										<div className="col-lg-4">
											<h2>Type</h2>
											<p>{elem.Type}</p>
										</div>
										<div className="col-lg-4">
											<h2>Prizes</h2>
											<p>First Prize: {elem.prize1}</p>
											<p>Second Prize: {elem.prize2}</p>
											<p>Third Price: {elem.prize3}</p>
										</div>
										<div className="col-lg-4">
											<h2>Faculty Head</h2>
											<p> {elem.faculty} </p>
											<h3>Student Cordinator</h3>
											<p>
												{" "}
												{elem.studn1}: {elem.scontact1}{" "}
											</p>
											<p>
												{elem.studn2}: {elem.scontact2}
											</p>
										</div>
									</div>

									<div className="row description-para-tag">
										<div className="col-lg-8">
											<h2>Rules:</h2>
											<ul>
												<li>
													Detailed rules can be viewed here:{" "}
													<a href="#">Rules </a>
												</li>
												<li>{elem.rule1}</li>
												<li> {elem.rule2} </li>
												<li> {elem.rule3} </li>
												<li> {elem.rule4} </li>
												<li> {elem.rule5} </li>
												<li> {elem.rule6} </li>
											</ul>
										</div>

										<div className="col-lg-4">
											<h2>Fees</h2>
											<p>*Free for PCCOE Students</p>
											<h4>Registration FEE {elem.fee}</h4>
										</div>
									</div>
								</div>

								<NavLink to={elem.path} className="nav-link">
									<span className="navitem">
										<button className="offset">Register</button>
									</span>
								</NavLink>
							</div>
						</div>
					</>
				);
			})}
		</>
	);
};

export default About;

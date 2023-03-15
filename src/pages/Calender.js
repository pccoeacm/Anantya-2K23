import { React, useState } from "react";
import { CalendarCss } from "../styles";
import { Design, Footer, Navbar } from "../components";

const Calender = () => {
	const d = new Date();
	var hour = false;
	const currHour = d.getHours();

	if (currHour >= 10 && currHour <= 11) {
		hour = true;
	}

	return (
		<>
			<Navbar />
			<div className="d-flex flex-column">
				<h1 className="text-fluid text-center calendar-heading">CALENDAR</h1>
				<div className="d-flex flex-column">
					<h2 className="text-fluid text-center day">DAY 1</h2>
					<div className="timeline-main">
						<div className="gantt-chart">
							<div className="Hour H1">
								<p className="hour-para">09:00AM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">10:00AM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">11:00AM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">12:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">01:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">02:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">03:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">04:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">05:00PM</p>
							</div>
							<div className="Hour H10">
								<p className="hour-para">06:00PM</p>
							</div>

							<div className={`Event Event1 ${hour && "Event1-active"}`}>
								<p className="hour-para">Short</p>
							</div>
							<div className="Event Event2">
								<p className="hour-para">Long long int</p>
							</div>
							<div className="Event Event3">
								<p className="hour-para">long long very long int</p>
							</div>
							<div className="Event Event4">
								<p className="hour-para">usigned int</p>
							</div>
							<div className="Event Event5">
								<p className="hour-para">short event</p>
							</div>
							<div className="Event Event6">
								<p className="hour-para">felicitation done here</p>
							</div>
						</div>
					</div>
				</div>

				<div className="d-flex flex-column day2">
					<h2 className="text-fluid text-center day">DAY 2</h2>
					<div className="timeline-main">
						<div className="gantt-chart">
							<div className="Hour H1">
								<p className="hour-para">09:00AM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">10:00AM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">11:00AM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">12:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">01:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">02:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">03:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">04:00PM</p>
							</div>
							<div className="Hour">
								<p className="hour-para">05:00PM</p>
							</div>
							<div className="Hour H10">
								<p className="hour-para">06:00PM</p>
							</div>

							<div className="Event Event7">
								<p className="hour-para">Short</p>
							</div>
							<div className="Event Event8">
								<p className="hour-para">Long long int</p>
							</div>
							<div className="Event Event9">
								<p className="hour-para">long long very long int</p>
							</div>
							<div className="Event Event10">
								<p className="hour-para">usigned int</p>
							</div>
							<div className="Event Event11">
								<p className="hour-para">short event</p>
							</div>
							<div className="Event Event12">
								<p className="hour-para">felicitation done here</p>
							</div>
						</div>
					</div>
				</div>
			</div>
			
		</>
	);
};

export default Calender;

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
            <div className="d-flex flex-column" id="calendar-page">
                <h1 className="text-fluid text-center calendar-heading">
                    CALENDAR
                </h1>
                <div className="d-flex flex-column day1">
                    <h2 className="text-fluid text-center day">DAY 1</h2>
                    <div className="timeline-main">
                        <div className="gantt-chart">
                            <div className="Hour H1">
                                <p className="hour-para">08:00AM</p>
                            </div>
                            <div className="Hour H2">
                                <p className="hour-para">09:00AM</p>
                            </div>
                            <div className="Hour H3">
                                <p className="hour-para">10:00AM</p>
                            </div>
                            <div className="Hour H4">
                                <p className="hour-para">11:00AM</p>
                            </div>
                            <div className="Hour H5">
                                <p className="hour-para">12:00PM</p>
                            </div>
                            <div className="Hour H6">
                                <p className="hour-para">01:00PM</p>
                            </div>
                            <div className="Hour H7">
                                <p className="hour-para">02:00PM</p>
                            </div>
                            <div className="Hour H8">
                                <p className="hour-para">03:00PM</p>
                            </div>
                            <div className="Hour H9">
                                <p className="hour-para">04:00PM</p>
                            </div>
                            <div className="Hour H10">
                                <p className="hour-para">05:00PM</p>
                            </div>
                            <div className="Hour H11">
                                <p className="hour-para">06:00PM</p>
                            </div>

                            <div
                                className={`Event Event-1-d1 ${
                                    hour && "Event1-active"
                                }`}
                            >
                                <p className="hour-para">CRICKET</p>
                            </div>
                            <div className="Event Event-2-d1">
                                <p className="hour-para">CODIGO R1</p>
                            </div>
                            <div className="Event Event-3-d1">
                                <p className="hour-para">INAGURATION</p>
                            </div>
                            <div className="Event Event-4-d1">
                                <p className="hour-para">BABYCON</p>
                            </div>
                            <div className="Event Event-5-d1">
                                <p className="hour-para">HACKATHON R1</p>
                            </div>
                            <div className="Event Event-6-d1">
                                <p className="hour-para">CODIGO R2</p>
                            </div>
                            <div className="Event Event-7-d1">
                                <p className="hour-para">STARTUP MANIA</p>
                            </div>
                            <div className="Event Event-8-d1">
                                <p className="hour-para">IPL AUCTION</p>
                            </div>
                            <div className="Event Event-9-d1">
                                <p className="hour-para">MOVIE TRIVIA</p>
                            </div>
                            <div className="Event Event-10-d1">
                                <p className="hour-para">PERPLEXO</p>
                            </div>
                            <div className="Event Event-11-d1">
                                <p className="hour-para">CAT</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="d-flex flex-column day2">
                    <h2 className="text-fluid text-center day">DAY 2</h2>
                    <div className="timeline-main">
                        <div className="gantt-chart">
                            <div className="Hour H1">
                                <p className="hour-para">08:00AM</p>
                            </div>
                            <div className="Hour H2">
                                <p className="hour-para">09:00AM</p>
                            </div>
                            <div className="Hour H3">
                                <p className="hour-para">10:00AM</p>
                            </div>
                            <div className="Hour H4">
                                <p className="hour-para">11:00AM</p>
                            </div>
                            <div className="Hour H5">
                                <p className="hour-para">12:00PM</p>
                            </div>
                            <div className="Hour H6">
                                <p className="hour-para">01:00PM</p>
                            </div>
                            <div className="Hour H7">
                                <p className="hour-para">02:00PM</p>
                            </div>
                            <div className="Hour H8">
                                <p className="hour-para">03:00PM</p>
                            </div>
                            <div className="Hour H9">
                                <p className="hour-para">04:00PM</p>
                            </div>
                            <div className="Hour H10">
                                <p className="hour-para">05:00PM</p>
                            </div>
                            <div className="Hour H11">
                                <p className="hour-para">06:00PM</p>
                            </div>

                            <div
                                className={`Event Event-1-d2 ${
                                    hour && "Event1-active"
                                }`}
                            >
                                <p className="hour-para">WEBIT</p>
                            </div>
                            <div className="Event Event-2-d2">
                                <p className="hour-para">CRICKET(W)</p>
                            </div>
                            <div className="Event Event-3-d2">
                                <p className="hour-para">HACKATHON R2</p>
                            </div>
                            <div className="Event Event-4-d2">
                                <p className="hour-para">FOOTBALL</p>
                            </div>
                            <div className="Event Event-5-d2">
                                <p className="hour-para">SHARLOCK</p>
                            </div>
                            <div className="Event Event-6-d2">
                                <p className="hour-para">G20 R1</p>
                            </div>
                            <div className="Event Event-7-d2">
                                <p className="hour-para">ALPHA ANALYST</p>
                            </div>
                            <div className="Event Event-8-d2">
                                <p className="hour-para">G20 R2</p>
                            </div>
                            <div className="Event Event-9-d2">
                                <p className="hour-para">VALEDICTORY</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Calender;

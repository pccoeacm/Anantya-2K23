import { React, useState } from "react";
import { CalendarCss } from "../styles";
import { Design, Footer, Navbar } from "../components";

const Calender = () => {
  const d = new Date();
  // "March 27, 2023 11:00"
  const currTime = d.getHours() * 100 + d.getMinutes();
  var day1 = false;
  var day2 = false;

  if (d.getDate() == 27) day1 = true;
  else if (d.getDate() == 28) day2 = true;

  return (
    <>
      <Navbar />
      <div className="d-flex flex-column" id="calendar-page">
        <h1 className="text-fluid text-center calendar-heading">CALENDAR</h1>
        <h2 className="timeline-heading">
          These are tentative timelines, they are subjected to change.
        </h2>

        <div className="d-flex flex-column day1">
          <h2 className="text-fluid text-center day">27th March</h2>
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

              {/* <div
                  className={`Event Event-1-d1 ${
                    day1 &&
                    currTime >= 800 &&
                    currTime < 930 &&
                    "Event-1-d1-active"
                  }`}
                >
                  <p className="hour-para">CRICKET</p>
                </div> */}
              <div
                className={`Event Event-2-d1 ${
                  day1 &&
                  currTime >= 900 &&
                  currTime < 1030 &&
                  "Event-2-d1-active"
                }`}
              >
                <p className="hour-para">CODIGO R1</p>
              </div>
              <div
                className={`Event Event-3-d1 ${
                  day1 &&
                  currTime >= 1000 &&
                  currTime < 1100 &&
                  "Event-3-d1-active"
                }`}
              >
                <p className="hour-para">INAUGURATION</p>
              </div>
              <div
                className={`Event Event-4-d1 ${
                  day1 &&
                  currTime >= 1100 &&
                  currTime < 1600 &&
                  "Event-4-d1-active"
                }`}
              >
                <p className="hour-para">BABYCON</p>
              </div>
              <div
                className={`Event Event-5-d1 ${
                  day1 &&
                  currTime >= 1100 &&
                  currTime < 1430 &&
                  "Event-5-d1-active"
                }`}
              >
                <p className="hour-para">HACKATHON R1</p>
              </div>
              <div
                className={`Event Event-6-d1 ${
                  day1 &&
                  currTime >= 1500 &&
                  currTime < 1700 &&
                  "Event-6-d1-active"
                }`}
              >
                <p className="hour-para">CODIGO R2</p>
              </div>
              <div
                className={`Event Event-7-d1 ${
                  day1 &&
                  currTime >= 1030 &&
                  currTime < 1430 &&
                  "Event-7-d1-active"
                }`}
              >
                <p className="hour-para">STARTUP MANIA</p>
              </div>
              <div
                className={`Event Event-8-d1 ${
                  day1 &&
                  currTime >= 1400 &&
                  currTime < 1800 &&
                  "Event-8-d1-active"
                }`}
              >
                <p className="hour-para">IPL AUCTION</p>
              </div>
              <div
                className={`Event Event-9-d1 ${
                  day1 &&
                  currTime >= 1200 &&
                  currTime < 1700 &&
                  "Event-8-d1-active"
                }`}
              >
                <p className="hour-para">MOVIE TRIVIA</p>
              </div>
              <div
                className={`Event Event-10-d1 ${
                  day1 &&
                  currTime >= 1100 &&
                  currTime < 1200 &&
                  "Event-10-d1-active"
                }`}
              >
                <p className="hour-para">PERPLEXO</p>
              </div>
              <div
                className={`Event Event-11-d1 ${
                  day1 &&
                  currTime >= 1100 &&
                  currTime < 1200 &&
                  "Event-11-d1-active"
                }`}
              >
                <p className="hour-para">CAT R1</p>
              </div>
              <div
                className={`Event Event-12-d1 ${
                  day1 &&
                  currTime >= 1400 &&
                  currTime < 1600 &&
                  "Event-11-d1-active"
                }`}
              >
                <p className="hour-para">CAT R2</p>
              </div>
            </div>
          </div>
        </div>

        <div className="d-flex flex-column day2">
          <h2 className="text-fluid text-center day">28th March</h2>
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
                  day2 &&
                  currTime >= 800 &&
                  currTime < 1500 &&
                  "Event-1-d2-active"
                }`}
              >
                <p className="hour-para">WEBBIT</p>
              </div>
              {/* <div
                  className={`Event Event-2-d2 ${
                    day2 &&
                    currTime >= 800 &&
                    currTime < 930 &&
                    "Event-2-d2-active"
                  }`}
                >
                  <p className="hour-para">CRICKET(W)</p>
                </div> */}
              <div
                className={`Event Event-3-d2 ${
                  day2 &&
                  currTime >= 1000 &&
                  currTime < 1600 &&
                  "Event-3-d2-active"
                }`}
              >
                <p className="hour-para">HACKATHON R2</p>
              </div>
              <div
                className={`Event Event-4-d2 ${
                  day2 &&
                  currTime >= 830 &&
                  currTime < 1000 &&
                  "Event-4-d2-active"
                }`}
              >
                <p className="hour-para">FOOTBALL</p>
              </div>
              <div
                className={`Event Event-5-d2 ${
                  day2 &&
                  currTime >= 1000 &&
                  currTime < 1500 &&
                  "Event-5-d2-active"
                }`}
              >
                <p className="hour-para">SHERLOCK</p>
              </div>
              <div
                className={`Event Event-6-d2 ${
                  day2 &&
                  currTime >= 900 &&
                  currTime < 1000 &&
                  "Event-6-d2-active"
                }`}
              >
                <p className="hour-para">G20 R1</p>
              </div>
              <div
                className={`Event Event-7-d2 ${
                  day2 &&
                  currTime >= 1200 &&
                  currTime < 1330 &&
                  "Event-7-d2-active"
                }`}
              >
                <p className="hour-para">ALPHA ANALYST</p>
              </div>
              <div
                className={`Event Event-8-d2 ${
                  day2 &&
                  currTime >= 900 &&
                  currTime < 1500 &&
                  "Event-8-d2-active"
                }`}
              >
                <p className="hour-para">G20 R2</p>
              </div>
              <div
                className={`Event Event-9-d2 ${
                  day2 &&
                  currTime >= 1600 &&
                  currTime < 1800 &&
                  "Event-9-d2-active"
                }`}
              >
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

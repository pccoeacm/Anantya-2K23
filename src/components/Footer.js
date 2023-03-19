import React from "react";
import { FooterCss } from "../styles";
import { NavLink } from "react-router-dom";

import {
  astronaut,
  locationPng,
  gmailPng,
  linkedinPng,
  twitterPng,
  instaPng,
  facebookPng,
  youtubePng,
  astroOnA,
} from "../assets";

const Footer = () => {
  return (
    <div className="container-fluid footer-main">
      <div className="row d-flex flex-sm-column flex-lg-row justfity-content-center align-items-center footer-main-row">
        <div className="col d-flex justify-content-center align-items-center">
          <img src={astroOnA} className="img-fluid footer-anantya-logo" />
        </div>
        <div className="col text-center footer-links-main">
          <div className="row d-flex row-gap-4">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273282807927!2d73.75944575028471!3d18.651728787270535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPCCOE%20-%20Pimpri%20Chinchwad%20College%20Of%20Engineering%20%7C%20Autonomous%20Engineering%20College%20in%20Pune!5e0!3m2!1sen!2sin!4v1679231613250!5m2!1sen!2sin"
              width="150"
              height="150"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="col-5 row-gap-3 footer-contact-us-div-col">
          <div className="row footer-contact-us-div">
            <p className="footer-contact-us">Contact Us:</p>
          </div>
          <div className="row">
            <div className="col-sm-2 d-flex justify-content-lg-end justify-content-sm-start">
              <a
                href="https://www.google.com/search?q=pccoepune&oq=pccoepune+&aqs=chrome.0.69i59j69i60j69i61j69i60l2.1751j0j1&sourceid=chrome&ie=UTF-8#"
                target="_blank"
              >
                <img
                  src={locationPng}
                  className="img-fluid footer-contact-icon"
                />
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.google.com/search?q=pccoepune&oq=pccoepune+&aqs=chrome.0.69i59j69i60j69i61j69i60l2.1751j0j1&sourceid=chrome&ie=UTF-8#"
                target="_blank"
                className="text-decoration-none"
              >
                <p className="footer-contact-text">
                  Pimpri Chinchwad College of Engineering, Pune
                </p>
              </a>
            </div>
          </div>
          <div className="row">
            <div className="col-sm-2 d-flex justify-content-lg-end justify-content-sm-start">
              <a
                href="mailto:acm@pccoepune.org?subject=Regarding Anantya 2023"
                target="_blank"
              >
                <img src={gmailPng} className="img-fluid footer-contact-icon" />
              </a>
            </div>
            <div className="col">
              <a
                href="mailto:acm@pccoepune.org?subject=Regarding Anantya 2023"
                target="_blank"
                className="footer-contact-text"
              >
                acm@pccoepune.org
              </a>
            </div>
          </div>
          <div className="row footer-icons-main">
            <div className="col">
              <a
                href="https://www.linkedin.com/company/pccoe-acm-student-chapter/"
                target="_blank"
              >
                <img
                  src={linkedinPng}
                  className="img-fluid footer-contact-us-icons"
                />
              </a>
            </div>
            <div className="col">
              <a href="https://twitter.com/pccoeacm" target="_blank">
                <img
                  src={twitterPng}
                  className="img-fluid footer-contact-us-icons"
                />
              </a>
            </div>
            <div className="col">
              <a href="https://www.instagram.com/pccoeacm/" target="_blank">
                <img
                  src={instaPng}
                  className="img-fluid footer-contact-us-icons"
                />
              </a>
            </div>
            <div className="col">
              <a href="https://www.facebook.com/pccoe.acm" target="_blank">
                <img
                  src={facebookPng}
                  className="img-fluid footer-contact-us-icons"
                />
              </a>
            </div>
            <div className="col">
              <a
                href="https://www.youtube.com/channel/UCY5ikWq8yG6bSS1W322M9iw"
                target="_blank"
              >
                <img
                  src={youtubePng}
                  className="img-fluid footer-contact-us-icons"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="row design-with-love">
        <p className="design-with-love-text">
          © Designed and developed with ❤️ by PCCOE students | Copyright ©2023
          All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default Footer;

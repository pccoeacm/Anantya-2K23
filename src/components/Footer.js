import React from "react";
import { FooterCss } from "../styles";
import {
	astronaut,
	locationPng,
	gmailPng,
	linkedinPng,
	twitterPng,
	instaPng,
	facebookPng,
	youtubePng,
} from "../assets";

const Footer = () => {
	return (
		<div className="container-fluid footer-main">
			<div className="row">
				<div className="col d-flex justify-content-center align-items-center border-end">
					<img src={astronaut} className="img-fluid footer-anantya-logo" />
				</div>
				<div className="col text-center footer-links-main border-end">
					<div className="row d-flex row-gap-4">
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							<a href="#" className="footer-links">
								Home&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</a>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							<a href="#" className="footer-links">
								About&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
							</a>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							<a href="#" className="footer-links">
								Events&nbsp;&nbsp;&nbsp;&nbsp;
							</a>
						</div>
						<div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6">
							<a href="#" className="footer-links">
								Calendar
							</a>
						</div>
					</div>
				</div>
				<div className="col-5 d-flex flex-column justify-content-center row-gap-3">
					<div className="row footer-contact-us-div">
						<p className="footer-contact-us">Contact Us:</p>
					</div>
					<div className="row">
						<div className="col-sm-2 d-flex justify-content-lg-end justify-content-sm-start">
							<a
								href="https://www.google.com/search?q=pccoepune&oq=pccoepune+&aqs=chrome.0.69i59j69i60j69i61j69i60l2.1751j0j1&sourceid=chrome&ie=UTF-8#"
								target="_blank">
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
								className="text-decoration-none">
								<p className="footer-contact-text">
									Pimpri Chinchwad College of Enginering, Pune
								</p>
							</a>
						</div>
					</div>
					<div className="row">
						<div className="col-sm-2 d-flex justify-content-lg-end justify-content-sm-start">
							<a
								href="mailto:acm@pccoepune.org?subject=Regarding Anantya 2023"
								target="_blank">
								<img src={gmailPng} className="img-fluid footer-contact-icon" />
							</a>
						</div>
						<div className="col">
							<a
								href="mailto:acm@pccoepune.org?subject=Regarding Anantya 2023"
								target="_blank"
								className="footer-contact-text">
								acm@pccoepune.org
							</a>
						</div>
					</div>
					<div className="row row-cols-lg-5 row-cols-md-3 row-cols-sm-2 row-gap-2 d-flex flex-lg-row flex-xs-column footer-icons-main">
						<div className="col">
							<a
								href="https://www.linkedin.com/company/pccoe-acm-student-chapter/"
								target="_blank">
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
								target="_blank">
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
					© Designed and developed with ❤️ by Web Team CESA | Copyright ©2023
					All rights reserved
				</p>
			</div>
		</div>
	);
};

export default Footer;

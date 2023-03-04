import React from "react";
import { FooterCss } from "../styles";

const Footer = () => {
	return (
		<div className="footer-main">
			<div>
				<div className="footer-anantya-year">
					<h1 className="footer-anantya">ANANTYA</h1>
					<h2 className="footer-year">2023</h2>
				</div>
				<div className="useFulLinks">
					<div className="useFulLinks-1">
						<a>Home &nbsp;</a>
						<a>About</a>
					</div>
					<div className="useFulLinks-2">
						<a>Events</a>
						<a>Calendar</a>
					</div>
				</div>
				<div className="design-with-love">
					<p>
						© Designed and developed with ❤️ by Web Team CESA | Copyright ©2023
						All rights reserved
					</p>
				</div>
			</div>
		</div>
	);
};

export default Footer;

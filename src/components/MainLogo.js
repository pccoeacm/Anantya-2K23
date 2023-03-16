import React, { useState, useEffect, useRef } from "react";
import BIRDS from "vanta/dist/vanta.fog.min";
import { mainLogo, mainLogoM } from "../assets";
import Design from "./Design";
import Navbar from "./Navbar";
// Make sure window.THREE is defined, e.g. by including three.min.js in the document head using a <script> tag

const MyComponent = (props) => {
	const [vantaEffect, setVantaEffect] = useState(null);
	const myRef = useRef(null);
	useEffect(() => {
		if (!vantaEffect) {
			setVantaEffect(
				BIRDS({
					el: myRef.current,
					mouseControls: true,
					touchControls: true,
					gyroControls: false,
					minHeight: 200.0,
					minWidth: 200.0,
					highlightColor: 0x70707,
					midtoneColor: 0x19007d,
					lowlightColor: 0x19e80c,
					baseColor: 0x0,
					blurFactor: 0.84,
					speed: 5,
				})
			);
		}
		return () => {
			if (vantaEffect) vantaEffect.destroy();
		};
	}, [vantaEffect]);
	return (
		<div ref={myRef} className="main-logo-bg">
			<Navbar className="z-20" />
			<div className="container main-logo z-20">
				<img src={mainLogo} className="img-fluid logo-img" />
				<img src={mainLogoM} className="img-fluid logo-img-m" />
				<a href="#about" className="explore-button-a">
					<button className="explore-btn">EXPLORE</button>
				</a>
			</div>
		</div>
	);
};

export default MyComponent;

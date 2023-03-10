import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Calender from "./pages/Calender";
import Registration from "./pages/Registration";
import React from "react";
import { Design, Footer, Navbar } from "./components";

function App() {
	return (
		<>
			<Design />
			<div className="bg-gradients">
				<div className="bg-gradient-1">&nbsp;</div>
				<div className="bg-gradient-2">&nbsp;</div>
				<div className="bg-gradient-3">&nbsp;</div>
				<div className="bg-gradient-4">&nbsp;</div>
			</div>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/events" element={<Events />} />
					<Route path="/calender" element={<Calender />} />
					<Route path="/registration" element={<Registration />} />

					<Route path="/about1" element={<About ids={1} />} />
					<Route path="/about2" element={<About ids={2} />} />
					<Route path="/about3" element={<About ids={3} />} />
					<Route path="/about4" element={<About ids={4} />} />
					<Route path="/about5" element={<About ids={5} />} />
					<Route path="/about6" element={<About ids={6} />} />
					<Route path="/about7" element={<About ids={7} />} />
				</Routes>
			</BrowserRouter>
			<Footer />
		</>
	);
}

export default App;

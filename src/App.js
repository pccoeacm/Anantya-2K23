import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Calender from "./pages/Calender";
import Registration from "./pages/Registration";
import React from "react";
import Home1 from "./pages/Home1";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home1 />} />
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
		</>
	);
}

export default App;

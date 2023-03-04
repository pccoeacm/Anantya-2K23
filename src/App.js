import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
import Calender from "./pages/Calender";
import Registration from "./pages/Registration";
import React from "react";

function App() {
	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/about" element={<About />} />
					<Route path="/events" element={<Events />} />
					<Route path="/calender" element={<Calender />} />
					<Route path="/registration" element={<Registration/>} />
					
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;

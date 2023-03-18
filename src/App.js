import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Events from "./pages/Events";
// import SportsEvent from "./pages/SportsEvent"
import Calender from "./pages/Calender";
import Registration from "./pages/Registration";
import React from "react";
import ScrollToTop from "./components/ScrollToTop";



import Webbit from './components/registerations/Webbit'
import Codigo from './components/registerations/Codigo'
import Perplexo from './components/registerations/Perplexo'
import Hackathon from './components/registerations/Hackathon'
import  Cosmic from './components/registerations/Cosmic'
import IplAuction from './components/registerations/IplAuction'
import StarupMenia from './components/registerations/StartupMenia'
import AlphaAnalyst from './components/registerations/AlphaAnalyst'
import G20x from './components/registerations/G20x'
import MovieTrivia from './components/registerations/MovieTrivia'
import Babyconn from './components/registerations/Babyconn'


import { Design, Footer, Navbar } from "./components";

function App() {
	return (
    <>
      <Design />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          {/* <Route path="/sportsevents" element={<SportsEvent />} /> */}
          <Route path="/calender" element={<Calender />} />
          <Route path="/registration" element={<Registration />} />

          <Route path="/about1" element={<About ids={1} />} />
          <Route path="/about2" element={<About ids={2} />} />
          <Route path="/about3" element={<About ids={3} />} />
          <Route path="/about4" element={<About ids={4} />} />
          <Route path="/about5" element={<About ids={5} />} />
          <Route path="/about6" element={<About ids={6} />} />
          <Route path="/about7" element={<About ids={7} />} />
          <Route path="/about8" element={<About ids={8} />} />
          <Route path="/about9" element={<About ids={9} />} />
          <Route path="/about10" element={<About ids={10} />} />
          <Route path="/about11" element={<About ids={11} />} />
          {/* <Route path="/about12" element={<SportsEvent />} /> */}
          <Route path="/about13" element={<About ids={13} />} />
          <Route path="/about14" element={<About ids={14} />} />

          <Route path="/webbit" element={<Webbit />} />
          <Route path="/codigo" element={<Codigo />} />
          <Route path="/perplexo" element={<Perplexo />} />
          <Route path="/hackathon" element={<Hackathon />} />
          <Route path="/cosmic_Aptitude_Test" element={<Cosmic />} />
          <Route path="/IPL_Auction" element={<IplAuction />} />
          <Route path="/Startup_Mania" element={<StarupMenia />} />
          <Route path="/The_Alpha_Analyst" element={<AlphaAnalyst />} />
          <Route path="/G20x_Anantya" element={<G20x />} />
          <Route path="/Movie_Trivia" element={<MovieTrivia />} />
          <Route path="/Babyconn" element={<Babyconn />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

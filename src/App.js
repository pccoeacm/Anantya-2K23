import './App.css';
import Navbar from './components/Navbar'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Events from './pages/Events'
import Calender from './pages/Calender'

function App() {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/events" element={<Events/>} />
          <Route path="/calender" element={<Calender/>} />
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;

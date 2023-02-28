import React from 'react'
import './Navbar.css'
import { NavLink} from "react-router-dom"

const Navbar = () => {
  return (
    <>
        <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
  <NavLink to="/" className='"navbar-brand title'>Anantya</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      {/* <span className="navbar-toggler-icon"></span> */}
      <img src="menu.png" alt="" className='menu-img' />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav  ms-auto">
      <li className="nav-item">
        <NavLink to="/" className='nav-link'><span className='navitem'>Home</span></NavLink>  
        </li>
        <li className="nav-item">
        <NavLink to="/about" className='nav-link'><span className='navitem'>About</span></NavLink> 
        </li>
        <li className="nav-item">
        <NavLink to="/events" className='nav-link'><span className='navitem'>Events</span></NavLink>
        </li>
        <li className="nav-item">
        <NavLink to="/calender" className='nav-link'><span className='navitem'>Calender</span></NavLink>
          {/* <a className="nav-link" href="#"></a> */}
        </li>
      </ul>
    </div>
  </div>
</nav>
    </>
  )
}

export default Navbar
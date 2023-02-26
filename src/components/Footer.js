import React from 'react'
import './Footer.css';
import {NavLink} from 'react-router-dom'

const Footer = () => {
  return (
    // <div className='footer' style={{ background: "linear-gradient(#1C5556, #00002F)" }}>
       
    // </div>

    <div className='row footer-main-container fixed-bottom'>
        <div className='col-lg-4 footer-col ' style={{textAlign:'center',paddingTop:'20px'}}>
           <h1>
             ANANTYA
             <span style={{display:'block',fontSize:'1.5rem'}}>2023</span>
           </h1>
        </div>
      <div className='col-lg-4 footer-col' style={{ textAlign: 'center', paddingTop: '20px' }}>
            <div className='row'>
          <div className='col-lg-6 footer-navlinks'>
            <NavLink to="/" className='nav-link'><span className='navitem '>Home</span></NavLink>  
               </div>
          <div className='col-lg-6 footer-navlinks'>
            <NavLink to="/about" className='nav-link'><span className='navitem '>About</span></NavLink> 
               </div>
            </div>
            <div className='row'>
          <div className='col-lg-6 footer-navlinks'>
            <NavLink to="/events" className='nav-link'><span className='navitem '>Events</span></NavLink>
                </div>
          <div className='col-lg-6 footer-navlinks'>
            <NavLink to="/calender" className='nav-link'><span className='navitem '>Calender</span></NavLink>
               </div>
        </div>
        </div>
      <div className='col-lg-4 footer-col'>
            <div className='contact-us-footer'>
          <p><strong>CONTACT US :</strong></p>
              <p>Pimpri Chinchwad College of Engineering</p>
              <p>acm@pccoepune.org</p>
              <div>
                
              </div>
            </div>
        </div>
    </div>

  )
}

export default Footer
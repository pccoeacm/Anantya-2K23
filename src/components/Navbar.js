import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { firebaseApp, useFirebase } from "../context/Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";

const auth = getAuth(firebaseApp);

const Navbar = () => {
  const firebase = useFirebase();
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Yes, user is logged in
        setUser(user);
      } else {
        // Use is logged out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if(user === null) {
    return (
      <>
        <nav className="navbar navbar-expand-lg sticky-top">
          <div className="container-fluid">
            <NavLink to="/" className="navbar-brand title">
              Anantya
            </NavLink>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              {/* <span className="navbar-toggler-icon"></span> */}
              <img src="menu.png" alt="" className="menu-img" />
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav  ms-auto">
                <li className="nav-item">
                  <NavLink to="/" className="nav-link">
                    <span className="navitem">Home</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/events" className="nav-link">
                    <span className="navitem">Events</span>
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink to="/calender" className="nav-link">
                    <span className="navitem">Calender</span>
                  </NavLink>
                  {/* <a className="nav-link" href="#"></a> */}
                </li>
                <li className="nav-item">
                  {/* <NavLink to="/Login" className="nav-link">
									<span className="navitem">LogIn</span>

								</NavLink> */}
                  <a
                    onClick={() => firebase.signupWithGoogle()}
                    href="#"
                    className="login-navitem navitem"
                  >
                    {/* <span></span>
									<span></span>
									<span></span>
									<span></span> */}
                    Log in
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }

	
	return (
    <>
      <div style={{backgroundColor:'#001936'}} className="sticky-top">
      <nav className="navbar navbar-expand-lg sticky-top">
        <div className="container-fluid">
          <NavLink to="/" className="navbar-brand title">
            Anantya
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            {/* <span className="navbar-toggler-icon"></span> */}
            <img src="menu.png" alt="" className="menu-img" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ms-auto">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">
                  <span className="navitem">Home</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/events" className="nav-link">
                  <span className="navitem">Events</span>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/calender" className="nav-link">
                  <span className="navitem">Calender</span>
                </NavLink>
                {/* <a className="nav-link" href="#"></a> */}
              </li>
              <li className="nav-item">
                {/* <NavLink to="/Login" className="nav-link">
									<span className="navitem">LogIn</span>

								</NavLink> */}
                <a
                  onClick={() => signOut(auth)}
                  href="#"
                  className="login-navitem navitem"
                >
                  {/* <span></span>
									<span></span>
									<span></span>
									<span></span> */}
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      </div>
    </>
  );
};

export default Navbar;

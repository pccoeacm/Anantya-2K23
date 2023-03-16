import React, { useState, useEffect } from "react";
import "../styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { firebaseApp, useFirebase } from "../context/Firebase";
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const auth = getAuth(firebaseApp);
// const firebase = useFirebase();

const Navbar = () => {
  const firebase = useFirebase();
  const [user, setUser] = useState(null);

  function handleSignInWithGoogle() {
    firebase
      .signupWithGoogle()
      .then((userCredential) => {
        alert("successfully logged in");
        const user = userCredential.user;
        console.log(user.displayName);
        toast.success(`Welcome ${user.displayName}!`, {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const notify = () => {
    toast.success("You are logged in !", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Yes, user is logged in
        setUser(user);

        // notify;
      } else {
        // Use is logged out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
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
                    onClick={() =>
                      firebase
                        .signupWithGoogle()
                        .then((userCredential) => {
                          // alert("successfully logged in");
                          const user = userCredential.user;
                          console.log(user.displayName);
                          toast.success(`Welcome ${user.displayName}!`, {
                            position: "top-right",
                            autoClose: 5000,
                            hideProgressBar: false,
                            closeOnClick: true,
                            pauseOnHover: true,
                            draggable: true,
                            progress: undefined,
                            theme: "dark",
                          });
                        })
                        .catch((error) => {
                          console.error(error);
                        })
                    }
                    href="#"
                    className="login-navitem navitem"
                  >
                    Log in
                  </a>
                  <ToastContainer />
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
                  
                  Log out
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;

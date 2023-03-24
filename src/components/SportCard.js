import React, { useState, useEffect } from "react";
import Data from "../API/sports_card-data";
import { NavLink } from "react-router-dom";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useFirebase, firebaseApp } from "../context/Firebase";

const auth = getAuth(firebaseApp);

const SportCard = () => {
  const firebase = useFirebase();

  const [data, setData] = useState(Data);
  const [user, setUser] = useState(null);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // Yes, user is logged in
        setUser(user);
      } else {
        // User is logged out
        console.log("You are logged out");
        setUser(null);
      }
    });
  }, []);

  if (user === null) {
    return (
      <>
        <div className="bg-1-gradient"></div>
        <div className="card-main-container row">
          <div className="bg-2-gradient">.</div>
          {data.map((elem) => {
            return (
              <div className="card col-lg-4">
                <img src={elem.image} alt="image" style={{ width: "100%" }} />
                <div className="data">
                  <h1 className="card-title">{elem.event_name}</h1>
                  <p className="card-subtitle">{elem.date}</p>
                  <p className="card-info">{elem.short_description}</p>
                  <div className="btn">
                    {/* <NavLink to={"/about" + elem.id} className="nav-link"> */}
                    <button
                      onClick={() => firebase.signupWithGoogle()}
                      className="raise"
                    >
                      LogIn
                    </button>
                    {/* </NavLink> */}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </>
    );
  }

  return (
    <>
      <div className="bg-1-gradient"></div>
      <div className="card-main-container row">
        <div className="bg-2-gradient">.</div>
        {data.map((elem) => {
          return (
            <div className="card col-lg-4">
              <img src={elem.image} alt="image" style={{ width: "100%" }} />
              <div className="data">
                <h1 className="card-title">{elem.event_name}</h1>
                <p className="card-subtitle">{elem.date}</p>
                <p className="card-info">{elem.short_description}</p>
                <div className="btn">
                  {/* <NavLink to={"/about" + elem.id} className="nav-link">
                    <button className="raise">Register</button>
                  </NavLink> */}
                  <a href={elem.formLink}
                      target={"_blank"}
                      style={{ color: "white" }}>
                    <button className="raise">Register</button>
                  </a>
                  {/* <button className="raise">
                    <a
                      href={elem.formLink}
                      target={"_blank"}
                      style={{ color: "white" }}
                    >
                      Register
                    </a>
                  </button> */}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default SportCard;

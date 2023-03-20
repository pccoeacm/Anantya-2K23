import React, { useState, useEffect } from "react";
import "./Webbit.css";
import Navbar from "../Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { codigo } from "../../assets/QR_codes/qr";
import { firebaseAuth, useFirebase } from "../../context/Firebase";

const EventRegister = () => {

  const firebase = useFirebase();
  const [userEmail, setUserEmail] = useState("");
  const [userName, setUserName] = useState("");

  useEffect(() => {
    // Get the email of the current user
    const currentUser = firebaseAuth.currentUser;
    if (currentUser) {
      setUserEmail(currentUser.email);
      setUserName(currentUser.displayName);
    }
  }, []);

  function HandleEventClick(e) {
    // ...
  }

  function HandleEventClick(e) {
    const formEle = document.getElementById("form");
    const formDatab = new FormData(formEle);
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbz1REOrZTvdfDlgIIUVNrPJ97tLpscTSCbsTPVNBgeyiHMX-EAHlBP1dd29iBLGdY4T/exec",
      {
        method: "POST",
        body: formDatab,
      }
    )
      .then((res) => {
        // console.log("Response status:", res.status);
        // alert('Successfully submitted');
        toast.success("Successfully submitted", {
          position: "top-center",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "dark",
        });
        document.getElementById("form").reset();
      })
      .catch((error) => {
        console.log(error);
      });

    toast.info("Wait while submission gets over!", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }

  const isPccoeEmail = userEmail.endsWith("@pccoepune.org");

  return (
    <>
      <Navbar />

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <div className="col-lg-7 col-md-12 col-12 form-step">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2 className="font-normal">Codigo 3.0</h2>

            <div id="personalInfo">
              <h1 id="personal-info">Team Lead Information</h1>
            </div>
          </div>

          <form
            action=""
            className="reg-form"
            onSubmit={(e) => HandleEventClick(e)}
            id="form"
          >
            <label id="lable-tag" for="name">
              Name{" "}
            </label>
            <input
              className="column"
              type="text"
              name="name"
              id="registeration-input"
              placeholder="Same as to be printed on Certificates"
              required
              value={userName}
            />

            <label id="lable-tag" className="" for="email">
              Email{" "}
            </label>
            <input
              type="email"
              className="column"
              name="email"
              id="registeration-input"
              placeholder="Preferred official email address"
              required
              value={userEmail}
            
            ></input>

            <label id="lable-tag" className="" for="contact">
              Contact{" "}
            </label>
            <input
              type="tel"
              className="column"
              name="contact"
              id="registeration-input"
              placeholder="Active whatsapp Number"
              required
            ></input>

            <label id="lable-tag" className="" for="college_name">
              College Name{" "}
            </label>
            <input
              type="text"
              className="column"
              name="college_name"
              id="registeration-input"
              placeholder="Enter Your College Name"
              required
            ></input>

            <label id="lable-tag" className="" for="college_name">
              Department{" "}
            </label>
            <input
              type="text"
              className="column"
              name="dept"
              id="registeration-input"
              placeholder="Enter Your Department"
              required
            ></input>

            <label id="lable-tag" className="" for="college_name">
              Roll Number{" "}
            </label>
            <input
              type="text"
              className="column"
              name="roll_no"
              id="registeration-input"
              placeholder="Ex: TYCOC233"
              required
            ></input>

            <label id="lable-tag" className="" for="academic_year">
              Academic Year{" "}
            </label>
            <input
              type="text"
              className="column"
              name="academic_year"
              id="registeration-input"
              placeholder="Eg. FE/SE/TE/BE"
              required
            ></input>

            <label id="lable-tag" className="" for="Hacker_Rank_Profile">
              HackerRank Profile
            </label>
            <input
              type="text"
              className="column"
              name="Hacker_Rank_Profile"
              id="registeration-input"
              placeholder="HackerRank Profile URL"
              required
            ></input>

            {isPccoeEmail && (
              <div>
                <label id="lable-tag" className="" for="">
                  Enter Your PRN
                </label>
                <input
                  type="text"
                  className="column"
                  name="PRN"
                  id="registeration-input"
                  placeholder="PRN"
                  required
                ></input>
              </div>
            )}

            {!isPccoeEmail && (
              <div>
                <label id="lable-tag" className="" for="PRN">
                  Enter Transaction ID
                </label>
                <p className="p-tag">
                  Note: Please pay registeration
                  fees <b> Rs. 100 </b>
                  and add Transaction ID otherwise submission will be rejected.
                </p>
                <input
                  type="text"
                  className="column"
                  name="PRN"
                  id="registeration-input"
                  placeholder="PRN or Transaction ID"
                  required
                ></input>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img width="200" height="200" src={codigo}></img>
                  <p className="p-tag2">Scan QR to pay</p>
                </div>
              </div>
            )}

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
        
              <button name="Name" type="submit" className="pulse">
                Submit
              </button>
              <ToastContainer />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default EventRegister;

import React from "react";
import { budhani, mfive, scriptAnalytica } from "../assets";
import "./Sponsor.css";
import { NavLink, Link } from "react-router-dom";

const Sponsor = () => {

    return (
      <>
        <div style={{ textAlign: "Center" }}>
          {/* <h1 className='sponsors-heading'>OUR SPONSORS</h1> */}
        </div>

        {/* <div className="container sponsor-card col-lg-4 col-md-6 ">
			<img src="https://m.media-amazon.com/images/M/MV5BZDA1YWY5ZjUtMWUyYi00MmY2LWFmMGYtMWVkZDRiMDcyNmNiXkEyXkFqcGdeQXVyOTM3NjIzNzk@._V1_FMjpg_UY720_.jpg" className="img-fluid sponsor-card-img" />
		</div> */}

        <div className="row sponsors-container-main">
          <div className="container sponsor-card col-lg-3 col-md-6 ">
            <img src={scriptAnalytica} className="img-fluid sponsor-card-img" />
          </div>

          <div className="container sponsor-card col-lg-3 col-md-6 ">
            <img src={mfive} className="img-fluid sponsor-card-img" />
          </div>

          <div className="container sponsor-card col-lg-3 col-md-6 ">
            <img src={budhani} className="img-fluid sponsor-card-img" />
          </div>

          {/* <div className="container sponsor-card col-lg-3 col-md-6 ">
					<img
						src="https://m.media-amazon.com/images/M/MV5BZDA1YWY5ZjUtMWUyYi00MmY2LWFmMGYtMWVkZDRiMDcyNmNiXkEyXkFqcGdeQXVyOTM3NjIzNzk@._V1_FMjpg_UY720_.jpg"
						className="img-fluid sponsor-card-img"
					/>
				</div>


				<div className="container sponsor-card col-lg-3 col-md-6 ">
					<img src={budhani} className="img-fluid sponsor-card-img" />
				</div>
				<div className="container sponsor-card col-lg-3 col-md-6 ">

					<img
						src="https://m.media-amazon.com/images/M/MV5BZDA1YWY5ZjUtMWUyYi00MmY2LWFmMGYtMWVkZDRiMDcyNmNiXkEyXkFqcGdeQXVyOTM3NjIzNzk@._V1_FMjpg_UY720_.jpg"
						className="img-fluid sponsor-card-img"
					/>
				</div> */}
        </div>
      </>
    );
};

export default Sponsor;

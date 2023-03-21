import React from 'react';
import TeamData from './TeamData';
import Navbar from "../components/Navbar";
import { teamcss } from '../styles';

const Team = () => {
  return (
    <>
    <Navbar />



     <div className='row developers-container-main'>
     <div class="title">
  {/* <h1 class="girish2">Web Team</h1> */}
  <h1 className="text-fluid text-center calendar-heading" style={{ margin: "20px" }}>Web Team</h1>
</div>
     {
      TeamData.map((props)=>{
        return(
          <>
          
      <div className="card2 col-lg-4">
        <div className="card-header">
          <div className="avatar">
            
           <img src={props.img} alt="" style={{width:'100%',height:'100%'}} />
          </div>
          <div className="profile-name"><h1>{props.name}</h1></div>
          <div className="profile-role">{props.Profession}</div>
        </div>

        <div className="card-footer">
          <div className="developers-buttons">
            
            <a href={props.git}>
            <div className="girish">
              <i className="fab fa-github"></i>
            </div>
            </a>

            <a href={props.linkdin}>
            <div className="girish">
              <i className="fab fa-linkedin"></i>
            </div>
            </a>
           
            <a href={props.instagram}>
            <div className="girish">
              <i className="fab fa-instagram"></i>
            </div>

            </a>
           
          </div>
        </div>
      </div>
 
          </>
        )
      })
     }
     </div>
     
    </>
  )
}

export default Team;

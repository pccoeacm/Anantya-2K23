import React from 'react'
import Navbar from '../components/Navbar'
import '../styles/About.css'

const About = () => {
  return (
    <>
      <Navbar/>
       
       <div className='row' style={{margin:'5%'}}>
       
      <div className="card col-lg-4" >
			<img src="https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg" alt="image" />
		

          </div>
          <div className='col-lg-8 events-details-container'>
		    
			<div style={{textAlign:'center'}}>
			<h1>EVENT NAME</h1>
			</div>
			 
			 <div style={{margin:'5%'}}>
			 <h2>Description</h2>
			 </div>

			 <div className='event-details-description'>
				<p className='description-para-tag'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam libero non laborum repudiandae? Dolorum aspernatur
				 voluptatibus accusantium officiis numquam, asperiores consectetur temporibus, neque voluptate mollitia voluptates
				  delectus dolores magni magnam.</p>
			 </div>

			 <div className='event-details-description'>
				<div className='row description-para-tag'>
					<div className='col-lg-4'>
					  <h2>Type</h2>
					  <p>Team / Solo</p>
					</div>
					<div className='col-lg-4'>
					  <h2>Prizes</h2>
					  <p>Rank 1: 1000</p>
					  <p>Rank 2: 500</p>
					  <p>Rank 3: 300</p>
					</div>
					<div className='col-lg-4'>
					  <h2>Fees</h2>
					  <p>Free</p>
					</div>
				</div>
			 </div>

		  </div>

		  </div> 
    </>
  )
}

export default About
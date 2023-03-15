import React ,{useState} from 'react'
import '../styles/Card.css';
import Data from '../API/card-data'
import { NavLink } from "react-router-dom";


const Card = () => {

  const [data,setData]= useState(Data);


  return (
   
       <>

        <div className="bg-1-gradient"></div>
        
        {/* <div className="events_Info">
            <p className='events-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ips</p>
        </div> */}

        <div className='card-main-container row'>
		<div className="bg-2-gradient">.</div>
        {data.map((elem)=>{
          return(
         <div className="card col-lg-4" >
			<img src="https://t4.ftcdn.net/jpg/05/59/08/01/240_F_559080129_4fWvQkVrQQCAJxaLFstZIfmWUW7DEgQ2.jpg" alt="image" />
			<div className="data">
				<h1 className="card-title">{elem.event_name}</h1>
				<p className="card-subtitle">dd/mm/yyyy</p>
				<p className="card-info">
					Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis,
					minima recusandae. Similique consequatur excepturi, soluta nam, vero
					corrupti aut fuga voluptatum ex ipsam error laborum, eos laboriosam
					veritatis rerum. Dolore?
				</p>
				<div className="btn">
				<NavLink to={"/about"+elem.id}className="nav-link">
					<button className="card-btn">
					   ANANTYA
					</button>
				</NavLink>		
				</div>
			</div>
		</div>
         
          )
        })}

        </div>






           
       </>
      
       
  )
}

export default Card;
import React ,{useState} from 'react'
import './Card.css';
import Data from '../API/card-data'

const Card = () => {

  const [data,setData]= useState(Data);

  console.log(data);

  return (
   
       <>
        
        <div className="events_Info">
            <p className='events-p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley 
            of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum,orem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ips</p>
        </div>

        <div className='card-main-container row'>
        {data.map((elem)=>{
          return(
            
          <div className='event-card col-lg-3'>
              <h1>card No : {elem.id}</h1>
              <p>descriptions</p>
          </div>
          )
        })}
        </div>

       
       </>
      
       
  )
}

export default Card;
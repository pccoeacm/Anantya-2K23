import React from 'react'
import './Webbit.css'
import Navbar from '../Navbar'

const event1 = () => {


  function event1(e) {
    const formEle = document.getElementById("Codigo");
    const formDatab = new FormData(formEle);
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbw4BmjREpkN0AlPKBqXsdiciIR8fQizFpHidDzTSKuIDW6YGD6iGc6UDcqpAlFQjoBZ/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => {
      // console.log("Response status:", res.status);
      alert('Successfully submitted');
      document.getElementById("Codigo").reset();
    })
    .catch((error) => {
      console.log(error);
    });

   

  }



  return (
    <>

        <Navbar/>
       
       <div style={{display:'flex',justifyContent:'center',alignItems:'center'}}>
        
       <div className='col-lg-7 col-md-12 col-12 form-step'>
        

        <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
        <h2 className="font-normal">Webbit-2.0</h2>
        <div id="personalInfo">
                            <h1 id="personal-info" >Personal Information</h1>
                        </div>
        </div>
                   
                       
                       <form action="" className='reg-form' onSubmit={(e) => event1(e)} id="Codigo">

                       

                    
                       
                       <label id='lable-tag' for="name">Name </label>
                       <input className="column" type="text" name="name" id="registeration-input" placeholder="Same as to be printed on Certificates"/>
                     
                        
                        <label id="lable-tag" className="" for="email" >Email   </label>
                        <input type="email" className="column" name="email" id="registeration-input" placeholder="Preferred official email address" ></input>
                   
                
                        <label id="lable-tag" className="" for="contact">Contact   </label>
                        <input type="tel" className="column" name="contact" id="registeration-input" placeholder="Active whatsapp Number" ></input>

                        
                        <label id="lable-tag" className="" for="college_name">College Name  </label>
                        <input type="tel" className="column" name="college_name" id="registeration-input" placeholder="Active whatsapp Number" ></input>

                        
                        <label id="lable-tag" className="" for="academic_year">Academic Year   </label>
                        <input type="tel" className="column" name="academic_year" id="registeration-input" placeholder="Active whatsapp Number" ></input>

                        
                        <label id="lable-tag" className="" for="Hacker_Rank_Profile" >Hacker Rank Profile</label>
                        <input type="tel" className="column" name="Hacker_Rank_Profile" id="registeration-input" placeholder="Active whatsapp Number" required></input>
                       

                      

                       <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                          <input name="Name" type="submit" className='Button-for-submission'/>
                       </div>

                      
                       </form>
                       </div>
                   
       </div>
                    

         
    </>
  )
}

export default event1


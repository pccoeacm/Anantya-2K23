import React from 'react'
import './Webbit.css'
import Navbar from '../Navbar'

const eventRegister = () => {


  function HandleEventClick(e) {
    const formEle = document.getElementById("form");
    const formDatab = new FormData(formEle);
    e.preventDefault();
    fetch(
      "https://script.google.com/macros/s/AKfycbyItktx2gN-lvtSWtMRdSivD2ztGCNqclf7dVGbfY1Btg_PNDPu75SXWcnagfix0BY0/exec",
      {
        method: "POST",
        body: formDatab
      }
    )
    .then((res) => {
      // console.log("Response status:", res.status);
      alert('Successfully submitted');
      document.getElementById("form").reset();
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
        <h2 className="font-normal">IPL AUCTION</h2>
        <div id="personalInfo">
                            <h1 id="personal-info" >Personal Information</h1>
                        </div>
        </div>
                   
                       
                       <form action="" className='reg-form' onSubmit={(e) => HandleEventClick(e)} id="form">

                       

                    
                       
                       <label id='lable-tag' for="name">Name </label>
                       <input className="column" type="text" name="name" id="registeration-input" placeholder="Same as to be printed on Certificates" required/>
                     
                        
                        <label id="lable-tag" className="" for="email" >Email   </label>
                        <input type="email" className="column" name="email" id="registeration-input" placeholder="Preferred official email address" required></input>
                   
                
                        <label id="lable-tag" className="" for="contact">Contact   </label>
                        <input type="tel" className="column" name="contact" id="registeration-input" placeholder="Active whatsapp Number" required></input>

                        
                        <label id="lable-tag" className="" for="college_name">College Name  </label>
                        <input type="tel" className="column" name="college_name" id="registeration-input" placeholder="Active whatsapp Number" required ></input>

                        
                        <label id="lable-tag" className="" for="academic_year">Academic Year   </label>
                        <input type="tel" className="column" name="academic_year" id="registeration-input" placeholder="Active whatsapp Number" required></input>
                      

                       <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
                          <input name="Name" type="submit" className='Button-for-submission'/>
                       </div>

                      
                       </form>
                       </div>
                   
       </div>
                    

         
    </>
  )
}

export default eventRegister


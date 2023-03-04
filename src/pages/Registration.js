import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../styles/Registration.css";
import "../assets/ss.webp";

const Registration = () =>
{
    return(
        <>
        <Navbar />
        <div className="bg-1-gradient">.</div>
		<div className="bg-2-gradient">.</div>
        <div className="bg-3-gradient">.</div>
        <div className="bg-4-gradient">.</div>
		<div id="reg-tag"><h1 id="title-reg">REGISTRATION</h1></div>
        <div id="reg-form"> 
            <form action="registration.php" method="POST"> 
            <label id="event-name" for="eventname">Event Name</label>
            <select name="cars" id="events"class="cars">
                <option value="">Select Event From Here</option>
                <option value="Perplexo">Perplexo</option>
                <option value="Codigo 4.0">Codigo 4.0</option>
                <option value="Webbit">Webbit</option>
                </select>
                <div id="personalInfo">
                    <h1 id="personal-info">Personal Information</h1>
                </div>
                <label id="name-tag" for="name">Name   </label><input type="text" name="name" id="name" placeholder="Same as to be printed on Certificates"/>
                <label id="email-tag" for="name">Email   </label><input type="email" name="email" id="email" placeholder="Preferred official email address"></input>
                <label id="contact-tag" for="name">Contact No.</label><input type="tel" name="contact" id="contact" placeholder="Active whatsapp number"></input>
                <label id="CollegeName-tag" for="name">College Name </label><input type="radio" id="pccoe" name="fav_language" value="HTML"/>
                                                                                    <label id="pccoe-tag" for="html">PCCOE</label>
                                                                                    <input type="radio" id="other" name="fav_language" value="CSS"/>
                                                                                    <label id="other-tag" for="css">Other</label>
                <label id="roll-tag" for="name">College Roll no.</label><input type="text" name="name" id="rollno" placeholder=" Ex: TYCOC233"/>
                <label id="year-tag" for="name">Year of Engineering</label>
                <select name="cars" id="year"class="cars">
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Forth Year">Fourth Year</option>
                </select>
                <label id="hlink" for="name">HackerRank Profile Link</label><input type="text" name="name" id="link" placeholder=" hackerrank.com/user_name"></input>
                <div id="line"></div>
                <div id="TeamDetails">
                    <h1 id="team-details">Team Details</h1>
                </div>
                <div id="team-member1"> 
                <h1 id="TeamMember1">Team Member 1</h1>
                </div>
                <label id="name-tag-team-member1" for="name">Name   </label><input type="text" name="name" id="team-member-name-1" placeholder="Same as to be printed on Certificates"/>
                <label id="CollegeName-tag-member1" for="name">College Name </label><input type="radio" id="pccoe1" name="fav_language" value="HTML"/>
                                                                                    <label id="pccoe-tag1" for="html">PCCOE</label>
                                                                                    <input type="radio" id="other1" name="fav_language" value="CSS"/>
                                                                                    <label id="other-tag1" for="css">Other</label>
            <label id="year-tag1" for="name">Year of Engineering</label>
                <select name="cars" id="year1" class="cars">
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Forth Year">Fourth Year</option>
                </select>

                <div id="team-member2"> 
                <h1 id="TeamMember2">Team Member 2</h1>
                </div>
                <label id="name-tag-team-member2" for="name">Name   </label><input type="text" name="name" id="team-member-name-2" placeholder="Same as to be printed on Certificates"/>
                <label id="CollegeName-tag-member2" for="name">College Name </label><input type="radio" id="pccoe2" name="fav_language" value="HTML"/>
                                                                                    <label id="pccoe-tag2" for="html">PCCOE</label>
                                                                                    <input type="radio" id="other2" name="fav_language" value="CSS"/>
                                                                                    <label id="other-tag2" for="css">Other</label>
            <label id="year-tag2" for="name">Year of Engineering</label>
                <select name="cars" id="year2" class="cars">
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Forth Year">Fourth Year</option>
                </select>

                <div id="team-member3"> 
                <h1 id="TeamMember3">Team Member 3</h1>
                </div>
                <label id="name-tag-team-member3" for="name">Name   </label><input type="text" name="name" id="team-member-name-3" placeholder="Same as to be printed on Certificates"/>
                <label id="CollegeName-tag-member3" for="name">College Name </label><input type="radio" id="pccoe3" name="fav_language" value="HTML"/>
                                                                                    <label id="pccoe-tag3" for="html">PCCOE</label>
                                                                                    <input type="radio" id="other3" name="fav_language" value="CSS"/>
                                                                                    <label id="other-tag3" for="css">Other</label>
            <label id="year-tag3" for="name">Year of Engineering</label>
                <select name="cars" id="year3" class="cars">
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Forth Year">Fourth Year</option>
                </select>

                <div id="team-member4"> 
                <h1 id="TeamMember4">Team Member 4</h1>
                </div>
                <label id="name-tag-team-member4" for="name">Name   </label><input type="text" name="name" id="team-member-name-4" placeholder="Same as to be printed on Certificates"/>
                <label id="CollegeName-tag-member4" for="name">College Name </label><input type="radio" id="pccoe4" name="fav_language" value="HTML"/>
                                                                                    <label id="pccoe-tag4" for="html">PCCOE</label>
                                                                                    <input type="radio" id="other4" name="fav_language" value="CSS"/>
                                                                                    <label id="other-tag4" for="css">Other</label>
            <label id="year-tag4" for="name">Year of Engineering</label>
                <select name="cars" id="year4" class="cars">
                <option value="First Year">First Year</option>
                <option value="Second Year">Second Year</option>
                <option value="Third Year">Third Year</option>
                <option value="Forth Year">Fourth Year</option>
                </select>
                <div id="line2"></div>
                <div id="paymentdetails">
                    <h1 id="Payment-details">Payment Details</h1>
                </div>
                <label id="transaction-id-tag" for="name">Transaction ID</label><input type="text" name="name" id="transactionid" placeholder="Same as to be printed on Certificates"/>
                <label id="ss" for="name">Add Screenshot of Payment</label><input type="file" id="ssf" />
                <div id="payment-photo-div" >
                    <img alt="payapps" src="https://images.news18.com/ibnlive/uploads/2021/10/paytm_googleplay_phonepe-16353979814x3.jpg" id="payapps"></img>
                </div>
                <input type="submit" name="submit" value="SUBMIT" id="Submit"/> 
                </form>
        </div><br></br>
        {/*<Footer />*/ }
		</>
    );        
};

export default Registration;
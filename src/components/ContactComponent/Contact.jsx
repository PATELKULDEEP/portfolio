import React from 'react'

import './contactStyle.css';
function Contact() {
    return (
        <>
        
        <div className="contact">
            <h1>Contact</h1>
            <form >
                <div className="form-input">
                    <label >Full Name :</label>
                    <input type="text" placeholder="Enter Your Name" required/>
                </div>

                <div className="form-input">
                    <label >Email-Address :</label>
                    <input type="email" placeholder="Enter Your Email-Address" required/>
                </div>
                <div className="form-input">
                    <label >Subject :</label>
                    <input type="text" placeholder="Enter Message Subject" />
                </div>
                <div className="form-input">
                    <label >Message :</label>
                    <textarea type="text" placeholder="Enter Your Message" rows="4" required></textarea>
                </div>
                <button className="form-input" onClick={() => {window.alert("Currently Not working please wait for website to launch. launch date for website is 20-5-21")}}>Submit</button>
            </form>
        </div>
        </>
    )
}

export default Contact

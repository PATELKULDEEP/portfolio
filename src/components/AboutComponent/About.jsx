import React from 'react'
import './aboutStyle.css';
import kpImg from '../../assets/images/kp.png';
function About() {
    return (
        <div className="about">
            <div className="about-resume">

            <img src={kpImg} alt="Kuldeep Image"  />
            <button><a href="https://drive.google.com/file/d/14QCteZJ60XcYZ3TlesZD_9CIxPLfnoub/view?usp=sharing" alt="resume link" target="_blank" >Download Resume</a></button>

            </div>
            <div className="about-details">
            <h1 className="about-title">About</h1>
            <div>

            <p>
                I'm a Electronics and Telecommunication Engineer and a FullStack Web Developer based in India. 
                </p><p>I am Technical Lead of TechnoHub and Developer Student Community of our college club, and Technical Team member of TEDxBITD.
            </p>
            </div>
            </div>
        </div>
    )
}

export default About

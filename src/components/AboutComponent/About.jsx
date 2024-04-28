import React from 'react'
import './aboutStyle.css';
import kpImg from '../../assets/images/kp3.png';
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
                I'm a Java Developer at Accenture, dedicated to managing Java applications for key life science client. 
                </p><p>Graduated with a degree in Electronic and Telecommunication. Passionate about crafting robust solutions and contributing to impactful projects.
            </p>
            </div>
            </div>
        </div>
    )
}

export default About

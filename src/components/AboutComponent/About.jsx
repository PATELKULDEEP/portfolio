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
            <h3>
            Java Developer / Building Secure and Scalable Applications
            </h3>
            <p>
            I'm a passionate software developer with a strong foundation in Java and a knack for crafting secure, high-performing applications.  My journey began with a B.Tech in Electronics and Telecommunication Engineering from the Bhilai Institute of Technology (BIT), Durg, Chhattisgarh. This solid foundation equipped me with the technical knowledge to thrive in the software development world.
                </p><p>Fueled by my passion for technology, I honed my skills by participating in hackathons, where I developed websites using React and learned to thrive under pressure.  At Accenture, I played a key role in developing and maintaining a large-scale enterprise application using JSP and Spring Boot frameworks. My focus on security led me to identify and remediate over 1300+ critical vulnerabilities, significantly enhancing application security.
            </p>
            </div>
            </div>
        </div>
    )
}

export default About

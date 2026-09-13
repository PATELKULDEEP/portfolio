import React from 'react'
import './aboutStyle.css';
import kpImg from '../../assets/images/kp1.png';
function About() {
    return (
        <div className="about">
            <div className="about-resume">

            <img src={kpImg} alt="Kuldeep Patel"  />
            <button><a href="https://drive.google.com/file/d/1M7JEQNA6KsYdgwUrN8QtrZ3Zla7bGvvT/view?usp=drive_link" target="_blank" rel="noreferrer" >Download Resume</a></button>

            </div>
            <div className="about-details">
            <h1 className="about-title">About</h1>
            <div>
            <h3>
            Software Engineer / Building Secure and Scalable Applications
            </h3>
            <p>
            I'm a passionate software engineer who enjoys learning, solving meaningful problems, and turning ideas into reliable digital experiences. My journey began with a B.Tech in Electronics and Telecommunication Engineering from the Bhilai Institute of Technology (BIT), Durg, Chhattisgarh, which gave me the foundation and curiosity to grow in the software development world.
                </p><p>Outside of day-to-day engineering, hackathons have helped me become a creative thinker and a better collaborator. They gave me the opportunity to build websites, explore new ideas, and learn how to make thoughtful decisions under pressure.
                </p><p>Throughout my career, I have worked on enterprise applications and contributed to projects where reliability, security, and the people using the software matter. I am always looking to grow, take on meaningful challenges, and build work I can be proud of.
            </p>
            </div>
            </div>
        </div>
    )
}

export default About

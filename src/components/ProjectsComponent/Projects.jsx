import React from "react";
import { Link } from "react-router-dom";
import Header from "../HeaderComponent/Header";
import "./projectsStyle.css";
import kpImg from "../../assets/images/kp.png";
import mitImg from '../../assets/images/mit.png';
import sihImg from '../../assets/images/sih.png';
import technohubImg from '../../assets/images/technohub.png';
import tedxImg from '../../assets/images/tedx.png';
import todoImg from '../../assets/images/todo.png';
import zenshinImg from '../../assets/images/zenshin.png';


function Projects() {
  return (
    <div className='projects'>
      <h1>Work / Projects</h1>
      <div className='projects-cards'>
      <div className='card'>
          <img src={tedxImg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Project</a>
                </div>
                {/* <div className="card-sources-link">
                    
                    <a href="" >Code</a>
                    </div> */}
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={technohubImg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TechnoHub</b>
            </h4>
            <p>Built the website for one of the official technical clubs of my
college, used by over 1000 peoples
Built the entire backend using firebase and firestore and
Oauth for authentication</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Project</a>
                </div>

            </div>
          </div>
        </div>
        <div className='card'>
          <img src={sihImg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>SIH Hackathon</b>
            </h4>
            <p>Android application and web portal for police for effective
criminal tracking and record maintenance
Used Firebase a back-end for entire application</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="https://drive.google.com/file/d/1ltE_6_12S5zY99vIHuCPhYs6-Q61bwE5/view" >Presentation</a>
                </div>
                <div className="card-sources-link">
                    
                    <a href="" >Code</a>
                    </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={zenshinImg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>Zenshin</b>
            </h4>
            <p>Developed a web app that connects service providers with their customers through an easy-to-use interface. And won the Best
Resource for Businesses Prize.</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Project</a>
                </div>
                <div className="card-sources-link">
                    
                    <a href="" >Code</a>
                    </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={mitImg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>MIT Covid-19 Challenge</b>
            </h4>
            <p>We developed a platform to support the facility allocations in resp. hospitals. It helped to improve patient flow and provide reliable and
trustworthy information about the availability of nearest centres</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Project</a>
                </div>
                <div className="card-sources-link">
                    
                    <a href="" >Code</a>
                    </div>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={todoImg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TODO Website </b>
            </h4>
            <p>Buit using ReactJS, a full CRUD based functionality</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="https://dreamy-feynman-0b9ee7.netlify.app/" target="_blank" >Project</a>
                </div>
                <div className="card-sources-link">
                    
                    <a href="" >Code</a>
                    </div>
            </div>
          </div>
        </div>
        

</div>
      <Link
        to='/portfolio/projects'
        className='projects-more'
      >{` More Projects --> `}</Link>
    </div>
  );
}

export default Projects;

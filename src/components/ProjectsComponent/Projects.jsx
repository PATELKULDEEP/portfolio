import React from "react";
import { Link } from "react-router-dom";
import Header from "../HeaderComponent/Header";
import "./projectsStyle.css";
import kpimg from "../../assets/images/kp.png";

function Projects() {
  return (
    <div className='projects'>
      <h1>Projects</h1>
      <div className='projects-cards'>
      <div className='card'>
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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
          <img src={kpimg} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>TEDxBITD</b>
            </h4>
            <p>Developed a ReactJS based website for the TEDxBITD event in our college, used by over 500 users Worked on the backend using Firebase and Firestore</p>
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

</div>
      <Link
        to='/portfolio/projects'
        className='projects-more'
      >{` More Projects --> `}</Link>
    </div>
  );
}

export default Projects;

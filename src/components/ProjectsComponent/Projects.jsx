import React from 'react'
import { Link } from 'react-router-dom';
import Header from '../HeaderComponent/Header';
import './projectsStyle.css';

function Projects() {
    return (
       
        <div className="projects">
            <h1>Projects</h1>
            <Link to="/portfolio/projects">More Projects</Link>
        </div>
   
    )
}

export default Projects

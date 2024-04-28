import React from 'react'
import './homepageStyle.css'
import {Link} from 'react-router-dom'
import Projects from '../ProjectsComponent/Projects';
import Contact from '../ContactComponent/Contact';
import Header from '../HeaderComponent/Header';
import About from '../AboutComponent/About';
import Achievemens from '../AchievementsComponent/Achievements';
function Homepage() {

  document.addEventListener('DOMContentLoaded', function() {
    // When the event DOMContentLoaded occurs, it is safe to access the DOM
    // When the user scrolls the page, execute myFunction 
    window.addEventListener('scroll', myFunctionForSticky);
  
    // Get the navbar
    var navbar = document.getElementById("header-home");
  
    // Get the offset position of the navbar
    var sticky = navbar?.offsetTop;
  
    // Add the sticky class to the navbar when you reach its scroll position. 
    // Remove "sticky" when you leave the scroll position
  
    function myFunctionForSticky() {
      if (window.pageYOffset >= sticky) {
        console.log("window.pageYOffset >= sticky");
      } else {
        console.log("Not window.pageYOffset >= sticky");
      }
      if (window.pageYOffset >= (sticky)) {
        navbar?.classList.add("sticky");
      } else {
        navbar?.classList.remove("sticky");
      }
    }
  
    /*Toggle between adding and removing the "responsive" class to topnav
    when the user clicks on the icon*/
  
    function myFunctionForResponsive() {
      navbar.classList.toggle('responsive');
    }
  })

    return (
  <>
  <div className="App">
        <h3>Hi, I am</h3>
        <h1>KULDEEP PATEL</h1>
        <div className="homepage-subtitle">

        <span></span><h3> SOFTWARE ENGINEER </h3><span></span>
        </div>

    </div>
       <div className="header-home" id="header-home">
           <a href="#about">
                About
            </a>
            <a href="#projects">
                Projects
            </a>
            <a href="#achievement">
                Achievement
            </a>
      </div> 
      <div id="about">
        <About/>
      </div>
      <div id="projects">
        <Projects/>
      </div>
      <div id="achievement">
        <Achievemens/>
      </div>
      <div id="contact">
        <Contact/>
      </div>
</>
  );
}

export default Homepage

import React from 'react'
import './homepageStyle.css'
import {Link} from 'react-router-dom'
import Projects from '../ProjectsComponent/Projects';
import Contact from '../ContactComponent/Contact';
import About from '../AboutComponent/About';
import Achievemens from '../AchievementsComponent/Achievements';
import Experience from '../ExperienceComponent/Experience';
import Header from '../HeaderComponent/Header';
function Homepage() {

    return (
  <>
  <div className="App">
        <p className="hero-kicker">HELLO, I'M</p>
        <h1>KULDEEP PATEL</h1>
        <div className="homepage-subtitle">

        <span></span><h3> SOFTWARE ENGINEER </h3><span></span>
        </div>

    </div>
      <Header homepage />
      <div id="about">
        <About/>
      </div>
      <Experience />
      <div id="projects">
        <Projects/>
      </div>
      <div id="achievement">
        <Achievemens/>
      </div>
      <section className="travel-preview" id="travel">
        <div>
          <span className="section-kicker">PERSONAL ATLAS</span>
          <h2>Places, pilgrimages and long roads.</h2>
          <p>Explore the interactive map behind the journeys: 33+ places, 14 states, 10 / 12 Jyotirlingas and 4 / 4 Char Dham.</p>
        </div>
        <Link to="/portfolio/travel" className="travel-preview-link">Explore travel <span aria-hidden="true">↗</span></Link>
      </section>
      <div id="contact">
        <Contact/>
      </div>
</>
  );
}

export default Homepage

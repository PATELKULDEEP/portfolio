import React from 'react'
import './achievementStyle.css';

import mitImg from '../../assets/images/mit.png';
import sihcertificate from '../../assets/images/achievements/sihcertificate.png';
import arduinoCertificate from '../../assets/images/achievements/arduinoCertificate.png';

import awsCoursera from '../../assets/images/achievements/awsCoursera.png';
import intoIoTCoursera from '../../assets/images/achievements/intoIoTCoursera.png';
import javascriptFreeCodeCamp from '../../assets/images/achievements/javascriptFreeCodeCamp.png';
import openSourceCoursera from '../../assets/images/achievements/open-source-coursera.png';
import responsiveCoursera from '../../assets/images/achievements/responsiveCoursera.png';
import webDesignFreeCodeCamp from '../../assets/images/achievements/webDesignFreeCodeCamp.png';
import { Link } from 'react-router-dom';

function Achievemens() {
    return (
        <div className="achievement">
            
           
      <h1>Achievements / Certificates</h1>
      <div className='projects-cards'>
      
        <div className='card'>
          <img src={sihcertificate} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>SIH Finalist</b>
            </h4>
            <p>We Develop Android application and web portal for police for effective
criminal tracking and record maintenance</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="https://drive.google.com/file/d/1ltE_6_12S5zY99vIHuCPhYs6-Q61bwE5/view" >Presentation</a>
                </div>
                <div className="card-sources-link">

<a href="" >Certificate</a>
</div>
            </div>
          </div>
        </div>
        <div className='card'>
          <img src={intoIoTCoursera} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>Intro to IoT</b>
            </h4>
            <p>Completed the Introduction to Internet of Things and Embedded System from coursera</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Certificate</a>
                </div>

            </div>
          </div>
        </div>        <div className='card'>
          <img src={javascriptFreeCodeCamp} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>JavaScript</b>
            </h4>
            <p>I have successfully completed the course of JavaScript Algorithms and Data Structure from freeCodeCamp</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Certificate</a>
                </div>
        
            </div>
          </div>
        </div>        <div className='card'>
          <img src={openSourceCoursera} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>Open Source and Linux</b>
            </h4>
            <p>Learned the Open Source Software Development, Linux and Git from The Linux Foundationo in Coursera Platform</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Certificate</a>
                </div>

            </div>
          </div>
        </div>        <div className='card'>
          <img src={responsiveCoursera} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>Responsive Website Basics</b>
            </h4>
            <p>Completed the course on Responsive Website Basics Code with HTML, CSS, and JavaScript in Coursera Platform</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Certificate</a>
                </div>
 
            </div>
          </div>
        </div>        <div className='card'>
          <img src={webDesignFreeCodeCamp} alt='Avatar'  />
          <div className='container'>
            <h4>
              <b>Responsive Web Design</b>
            </h4>
            <p>Learned about HTML and CSS by building a responsive website in freeCodeCamps Platform and Successfully completed the course</p>
            <div className="card-sources">
                <div className="card-sources-link">

                <a href="" >Certificate</a>
                </div>

            </div>
          </div>
        </div>



        

</div>
  
    
<Link
        to='/portfolio/achievements'
        className='projects-more'
      >{` More Achievements --> `}</Link>

        </div>
    )
}

export default Achievemens

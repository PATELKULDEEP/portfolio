import React from 'react'
import './mainAchievementsStyle.css'

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
import Header from '../HeaderComponent/Header';

function MainAchievements() {
    return (
        <>
        <Header/>

        <div className="full-achievements">
            <h1>
            Achievements / Certificates
                </h1>
        </div>
        
        <div className='full-achievements-cards'>
      
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
        </div>      <div className='card'>
        <img src={arduinoCertificate} alt='Avatar'  />
        <div className='container'>
          <h4>
            <b>Arduino</b>
          </h4>
          <p>Learned about Arduino and use C Programming language to operate the arduino </p>
          <div className="card-sources">
              <div className="card-sources-link">

              <a href="" >Certificate</a>
              </div>

          </div>
        </div>
      </div>
      <div className='card'>
        <img src={mitImg} alt='Avatar'  />
        <div className='container'>
          <h4>
            <b>MIT Covid-19 Challenge Winner</b>
          </h4>
          <p>We are one of the winner our track was I and our team name was Challenge. We developed a platform to support the facility allocations in resp. hospitals. It helped to improve patient flow and provide reliable and
trustworthy information about the availability of nearest centres</p>
          <div className="card-sources">
              <div className="card-sources-link">

              <a href="" >Presentation</a>
              </div>
              <div className="card-sources-link">
                  
                  <a href="" >Winner-List</a>
                  </div>
          </div>
        </div>
      </div>
      <div className='card'>
        <img src={awsCoursera} alt='Avatar'  />
        <div className='container'>
          <h4>
            <b>SIH Hackathon</b>
          </h4>
          <p>learned the basics of AWS Machine Learning and how to use it by AWS Team in Coursera platform</p>
          <div className="card-sources">
              <div className="card-sources-link">

              <a href="" >Certificate</a>
              </div>

          </div>
        </div>
      </div>
      


</div>
        </>
    )
}

export default MainAchievements

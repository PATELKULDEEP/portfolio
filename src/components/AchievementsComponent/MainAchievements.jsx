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

        <div className="full-projects">
            <h1>
            Achievements / Certificates
                </h1>
        </div>
        
        <div className='fullprojects-cards'>
      
      <div className='card'>
        <img src={sihcertificate} alt='Avatar'  />
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
        <img src={intoIoTCoursera} alt='Avatar'  />
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
      </div>        <div className='card'>
        <img src={javascriptFreeCodeCamp} alt='Avatar'  />
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
      </div>        <div className='card'>
        <img src={openSourceCoursera} alt='Avatar'  />
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
      </div>        <div className='card'>
        <img src={responsiveCoursera} alt='Avatar'  />
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
      </div>        <div className='card'>
        <img src={webDesignFreeCodeCamp} alt='Avatar'  />
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
        <img src={arduinoCertificate} alt='Avatar'  />
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
        <img src={awsCoursera} alt='Avatar'  />
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
      


</div>
        </>
    )
}

export default MainAchievements

import React from 'react'
import './footerStyle.css';
import {AiFillLinkedin,AiFillInstagram,AiFillGithub,AiOutlineTwitter} from 'react-icons/ai';
function Footer() {
    return (
        // <div className="footer">
        //     <a href='https://www.linkedin.com/in/patelkuldeep/' target='_blank'><AiFillLinkedin className="footer-logo linkedin-logo"/></a><p>LinkedIn</p>
        //     <a href="https://www.instagram.com/kuldeeppatel0001/" target='_blank'><AiFillInstagram className="footer-logo instagram-logo"/></a><p>LinkedIn</p>
        //     <a href="https://github.com/PATELKULDEEP" target='_blank'><AiFillGithub className="footer-logo github-logo"/></a><p>LinkedIn</p>
        //     <a href="https://twitter.com/patelkuldeep0" target='_blank'><AiOutlineTwitter className="footer-logo twitter-logo"/></a><p>LinkedIn</p>
        // </div>

        <section id="contact" className="contact-section">
  <div className="contact-section-header">
    <h2>Let's work together...</h2>
    <p>How do you take your coffee?</p>
  </div>
  <div className="contact-links">
    <a
      href="https://www.linkedin.com/in/patelkuldeep/"
      target="_blank"
      class="btn contact-details"
      ><i className="fab fa-linkedin"></i> LinkedIn</a
    >
    <a
      id="profile-link"
      href="https://github.com/PATELKULDEEP"
      target="_blank"
      className="btn contact-details"
      ><i className="fab fa-github"></i> GitHub</a
    >
    <a
      href="https://twitter.com/patelkuldeep0"
      target="_blank"
      className="btn contact-details"
      ><i className="fab fa-twitter"></i> Twitter</a
    >
    <a
      href="https://www.instagram.com/patelkuldeep_kp/"
      target="_blank"
      className="btn contact-details"
      ><i className="fab fa-instagram"></i> Instagram</a
    >

  </div>
</section>
    )
}

export default Footer

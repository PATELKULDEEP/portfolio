import React from 'react'
import './footerStyle.css';
import {AiFillLinkedin,AiFillInstagram,AiFillGithub,AiOutlineTwitter} from 'react-icons/ai';
function Footer() {
    return (
        <div className="footer">
            <a href='https://www.linkedin.com/in/patelkuldeep/' target='_blank'><AiFillLinkedin className="footer-logo linkedin-logo"/></a>
            <a href="https://www.instagram.com/kuldeeppatel0001/" target='_blank'><AiFillInstagram className="footer-logo instagram-logo"/></a>
            <a href="https://github.com/PATELKULDEEP" target='_blank'><AiFillGithub className="footer-logo github-logo"/></a>
            <a href="https://twitter.com/patelkuldeep0" target='_blank'><AiOutlineTwitter className="footer-logo twitter-logo"/></a>
        </div>
    )
}

export default Footer

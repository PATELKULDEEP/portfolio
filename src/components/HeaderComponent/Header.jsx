import React from 'react'
import { Link } from 'react-router-dom'
import './headerStyle.css'
function Header() {

    return (
        <div className="header" id="header">
            <a href="/portfolio/#about">
                About
            </a>
            <Link to="/portfolio/projects">
                Projects
            </Link>
            <a href="/portfolio/#achievement">
                Achievement
            </a>

        </div>
    )
}

export default Header

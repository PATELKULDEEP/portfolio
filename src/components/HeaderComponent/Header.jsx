import React from 'react'
import { Link } from 'react-router-dom'
import './headerStyle.css'
function Header() {
    return (
        <div className="header">
            <Link to="/">
                Home
            </Link>
            <Link to="/contact">
                Contact Me
            </Link>
            <Link to="/projects">
                Projects
            </Link>

        </div>
    )
}

export default Header

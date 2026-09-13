import React from 'react'
import { Link } from 'react-router-dom'
import './headerStyle.css'
import ThemeToggle from '../ThemeComponent/ThemeToggle';
function Header({ homepage = false }) {

    return (
        <header className={`header${homepage ? ' homepage-header' : ''}`} id="header">
            <Link className="header-brand" to="/portfolio">KP<span>.</span></Link>
            <nav className="header-nav" aria-label="Primary navigation">
                <a href={`${process.env.PUBLIC_URL}/#/portfolio#about`}>About</a>
                <a href={`${process.env.PUBLIC_URL}/#/portfolio#experience`}>Experience</a>
                <Link to="/portfolio/projects">Projects</Link>
                <Link to="/portfolio/achievements">Achievements</Link>
                <Link to="/portfolio/travel">Travel</Link>
                <a href={`${process.env.PUBLIC_URL}/#/portfolio#contact`}>Contact</a>
            </nav>
            <ThemeToggle />
        </header>
    )
}

export default Header

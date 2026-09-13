import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './headerStyle.css'
import ThemeToggle from '../ThemeComponent/ThemeToggle';
function Header({ homepage = false }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className={`header${homepage ? ' homepage-header' : ''}${isMenuOpen ? ' menu-open' : ''}`} id="header">
            <Link className="header-brand" to="/portfolio">KP<span>.</span></Link>
            <button
                className="menu-toggle"
                type="button"
                aria-expanded={isMenuOpen}
                aria-controls="primary-navigation"
                aria-label={isMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
                onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </button>
            <nav className="header-nav" id="primary-navigation" aria-label="Primary navigation">
                <a href={`${process.env.PUBLIC_URL}/#/portfolio#about`} onClick={closeMenu}>About</a>
                <a href={`${process.env.PUBLIC_URL}/#/portfolio#experience`} onClick={closeMenu}>Experience</a>
                <Link to="/portfolio/projects" onClick={closeMenu}>Projects</Link>
                <Link to="/portfolio/achievements" onClick={closeMenu}>Achievements</Link>
                <Link to="/portfolio/travel" onClick={closeMenu}>Travel</Link>
                <a href={`${process.env.PUBLIC_URL}/#/portfolio#contact`} onClick={closeMenu}>Contact</a>
            </nav>
            <ThemeToggle />
        </header>
    )
}

export default Header

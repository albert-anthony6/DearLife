import React from 'react';
import './Header.styles.scss';

const Header = () => (
    <header className="nav">
        <h1 className="logo">dearlife</h1>
        
        <ul className="nav__list">
            <li className="nav__item">
                <a href="http://www.Google.com" className="nav__link">Search</a>
            </li>
            <li className="nav__item">
                <a href="http://www.Google.com" className="nav__link">Log In</a>
            </li>
            <li className="nav__item">
                <a href="http://www.Google.com" className="nav__link nav__link--active">Sign Up</a>
            </li>
        </ul>
    </header>
);

export default Header;
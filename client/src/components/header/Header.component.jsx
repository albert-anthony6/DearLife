import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="nav">
        <h1 className="logo">
            <Link to="/">dearlife</Link>
        </h1>
        
        <ul className="nav__list">
            <li className="nav__item">
                <Link to="/posts" className="nav__link">All Posts</Link>
            </li>
            <li className="nav__item">
                <Link to="/login" className="nav__link">Log In</Link>
            </li>
            <li className="nav__item">
                <Link to="/login" className="nav__link nav__link--active">Sign Up</Link>
            </li>
        </ul>
    </header>
);

export default Header;
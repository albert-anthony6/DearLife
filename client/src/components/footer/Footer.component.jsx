import React from 'react';
import './Footer.styles.scss';

const Footer = () => (
    <footer className="footer">
        <ul className="footer__list">
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">About</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Help</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Posts</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Guidelines</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Blog</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Help forum</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Developers</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Jobs</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Contact</a>
            </li>
        </ul>

        <ul className="footer__list">
            <li>
                <a className="footer__link footer__link--icon" href="https://github.com/albert-anthony6" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
            </li>
            <li>
                <a className="footer__link footer__link--icon" href="https://www.linkedin.com/in/avaldes21/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin"></i></a>
            </li>
        </ul>
    </footer>
);

export default Footer;
import React from 'react';
import './Footer.styles.scss';

// 'Movies', 'Video Games', 'YouTube', 'Miscellaneous', 'TV Shows', 'Animals', 'Food', 'Stories', 'music'

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
                <a href="https://www.Google.com" className="footer__link">Portfolio</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">API</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Contact</a>
            </li>
            <li className="footer__item">
                <a href="https://www.Google.com" className="footer__link">Catergories &#9660;</a>
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
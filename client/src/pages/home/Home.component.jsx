import React from 'react';
import './Home.styles.scss';
import Footer from '../../components/footer/Footer.component';
import { Link } from 'react-router-dom';
 
const Home = () => (
    <div className="hero">
        <div className="hero__text">
            <h1>Find your passion.</h1>
            <p>Join the dearlife community and share your passion with others all around the globe.</p>
            <Link to="/login" className="nav__link">Start for free</Link>
        </div>
        <Footer/>
    </div>
);

export default Home;
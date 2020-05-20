import React from 'react';
import './Home.styles.scss';
import Footer from '../components/footer/Footer.component';

const Home = () => (
    <div className="hero">
        <div className="hero__text">
            <h1>Find your passion.</h1>
            <p>Join the dearlife community and share your passion with others all around the globe.</p>
            <button>Start for free</button>
        </div>
        <Footer/>
    </div>
);

export default Home;
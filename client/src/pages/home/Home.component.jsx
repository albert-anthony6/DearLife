import React, { useState, useEffect } from 'react';
import './Home.styles.scss';
import Footer from '../../components/footer/Footer.component';
import { Link } from 'react-router-dom';
import axios from "axios";
 
const Home = () => {
    const [data, setData] = useState([]);

    const fetchData = async () => {
        try{
            const res = await axios({
                method: 'GET',
                url: '/api/v1/posts/'
            });
            // console.log(res);
            setData(res.data.data.data);
        } catch(err) {
            console.log(err.response.data);
        }
    }
    
    useEffect(() => {
        if(sessionStorage.homePosts) {
            console.log("Getting from session storage...");
            setData(JSON.parse(sessionStorage.homePosts));
        } else {
            console.log("Fetching from API...");
            fetchData();
        }
    }, []);
    
    useEffect(() => {
        console.log("Writing to session storage...");
        sessionStorage.setItem('homePosts', JSON.stringify(data));
    }, [data]);
    
    return(
        <div className="hero">
            <div className="hero__text">
                <h1>Find your passion.</h1>
                <p>Join the dearlife community and share your passion with others all around the globe.</p>
                <Link to="/login" className="nav__link">Start for free</Link>
            </div>
            <Footer/>
        </div>
    );
};

export default Home;
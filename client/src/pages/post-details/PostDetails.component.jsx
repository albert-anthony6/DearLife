import React, { useState, useEffect } from 'react';
import './PostDetails.styles.scss';
import axios from 'axios';

const PostDetails = ({ match }) => {
    const [details, setDetails] = useState(null);

    const getPost = async () => {
        try{
            const res = await axios({
                method: 'GET',
                url: `/api/v1/posts/${match.params.id}`
            });
            console.log(res);
            setDetails(res.data.data.data);
        } catch(err) {
            console.log(err.response.data.message);
        }
    };

    useEffect(() => {
        if(localStorage.getItem(`${match.params.id}`)) {
            console.log("Getting from local storage...");
            setDetails(JSON.parse(localStorage.getItem(`${match.params.id}`)));
        } else {
            console.log("Fetching from API...");
            getPost();
        }
    }, []);
    
    useEffect(() => {
        console.log("Writing to local storage...");
        localStorage.setItem(`${match.params.id}`, JSON.stringify(details));
    }, [details]);

    return(
        <div className="postdetails">
            POST DETAILS
        </div>
    );
};

export default PostDetails;
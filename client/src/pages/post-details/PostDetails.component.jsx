import React, { useState, useEffect } from 'react';
import './PostDetails.styles.scss';
import axios from 'axios';

import { connect } from 'react-redux';

const PostDetails = ({ postId }) => {
    const [details, setDetails] = useState(null);

    const getPost = async () => {
        try{
            const res = await axios({
                method: 'GET',
                url: `/api/v1/posts/${postId}`
            });
            console.log(res);
            setDetails(res.data.data.data);
        } catch(err) {
            console.log(err.response.data.message);
        }
    };

    useEffect(() => {
        if(sessionStorage.getItem(`${postId}`)) {
            console.log("Getting from session storage...");
            setDetails(JSON.parse(sessionStorage.getItem(`${postId}`)));
        } else {
            console.log("Fetching from API...");
            getPost();
        }
    }, []);
    
    useEffect(() => {
        console.log("Writing to session storage...");
        sessionStorage.setItem(`${postId}`, JSON.stringify(details));
    }, [details]);

    console.log(details);
    return(
        <div className="postdetails">
            POST DETAILS
        </div>
    );
};

const mapStateToProps = state => ({
    postId: state.post.postId
});

export default connect(mapStateToProps)(PostDetails);
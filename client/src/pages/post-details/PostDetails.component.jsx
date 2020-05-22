import React, { useEffect } from 'react';
import './PostDetails.styles.scss';
import axios from 'axios';

import { connect } from 'react-redux';
import { setPostDetails } from '../../redux/redux-post/post.actions';

const PostDetails = ({ postId, postDetails, setPostDetails }) => {

    const getPost = async () => {
        try{
            const res = await axios({
                method: 'GET',
                url: `/api/v1/posts/${postId}`
            });
            // console.log(res);
            setPostDetails(res.data.data.data);
        } catch(err) {
            console.log(err.response.data.message);
        }
    };

    useEffect(() => {
        if(sessionStorage.postDetails) {
            console.log("Getting from session storage...");
            setPostDetails(JSON.parse(sessionStorage.postDetails));
        } else {
            console.log("Fetching from API...");
            getPost();
        }
    }, []);
    
    useEffect(() => {
        console.log("Writing to session storage...");
        sessionStorage.setItem('postDetails', JSON.stringify(postDetails));
    }, [postDetails]);

    return(
        <div className="postdetails">
            POST DETAILS
        </div>
    );
};

const mapStateToProps = state => ({
    postId: state.post.postId,
    postDetails: state.post.postDetails
});

const mapDispatchToProps = dispatch => ({
    setPostDetails: details => dispatch(setPostDetails(details))
});

export default connect(mapStateToProps, mapDispatchToProps)(PostDetails);
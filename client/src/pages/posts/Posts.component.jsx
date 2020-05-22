import React, { useState, useEffect } from 'react';
import './Posts.styles.scss';
import Post from '../../components/post/Post.component';
import axios from 'axios';

const Posts = () => {

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
            alert("ERROR: " + err.response.data.message);
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
        <div className="posts">
            {data.map(el => <Post slug={el.slug} id={el._id} key={el._id} post={el} />)}
        </div>
    );
};

export default Posts;
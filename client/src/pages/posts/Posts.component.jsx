import React from 'react';
import './Posts.styles.scss';
import Post from '../../components/post/Post.component';

const Posts = () => {
    return(
        <div className="posts">
            <Post/>
        </div>
    );
};

export default Posts;
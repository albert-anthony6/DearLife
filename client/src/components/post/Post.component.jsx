import React from 'react';
import './Post.styles.scss';

const Post = ({ post }) => (
    <div className="post">
        <img className="post__img" src={post.imageCover} alt="image"/>
        <h3 className="post__h3">{post.title}</h3>
        <p className="post__date">{post.createdAt}</p>
        <p className="post__summary">{post.summary}</p>
    </div>
);

export default Post;
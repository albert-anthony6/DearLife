import React from 'react';
import './Post.styles.scss';
import { Link } from 'react-router-dom';

const Post = ({ post, slug, id }) => (
    <div className="post">
        <Link to={`/posts/${slug}/${id}`}>
            <img className="post__img" src={post.imageCover} alt="image"/>
        </Link>
        <h3 className="post__h3">{post.title}</h3>
        <p className="post__date">{post.createdAt}</p>
        <p className="post__summary">{post.summary}</p>
    </div>
);

export default Post;
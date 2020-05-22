import React from 'react';
import './Post.styles.scss';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { setPostId } from '../../redux/redux-post/post.actions';

const Post = ({ post, slug, setPostId, id }) => {
    const postId = id => {
        setPostId(id);
    };

    return(
        <div className="post">
            <Link to={`/posts/${slug}/${id}`} onClick={() => postId(id)}>
                <img className="post__img" src={post.imageCover} alt="image"/>
            </Link>
            <h3 className="post__h3">{post.title}</h3>
            <p className="post__date">{post.createdAt}</p>
            <p className="post__summary">{post.summary}</p>
        </div>
    );
};

const mapDispatchToProps = dispatch => ({
    setPostId: id => dispatch(setPostId(id))
});

export default connect(null, mapDispatchToProps)(Post);
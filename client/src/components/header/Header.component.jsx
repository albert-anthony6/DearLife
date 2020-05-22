import React from 'react';
import './Header.styles.scss';
import { Link } from 'react-router-dom';
import axios from 'axios';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

const Header = ({ user, setCurrentUser }) => {

    const logout = async () => {
        try{
            const res = await axios({
                method: 'GET',
                url: '/api/v1/users/logout'
            });
            console.log(res);
            setCurrentUser(null);
            sessionStorage.setItem('user', JSON.stringify(''));
        } catch(err) {
            console.log(err.response.data.message);
        }
    };

    return(
        <header className="nav">
            <h1 className="logo">
                <Link to="/">dearlife</Link>
            </h1>
            
            {
            !user ? 
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/posts" className="nav__link">All Posts</Link>
                </li>
                <li className="nav__item">
                    <Link to="/login" className="nav__link">Log In</Link>
                </li>
                <li className="nav__item">
                    <Link to="/login" className="nav__link nav__link--active">Sign Up</Link>
                </li>
            </ul>
            :
            <ul className="nav__list">
                <li className="nav__item">
                    <Link to="/posts" className="nav__link">All Posts</Link>
                </li>
                <li className="nav__item">
                    <Link to="/" onClick={logout} className="nav__link">Sign Out</Link>
                </li>
                <li className="nav__item">
                    <Link to="/login" className="nav__link nav__link--active">Account</Link>
                </li>
            </ul>
            }
        </header>
    );
};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(Header);
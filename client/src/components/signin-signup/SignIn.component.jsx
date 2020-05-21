import React, { useState, useEffect } from 'react';
import './LogInSignUp.styles.scss';
import axios from 'axios';

import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';

const SignIn = ({ setCurrentUser }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [user, setUser] = useState(null);

    const login = async (email, password) => {
        try{
            const res = await axios({
                method: 'POST',
                url: '/api/v1/users/login',
                data: {
                    email,
                    password
                }
            });
            console.log(res);
            setUser(res.data.data.user);
            if(res.data.status === 'success') {
                alert('Logged in successfully!');
                window.setTimeout(() => {
                    window.location.assign('/');
                }, 1500)
            }
        } catch(err) {
            alert(err.response.data.message);
        }
    };
    
    const handleSubmit = e => {
        e.preventDefault();
        console.log('Getting user from API...');
        login(email, password);
        setEmail('');
        setPassword('');
    };
    
    useEffect(() => {
        if(!user) return;
        console.log('Writing to session storage...');
        sessionStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    
    return(
        <form onSubmit={handleSubmit} className="form form--signin">
            <h2 className="form__h2">Log into your account</h2>
            
            <label htmlFor="email">Email address</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off"/>
            
            <label htmlFor="password">Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" autoComplete="off"/>
            
            <button className="form__btn">Login</button>
        </form>
)};

const mapDispatchToProps = dispatch => ({
    setCurrentUser: user => dispatch(setCurrentUser(user))
});

export default connect(null, mapDispatchToProps)(SignIn);
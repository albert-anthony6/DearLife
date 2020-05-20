import React, { useState } from 'react';
import './LogInSignUp.styles.scss';
import axios from 'axios';

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
        } catch(err) {
            console.log(err.response.data);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        login(email, password);
        setEmail('');
        setPassword('');
    };

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

export default SignIn;
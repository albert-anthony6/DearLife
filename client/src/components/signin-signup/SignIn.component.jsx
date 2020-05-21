import React, { useState, useEffect } from 'react';
import './LogInSignUp.styles.scss';
import axios from 'axios';

const SignIn = () => {
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
        } catch(err) {
            console.log(err.response.data);
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
        if(sessionStorage.user){
            console.log('Getting from session storage...');
            setUser(JSON.parse(sessionStorage.user));
        }
    }, []);
    
    useEffect(() => {
        if(!user) return;
        console.log('Writing to session storage...');
        sessionStorage.setItem('user', JSON.stringify(user));
    }, [user]);
    
    console.log(user);
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
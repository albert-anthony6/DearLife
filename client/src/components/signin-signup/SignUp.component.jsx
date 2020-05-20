import React, { useState } from 'react';
import './LogInSignUp.styles.scss';
import axios from 'axios';

const SignUp = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirm, setConfirm] = useState('');

    const signup = async (name, email, password, passwordConfirm) => {
        try{
            const res = await axios({
                method: 'POST',
                url: '/api/v1/users/signup',
                data: {
                    name,
                    email,
                    password,
                    passwordConfirm
                }
            });
            console.log(res);
        } catch(err) {
            console.log(err.response.data);
        }
    };

    const handleSubmit = e => {
        e.preventDefault();
        signup(name, email, password, confirm);
        setName('');
        setEmail('');
        setPassword('');
        setConfirm('');
    };

    return(
        <form onSubmit={handleSubmit} className="form form--signup">
            <h2 className="form__h2">Create your account!</h2>
            
            <label htmlFor="name">Name</label>
            <input onChange={e => setName(e.target.value)} value={name} type="text" id="name" autoComplete="off"/>

            <label htmlFor="email">Email address</label>
            <input onChange={e => setEmail(e.target.value)} value={email} type="email" id="email" autoComplete="off"/>
            
            <label htmlFor="password">Password</label>
            <input onChange={e => setPassword(e.target.value)} value={password} type="password" id="password" autoComplete="off"/>

            <label htmlFor="confirm">Confirm password</label>
            <input onChange={e => setConfirm(e.target.value)} value={confirm} type="password" id="confirm" autoComplete="off"/>
            
            <button className="form__btn">Sign Up</button>
        </form>
    );
};

export default SignUp;
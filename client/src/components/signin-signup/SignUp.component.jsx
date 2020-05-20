import React from 'react';
import './LogInSignUp.styles.scss';

const SignUp = () => {
    return(
        <form className="form form--signup">
            <h2 className="form__h2">Create your account!</h2>
            
            <label htmlFor="name">Name</label>
            <input type="text" id="name" autoComplete="off"/>

            <label htmlFor="email">Email address</label>
            <input type="email" id="email" autoComplete="off"/>
            
            <label htmlFor="password">Password</label>
            <input type="password" id="password" autoComplete="off"/>

            <label htmlFor="confirm">Confirm password</label>
            <input type="password" id="confirm" autoComplete="off"/>
            
            <button className="form__btn">Sign Up</button>
        </form>
    );
};

export default SignUp;
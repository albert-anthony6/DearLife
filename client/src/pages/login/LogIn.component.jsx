import React from 'react';
import './LogIn.styles.scss';
import SignIn from '../../components/signin-signup/SignIn.component';
import SignUp from '../../components/signin-signup/SignUp.component';

const LogIn = () => (
    <div className="login-signup">
        <SignIn/>
        <SignUp/>
    </div>
);

export default LogIn;
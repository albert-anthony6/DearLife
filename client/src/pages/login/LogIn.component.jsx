import React from 'react';
import './LogIn.styles.scss';
import SignIn from '../../components/signin-signup/SignIn.component';
import SignUp from '../../components/signin-signup/SignUp.component';
import Alerts from '../../components/alerts/Alerts.component';

import { connect } from 'react-redux';
import { setUserStatus } from '../../redux/user/user.actions';

const LogIn = ({ status, setUserStatus }) => {
    if(status){
        setTimeout(() => {
            setUserStatus('');
        }, 2000);
    }

    return(
        <div className="login-signup">
            {!status ? null : <Alerts/>}
            <SignIn/>
            <SignUp/>
        </div>
    );
};

const mapStateToProps = state => ({
    status: state.user.status
});

const mapDispatchToProps = dispatch => ({
    setUserStatus: status => dispatch(setUserStatus(status))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogIn);
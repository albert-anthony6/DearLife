import React from 'react';
import './Alerts.styles.scss';

import { connect } from 'react-redux';

const Alerts = ({ status }) => (
    // Nested ternary operator would also work
    // <div className={`alerts ${status === 'success' ? 'alerts--ok' : (!status ? null : 'alerts--bad') }`}>
    <div className={`alerts ${status === 'success' ? 'alerts--ok' : 'alerts--bad'}`}>
        <p className="alerts__text">{status}</p>
    </div>
);

const mapStateToProps = state => ({
    status: state.user.status
});

export default connect(mapStateToProps)(Alerts);
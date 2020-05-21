import React from 'react';
import './Alerts.styles.scss';

import { connect } from 'react-redux';

const Alerts = ({ status }) => (
    <div className="alerts">
        <p className="alerts__text">{status}</p>
    </div>
);

const mapStateToProps = state => ({
    status: state.user.status
});

export default connect(mapStateToProps)(Alerts);
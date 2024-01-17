import React from 'react';
import './reset_password.css';
import Reset from '../components/ResetPassword/Reset';
import CardSide from '../components/CardSide/CardSide';

function Reset_Password() {

    return (
        <div className="container_reset_password">
            <CardSide />
            <Reset />
        </div>
    );
}

export default Reset_Password;

import React from 'react';
import Login from '../components/Login/Login';
import './login.css';
import CardSide from '../components/CardSide/CardSide';

function Connect_account() {

    return (
        <div className="container_login">
            <CardSide />
            <Login />
        </div>
    );
}

export default Connect_account;

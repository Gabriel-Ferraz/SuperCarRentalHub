import React from 'react';
import './register.css';
import Register from '../components/Register/Register';
import CardSide from '../components/CardSide/CardSide';

function Register_Account() {

    return (
        <div className="container_register">
            <CardSide />
            <Register />
        </div>
    );
}

export default Register_Account;

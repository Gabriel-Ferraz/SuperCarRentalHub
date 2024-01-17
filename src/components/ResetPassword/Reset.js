import React from 'react';
import './reset.css';
import email from '../../assets/email.jpg';

function Reset() {


    return (
    <div className="container_reset">
        <div className='reset_form_container'>
            <h2>Recuperar senha</h2>
            <span className='reset_password_subtitle'>Insira o e-mail utilizado no seu cadastro no campo abaixo. Você receberá um link por email.</span>
            <div className='reset_form_content'>
            <span className='title_input'>E-mail</span>
            <div className='block_input'>
            <img className='input_image' src={email} />
            <input
            className='input_styles'
            placeholder='Digite seu email'
            />
        </div>
        </div>
        <div className='send_reset_container'>
        <button className='button_reset'>Enviar</button>
        </div>
    </div>
    <span className='terms'>Protected by reCAPTCHA and subject to the Google <span className='terms_links'>Privacy Policy</span> and <span className='terms_links'>Terms of Service</span></span>
    </div>
    );
}

export default Reset;
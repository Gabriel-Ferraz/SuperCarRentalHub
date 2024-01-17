import React from 'react';
import './register.css';
import padlock from '../../assets/padlock.png';
import person from '../../assets/person.jpg';
import google from '../../assets/google-icon.png';
import email from '../../assets/email.jpg';


function Register() {

  return (
    <div className="register_container">
      <div className='register_form_container'>
        <h2>Cadastre-se</h2>
        <div className='register_form_content'>
          <span className='title_input'>Login</span>
          <div className='block_input'>
            <img className='input_image' src={person} />
            <input
              className='input_styles'
              placeholder='Nome de usuário'
            />
          </div>
        </div>
        <div className='register_form_content'>
          <span className='title_input'>E-mail</span>
          <div className='block_input'>
            <img className='input_image' src={email} />
            <input
              className='input_styles'
              placeholder='Digite seu email'
            />
          </div>
        </div>
        <div className='register_form_content'>
          <span className='title_input'>Senha</span>
          <div className='block_input'>
            <img className='input_image' src={padlock} />
            <input
              className='input_styles'
              placeholder='Digite sua senha'
              type='password'
            />
          </div>
        </div>
        <div className='register_form_content'>
          <span className='title_input'>Tipo</span>
          <select className='select_styles'>
            <option value='br'>Comprador</option>
            <option value='us'>Vendedor</option>
          </select>
        </div>
        <span className='terms'>Ao selecionar Cadastrar, eu concordo com os <span className='terms_links'>Termos de Serviço</span> e reconheço a <span className='terms_links'>Política de Privacidade</span></span>
        <div className='send_login_container'>
          <button className='button_register'>Logar</button>
          <span className='create_account'>Já possui uma conta?<span className='create_account_link'>Ir para login</span></span>
        </div>
      </div>
      <span className='terms'>Protected by reCAPTCHA and subject to the Google <span className='terms_links'>Privacy Policy</span> and <span className='terms_links'>Terms of Service</span></span>
    </div>
  );
}

export default Register;
import './login.css';
import padlock from '../../assets/padlock.png';
import person from '../../assets/person.jpg';
import google from '../../assets/google-icon.png'
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';

function Login() {

  const navigate = useNavigate();

  // Lista de usuários e senhas;
  const userList = [
    { username: 'Andre', password: 'xtreed' },
    { username: 'Gabriel', password: 'xtreed' },
  ];

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Verifica se as credenciais correspondem a algum usuário na lista
    const user = userList.find(user => user.username === username && user.password === password);

    if (user) {
      // Redireciona se as credenciais são válidas
      navigate('/home'); 
    } else {
      // Exibe um aviso se as credenciais não são válidas
      alert('Usuário ou senha incorretos. Por favor, verifique suas credenciais.');
    }
  }

  return (
    <div className="login_container">
      <div className='login_form_container'>
        <h2>Faça Login</h2>
        <div className='login_form_content'>
          <span className='title_input'>Login</span>
          <div className='block_input'>
            <img className='input_image' src={person} />
            <input
              className='input_styles'
              placeholder='Nome de usuário'
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        </div>
        <div className='login_form_content'>
          <span className='title_input'>Senha</span>
          <div className='block_input'>
            <img className='input_image' src={padlock} />
            <input
              className='input_styles'
              placeholder='Digite sua senha'
              type='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </div>
        <div className='forgot_remember_container'>
          <div className='remember_container'>
            <input type="checkbox" id="lembrarCheckbox" style={{ cursor: 'pointer' }} />
            <label className='remember_styles' htmlFor="lembrarCheckbox">Relembre-me</label>
          </div>
          <span className='forgot_styles' onClick={() => navigate('/reset_password')}>Esqueceu sua senha?</span>
        </div>
        <div className='send_login_container'>
          <button className='button_login' onClick={handleLogin}>Logar</button>
          <span className='or'>ou</span>
          <div className='login_google'>
            <img className='image_google' src={google} />
            <span className='text_google'>Logar com Google</span>
          </div>
          <span className='create_account'>Ainda não tem uma conta?<span className='create_account_link'>Criar Conta</span></span>
        </div>
      </div>
      <span className='terms'>Protected by reCAPTCHA and subject to the Google <span className='terms_links'>Privacy Policy</span> and <span className='terms_links'>Terms of Service</span></span>
    </div>
  );
}

export default Login;
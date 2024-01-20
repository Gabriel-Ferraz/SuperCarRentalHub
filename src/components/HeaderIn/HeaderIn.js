// HeaderIn.js
import React from 'react';
import './headerin.css';
import search from '../../assets/Search.png'
import message from '../../assets/message.png'
import bell from '../../assets/bell.png'
import toretto from '../../assets/toretto.jpg'



const HeaderIn = ({ onToggleModal }) => {
  return (
    <div className="headerin_container">
      <div className='content_name'>
      <span className='name'>Olá, Gabriel!</span>
      <span className='subtitle_headerin'>Vamos verificar sua loja hoje</span>
      </div>
      <div className='block_input_headerin'>
        <img className='input_image_headerin' src={search} alt="imagem do input" />
        <input
          className='input_styles_headerin'
          placeholder='pesquisar ..'
        />
      </div>
      <div className='container_noti_mess_perfil'>
        <div className='content_images'>
          <img className='image_notification' src={message} />
          <img className='image_notification' src={bell} />
        </div>
        <div className='container_user'>
          <img className='image_user' src={toretto} />
          <div className='content_user'>
            <span className='username'>Toretto</span>
            <span className='description_user'>Piloto Oficial</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderIn;

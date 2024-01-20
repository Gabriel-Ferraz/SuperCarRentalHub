import React from 'react';
import './relatorios.css';
import construction from '../../assets/construction.png';

const Relatorios = () => {
  return (
    <div className='container_relatorios'>
      <img className='image_construction' src={construction} alt="Under Construction" />
    </div>
  );
};

export default Relatorios;

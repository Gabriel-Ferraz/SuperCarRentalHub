import React from 'react';
import './marketing.css';
import construction from '../../assets/construction.png';

const Marketing = () => {
  return (
    <div className='container_marketing'>
      <img className='image_construction' src={construction} alt="Under Construction" />
    </div>
  );
};

export default Marketing;

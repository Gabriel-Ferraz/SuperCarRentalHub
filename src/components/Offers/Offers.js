import React from 'react';
import './offers.css';
import construction from '../../assets/construction.png';

const Offers = () => {
  return (
    <div className='container_offers'>
      <img className='image_construction' src={construction} alt="Under Construction" />
    </div>
  );
};

export default Offers;

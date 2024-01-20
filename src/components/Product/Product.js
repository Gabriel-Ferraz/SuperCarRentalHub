import React from 'react';
import './product.css';
import construction from '../../assets/construction.png';

const Product = () => {
  return (
    <div className='container_products'>
      <img className='image_construction' src={construction} alt="Under Construction" />
    </div>
  );
};

export default Product;

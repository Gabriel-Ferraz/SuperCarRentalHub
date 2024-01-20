// Modal.js
import React from 'react';
import './modal.css';
import sell from '../../assets/sell_icon.png';
import product from '../../assets/product_icon.png';
import financial from '../../assets/financial_icon.png';
import relatorio from '../../assets/relator_icon.png';
import Marketing from '../../assets/marketing_icon.png';

const Modal = ({ onButtonClick }) => {
  const list_buttons = [
    { id: 0, name: 'Dashboard', image: sell },
    { id: 1, name: 'Vendas', image: sell },
    { id: 2, name: 'Produtos', image: product },
    { id: 3, name: 'Financeiro', image: financial },
    { id: 4, name: 'Relatórios', image: relatorio },
    { id: 5, name: 'Marketing', image: Marketing },
  ];

  return (
    <div className='modal'>
      <div className='content_title'>
        <span className='title'>SuperRentalCars</span>
      </div>
      <div className='content_modal'>
        {list_buttons.map((button) => (
          <div
            className='option_buttons'
            key={button.id}
            onClick={() => onButtonClick(button.name)}
          >
            <img src={button.image} alt={button.name} />
            <span>{button.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Modal;

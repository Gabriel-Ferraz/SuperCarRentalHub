// Modal.js
import React, { useState } from 'react';
import './modal.css';

const Modal = ({ isOpen, onToggle }) => {
  const [isArrowUp, setIsArrowUp] = useState(false);

  const toggleArrowDirection = () => {
    setIsArrowUp(!isArrowUp);
  };

  return (
    <div className={`modal ${isOpen ? 'open' : ''}`}>
      <button className={`arrow ${isArrowUp ? 'up' : 'down'}`} onClick={() => { onToggle(); toggleArrowDirection(); }}>
        {isArrowUp ? '↑' : '↓'}
      </button>
      <p>Conteúdo do Modal</p>
    </div>
  );
};

export default Modal;

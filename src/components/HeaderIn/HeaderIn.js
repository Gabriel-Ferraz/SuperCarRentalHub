// Header.js
import React from 'react';
import './headerin.css';

const HeaderIn = ({ onToggleModal }) => {
  return (
    <div className="header">
      <h1>Minha Home</h1>
      <button onClick={onToggleModal}>☰</button>
    </div>
  );
};

export default HeaderIn;

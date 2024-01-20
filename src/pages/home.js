// Home.js
import React, { useState } from 'react';
import './home.css';
import HeaderIn from '../components/HeaderIn/HeaderIn';
import Modal from '../components/Modal/Modal';
import Dashboard from '../components/Dashboard/Dashboard';
import Offers from '../components/Offers/Offers';
import Product from '../components/Product/Product';
import Relatorios from '../components/Relatorios/Relatorios';
import Financial from '../components/Financial/Financial';
import Marketing from '../components/Marketing/Marketing';

function Home() {

  const [currentComponent, setCurrentComponent] = useState(<Dashboard />);

  const handleButtonClick = (component) => {
    switch (component) {
      case 'Dashboard':
        setCurrentComponent(<Dashboard />);
        break;
      case 'Vendas':
        setCurrentComponent(<Offers />);
        break;
      case 'Produtos':
        setCurrentComponent(<Product />);
        break;
        case 'Financeiro':
          setCurrentComponent(<Financial />);
          break;
      case 'Relatórios':
        setCurrentComponent(<Relatorios />);
        break;
        case 'Marketing':
          setCurrentComponent(<Marketing />);
          break;
      default:
        break;
    }
  };

  return (
    <div className='container_home'>
      <Modal onButtonClick={handleButtonClick} />
      <div className='content_home'>
        <HeaderIn />
        {currentComponent}
      </div>
    </div>
  );
}

export default Home;

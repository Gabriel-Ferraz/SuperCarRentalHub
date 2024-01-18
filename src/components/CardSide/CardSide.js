import React from 'react';
import './cardside.css';
import { useNavigate } from 'react-router-dom';

function CardSide() {

    const navigate = useNavigate();

    return (
        <div className='cardside_container'>
            <div className='container_image'>
                <div className='overlay'></div>
                <div className='texts'>
                    <span className='title' onClick={() => navigate('/')}>SuperCarsRentalsHub</span>
                    <span className='subTitle'>Venha Fazer Parte</span>
                    <span className='text_subtitle'>"Explorando Horizontes: Uma Jornada em Busca de Novos Desafios"</span>
                </div>
            </div>
        </div>
    );
}

export default CardSide;

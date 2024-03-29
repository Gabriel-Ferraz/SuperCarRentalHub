import React from 'react';
import './header.css';
import { useNavigate } from 'react-router-dom';

function Header() {

    const list_options = [
        { id: 0, text: 'Sobre Nós', link: '/sobre' },
        { id: 2, text: 'Entrar', link: '/login' },
        { id: 3, text: 'Cadastre-se', link: '/register' },
    ]

    const navigate  = useNavigate();

    return (
        <div className="header_container">
            <h1 className='header_title' onClick={() => navigate('/')}>SuperCarsRentalsHub</h1>
            <div className='header_buttons'>
                {list_options.map((option) => {
                    return (
                        <button className='buttons_styles' onClick={() => navigate(option.link)}>{option.text}</button>
                    )
                })}
            </div>

        </div>
    );
}

export default Header;
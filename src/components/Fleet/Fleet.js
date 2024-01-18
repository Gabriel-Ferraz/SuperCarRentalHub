import React from 'react';
import './fleet.css';
import mercedesImage from '../../assets/mercedes.jpg';
import bmwImage from '../../assets/bmw.jpg';
import astonImage from '../../assets/aston.jpg';
import { useNavigate } from 'react-router-dom';


function Fleet() {
    
    const list_fleet = [
        { id: 0, categoria: 'Mercedes', image: mercedesImage, title: 'super benz 2024', description: 'Modelo esportivo 900CV' },
        { id: 1, categoria: 'BMW', image: bmwImage, title: 'BMW Híbrida', description: 'Modelo 50% elétrico' },
        { id: 2, categoria: 'Aston Martin', image: astonImage, title: 'Aston Martin 2024', description: 'Elegante e feroz' },
    ];

    const navigate = useNavigate();

    return (
        <div className='container_fleet'>
            <h2 className='title_fleet'>Modelos exclusivos</h2>
            <span className='subtitle_fleet'>Abaixo segue alguns dos modelos mais exclusivos da nossa loja:</span>
            <div className='box_fleet'>
                {list_fleet.map((fleet) => (
                    <div className='container_images' key={fleet.id}>
                        <span>{fleet.categoria}</span>
                        <div className='container_cars' style={{ backgroundImage: `url(${fleet.image})` }}>
                            <div className='content_fleet'>
                                <h3>{fleet.title}</h3>
                                <p>{fleet.description}</p>
                                <div className='overlay'>
                                    <button className='login_button' onClick={() => navigate('/login')}>Logar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Fleet;

// MainContent.js
import React from 'react';
import './dashboard.css';
import tag from '../../assets/tag-2.png';
import dollar from '../../assets/dollar-circle.png';
import shopping from '../../assets/shopping-cart.png';
import grafic_one from '../../assets/grafic_one.png';
import grafic_two from '../../assets/grafic_two.png';
import grafic_three from '../../assets/grafic_three.png';
import search from '../../assets/Search.png';
import nivel from '../../assets/nivel.png';
import category from '../../assets/category.png';
import order from '../../assets/order.png';
import star from '../../assets/star.png';
import user from '../../assets/user.png';
import modulo from '../../assets/modulo.png';
import time from '../../assets/time.png';
import card_user from '../../assets/card_image_user.png'
import mercedesImage from '../../assets/mercedes.jpg';
import bmwImage from '../../assets/bmw.jpg';
import astonImage from '../../assets/aston.jpg';
import grade_avaliation from '../../assets/grade_avaliation.png';



const Dashboard = () => {
    const list_receitas = [
        { id: 0, image: dollar, value: 'R$ 8,245,00', grafic: grafic_one, percent: '-0,5%', text: 'Nova receita', className: 'red' },
        { id: 1, image: shopping, value: '1,256', grafic: grafic_two, percent: '+1,0%', text: 'Total receita', className: 'purple' },
        { id: 2, image: tag, value: 'R$ 431,00', grafic: grafic_three, percent: '+1,0%', text: 'Média de vendas', className: 'purple' },
    ]

    const list_filter = [
        { id: 0, image: nivel, title: 'Nível', },
        { id: 0, image: category, title: 'Categoria', },
        { id: 0, image: order, title: 'Ordenar por: Popular', },
    ]

    const list_products = [
        { id: 0, image: bmwImage, icon: grade_avaliation, text_icon: 'intermediário', title: 'BMW', image_user: card_user, username: 'Gabriel Ferraz', image_star: star, grade: '4,5', icon_card_user: user, text_card_user: '500 Alunos', icon_card_modulo: modulo, text_card_modulo: '5 Módulos', icon_card_time: time, text_card_time: '1h 30m', },
        { id: 0, image: mercedesImage, icon: grade_avaliation, text_icon: 'intermediário', title: 'MERCEDES', image_user: card_user, username: 'Dominic Toretto', image_star: star, grade: '5,5', icon_card_user: user, text_card_user: '500 Alunos', icon_card_modulo: modulo, text_card_modulo: '5 Módulos', icon_card_time: time, text_card_time: '1h 30m', },
        { id: 0, image: astonImage, icon: grade_avaliation, text_icon: 'intermediário', title: 'ASTON MARTIN', image_user: card_user, username: 'Bryan o´conner', image_star: star, grade: '6,5', icon_card_user: user, text_card_user: '500 Alunos', icon_card_modulo: modulo, text_card_modulo: '5 Módulos', icon_card_time: time, text_card_time: '1h 30m', },
    ]

    return (
        <div className='container_dashboard'>
            <div className='content_banner_dash'>
                <span>Uma concessionária completa e para você realizar seu sonho e acelerar nas estradas!</span>
                <span>Adquira seu veículo e fábrica ou personalizado, ou alugue para realizar seus sonhos.</span>
            </div>
            <div className='container_cards'>
                {list_receitas.map((receita) => {
                    return (
                        <div className='container_cards_financial'>
                            <div className='content_cards_title'>
                                <img src={receita.image} />
                                <span>{receita.text}</span>
                            </div>
                            <div className='content_cards_box'>
                                <div className='cards_box'>
                                    <h1>{receita.value}</h1>
                                    <span><span className={receita.className}>{receita.percent}</span> da semana passada</span>

                                </div>
                                <img className='image_grafic' src={receita.grafic} />
                            </div>
                        </div>
                    )
                })}
            </div>
            <div className='box_search_filter'>
                <div className='block_input_dash'>
                    <input
                        className='input_styles_dash'
                        placeholder='procure por modelo/valor/marca'
                    />
                    <img className='input_image_dash' src={search} alt="imagem do input" />
                </div>
                <div className='container_filters'>
                    {list_filter.map((filter) => {
                        return (
                            <div className='box_filters'>
                                <img src={filter.image} />
                                <span className='filters_title'>{filter.title}</span>
                            </div>
                        )
                    })}
                </div>
            </div>
            <div className='box_product'>
                <h2>Meus produtos</h2>
                <div className='containe_product'>
                    {list_products.map((product) => {
                        return (
                            <div key={product.id} className='box_product_card'>
                                <div className='box_image_background' style={{ backgroundImage: `url(${product.image})` }}>
                                    <div className='box_image_text'>
                                        <span className='box_product_title_icon'>{product.text_icon}</span>
                                        <img src={product.icon} />
                                    </div>
                                </div>
                                <div className='content_product_box'>
                                    <span className='content_product_box_title'>{product.title}</span>
                                    <div  className='box_grade_user'>
                                        <div className='box_user'>
                                            <img src={product.image_user} />
                                            <span className='username_card'>{product.username}</span>
                                        </div>
                                        <div className='box_user'>
                                            <img src={product.image_star} />
                                            <span>{product.grade}</span>
                                        </div>
                                    </div>
                                    <div className='box_info'>
                                        <div className='info_content'>
                                            <img src={product.icon_card_user} />
                                            <span className='info_text'>{product.text_card_user}</span>
                                        </div>
                                        <div className='info_content'>
                                            <img src={product.icon_card_modulo} />
                                            <span className='info_text'>{product.text_card_modulo}</span>
                                        </div>
                                        <div className='info_content'>
                                            <img src={product.icon_card_time} />
                                            <span className='info_text'>{product.text_card_time}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                    <div>

                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;

import React from 'react';
import './home.css';
import HeaderIn from '../components/HeaderIn/HeaderIn';
import Modal from '../components/Modal/Modal';
import { useState } from 'react';
function Home() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const toggleModal = () => {
        setIsModalOpen(!isModalOpen);
    };

    return (
        <div className="container_home">
            <HeaderIn onToggleModal={toggleModal} />
            <Modal onToggle={toggleModal} isOpen={isModalOpen} onClose={toggleModal} />
            <button className="open-modal-button" onClick={toggleModal}>
                Abrir/Fechar Modal
            </button>

        </div>
    );
}

export default Home;



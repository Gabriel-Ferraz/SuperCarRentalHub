// App.js
import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';

function App() {
  return (
    <div className="App">
      <span>HELLO WORLD!</span>
      <Link to="/account">
        <button className='button_account'>Clique aqui para logar!</button>
      </Link>
    </div>
  );
}

export default App;

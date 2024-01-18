// App.js
import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import SobreNos from './components/SobreNos/SobreNos';
import Footer from './components/Footer/Footer';
import Carrousel from './components/Carrousel/Carrousel';

function App() {
  return (
    <div className="App">
      <Header />
      < Banner />
      <SobreNos />
      <Carrousel />
      <Footer />
    </div>
  );
}

export default App;

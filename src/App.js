// App.js
import React from 'react';
import Header from './components/Header/Header';
import Banner from './components/Banner/Banner';
import Mission from './components/Mission/Missao';
import Fleet from './components/Fleet/Fleet';
import Footer from './components/Footer/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <Mission />
      <Fleet />
      <Footer />
    </div>
  );
}

export default App;

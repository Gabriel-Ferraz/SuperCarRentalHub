// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import ConnectAccount from './pages/login';
import RegisterAccount from './pages/register'; 
import ResetPassword from './pages/reset_password';
import Home from './pages/home';
import Sobre from './pages/sobre';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<ConnectAccount />} />
      <Route path="/register" element={<RegisterAccount />} />
      <Route path="/reset_password" element={<ResetPassword />} />
      <Route path="/home" element={<Home />} />
      <Route path="/Sobre" element={<Sobre/>} />
      {/* Outras rotas, se houver */}
    </Routes>
  );
}

function AppRouter() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}

export default AppRouter;

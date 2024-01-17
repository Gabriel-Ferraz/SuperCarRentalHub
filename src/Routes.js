// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Connect_account from './pages/login';
import Register_Account from './pages/register'; 
import Reset_Password from './pages/reset_password';
import Home from './pages/home';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/login" element={<Connect_account />} />
      <Route path="/register" element={<Register_Account />} />
      <Route path="/reset_password" element={<Reset_Password />} />
      <Route path="/home" element={<Home />} />
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

// Routes.js
import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App from './App';
import Account from './pages/account';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="/account" element={<Account />} />
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

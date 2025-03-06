import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from '../features/Home/Home';
import About from '../features/About/About';

function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
    </Routes>
  );
}

export default AppRoutes;
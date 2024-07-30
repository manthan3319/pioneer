import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './components/Home/Home';
import Copyright_Section from './components/Copyright_Section/Copyright_Section';

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
      </Routes>
      <Copyright_Section/>
    </BrowserRouter>
  );
}

export default App;

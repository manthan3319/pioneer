import React, { Suspense, lazy, useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Copyright_Section from './components/Copyright_Section/Copyright_Section';
import Loader from './components/Loader/Loader';

// Lazy load route components
const Home = lazy(() => import('./components/Home/Home'));
const AboutUs = lazy(() => import('./components/AboutUs/AboutUs'));
const Page_Services = lazy(() => import('./components/Services/Page_Services'));
const Client = lazy(() => import('./components/Client/Client'));
const Gallery = lazy(() => import('./components/Gallery/Gallery'));
const Contactus = lazy(() => import('./components/Contactus/Contactus'));

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Page_Services />} />
            <Route path="clients" element={<Client />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contactus" element={<Contactus />} />
          </Routes>
      <Copyright_Section/>
    </BrowserRouter>
  );
}

export default App;
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
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // This effect will run once when the component mounts
    // We're not changing the loading state, so it will always stay true
  }, []);

  return (
    <BrowserRouter>
      <Navbar />
      {isLoading ? (
        <Loader />
      ) : (
        <Suspense fallback={<Loader />}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="about" element={<AboutUs />} />
            <Route path="services" element={<Page_Services />} />
            <Route path="clients" element={<Client />} />
            <Route path="gallery" element={<Gallery />} />
            <Route path="contactus" element={<Contactus />} />
          </Routes>
        </Suspense>
      )}
      <Copyright_Section/>
    </BrowserRouter>
  );
}

export default App;
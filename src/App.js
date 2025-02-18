import React, { Suspense, lazy, useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Copyright_Section from "./components/Copyright_Section/Copyright_Section";
import Home from "./components/Home/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import Page_Services from "./components/Services/Page_Services";
import Client from "./components/Client/Client";
import Gallery from "./components/Gallery/Gallery";
import Contactus from "./components/Contactus/Contactus";
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
      <Copyright_Section />
    </BrowserRouter>
  );
};

export default App;

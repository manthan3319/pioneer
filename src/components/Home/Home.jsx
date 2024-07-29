import React from 'react';
import Painting_Contractor from '../Painting_Contractors/Painting_Contractor';
import Home_About from '../Home_About/Home_About';
import Home_Services from '../Home_Services/Home_Services';

const Home = () => {
  return (
    <div>
        <Painting_Contractor/>
        <Home_About/>
        <Home_Services/>
    </div>
  );
}

export default Home;

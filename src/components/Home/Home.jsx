
import React from 'react';
import Painting_Contractor from '../Painting_Contractors/Painting_Contractor';
import Home_About from '../Home_About/Home_About';
import Home_Services from '../Home_Services/Home_Services';
import Home_Clients from '../Home_Clients/Home_Clients';
// import Home_Machinery from '../Home_Machinery/Home_Machinery';
import Home_Gallery from '../Home_Gallery/Home_Gallery';
import Home_Contact from '../Home_Contact/Home_Contact';

const Home = () => {
  return (
    <div>
      <Painting_Contractor />
      <Home_About />
      <Home_Services />
      <Home_Clients />
      {/* <Home_Machinery/> */}
      <Home_Gallery />
      <Home_Contact />
    </div>
  );
}

export default Home;


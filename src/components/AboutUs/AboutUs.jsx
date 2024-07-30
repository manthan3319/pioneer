import React from 'react';
import { DynamicBackground } from '../Function/Function';
import { painting_coating } from '../../images/Images';
import Home_About from '../Home_About/Home_About';

const AboutUs = () => {
  return (
    <div className='bg_image'>
        <div>
            <DynamicBackground bgImage={painting_coating} title="About Us" />
        </div>
        <div>
            <Home_About/>
        </div>
    </div>
  );
}

export default AboutUs;

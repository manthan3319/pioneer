import React from 'react';
import { DynamicBackground } from '../Function/Function';
import { gallery5 } from '../../images/Images';
import Home_Gallery from '../Home_Gallery/Home_Gallery';

const Gallery = () => {
  return (
    <>
    <div>
      <DynamicBackground bgImage={gallery5} title="Gallery" />
    </div>
    <div>
    <Home_Gallery/>
    </div>
    </>
  );
}

export default Gallery;

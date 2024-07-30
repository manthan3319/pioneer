import React from 'react';
import { DynamicBackground } from '../Function/Function';
import { abount_img } from '../../images/Images';
import Home_Machinery from '../Home_Machinery/Home_Machinery';

const Machinery = () => {
  return (
    <>
    <div>
      <DynamicBackground bgImage={abount_img} title="Machinery" />
    </div>
    <div>
      <Home_Machinery />
    </div>
  </>
  );
}

export default Machinery;

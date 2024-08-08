import React from 'react';
import { DynamicBackground } from '../Function/Function';
import Home_Services from '../Home_Services/Home_Services';
import { industrialpainting } from '../../images/Images';

const Page_Services = () => {
  return (
    <>
    <div>
      <DynamicBackground  title="Services" />
    </div>
    <div>
    <Home_Services/>
    </div>
    </>
  );
}

export default Page_Services;

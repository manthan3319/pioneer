import React from 'react';
import { banner_men } from '../../images/Images';

const Painting_Contractor = () => {
  return (
    <div className='lg:max-w-[1440px] m-auto'>
        <div className='flex md:flex-row items-center'> 
                <div className='md:w-[40%]'>
                    <p className='text-[#a2373a] font-poppins md:text-[20px]'>Welcome To Pioneer Industries</p>
                    <h1 className='md:text-[55px] text-customBlue font-bold mt-[15px] '>Pioneer Scaffolding And Painting Contractors</h1>

                    <p className='text-gray-500 font-poppins mt-[10px]'>We would like to introduce ourselves as service provider company incorporated for providing industrial scaffolding and painting at major industries.</p>
                </div>

                <div className='md:w-[60%]'>
                    <img src={banner_men} className='w-[80%] m-auto' />
                </div>
        </div>
    </div>
  );
}

export default Painting_Contractor;

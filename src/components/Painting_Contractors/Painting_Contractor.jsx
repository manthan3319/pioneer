import React from 'react';
import { banner_men } from '../../images/Images';
import { useInView } from 'react-intersection-observer';
import { Typewriter } from 'react-simple-typewriter';

const Painting_Contractor = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className='lg:max-w-[1440px] m-auto'>
      <div className='flex md:flex-row items-center'>
        <div className='md:w-[40%]'>
          <p className='text-[#a2373a] font-poppins md:text-[20px]'>Welcome To Pioneer Industries</p>
          <div ref={ref} className='md:text-[55px] text-customBlue font-bold mt-[15px]'>
            {inView && (
              <Typewriter
                words={['Pioneer Scaffolding And Painting Contractors']}
                loop={1}
                cursor
                cursorStyle='_'
                typeSpeed={70}
                deleteSpeed={50}
                delaySpeed={1000}
              />
            )}
          </div>
          <p className='text-gray-500 font-poppins mt-[10px]'>
            We would like to introduce ourselves as service provider company incorporated for providing industrial scaffolding and painting at major industries.
          </p>
        </div>

        <div className='md:w-[60%]'>
          <img src={banner_men} className='w-[80%] m-auto' />
        </div>
      </div>
    </div>
  );
}

export default Painting_Contractor;

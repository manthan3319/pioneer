// ReusableDiv.js
import React from 'react';

const Title = ({ title, subtitle, subtitleColor = 'black' }) => {
  return (
    <div>
      <p className='md:text-[30px] font-Oxanium text-customBlue sm:text-[25px] text-[29px] border-b-[2px]  font-bold inline-block border-customRed'>{title}</p>
      <h1
        className={`md:text-[45px] lg:text-[35px] sm:text-[35px]  xl:text-[45px] text-[29px] font-Oxanium font-extrabold md:leading-[50px] text-${subtitleColor} md:mt-[20px] mt-[10px]`}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
}

export const DynamicBackground = ({ bgImage, title }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-[20px] lg:min-h-[248px] flex items-center justify-center min-h-[300px]"
      style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative flex flex-col items-center justify-center h-full w-full mt-[50px] md:mt-[0px]">
        <p className='flex gap-[10px] md:mb-[30px] text-white hover:text-customRed'>Home <span><i class="fa fa-angle-right" aria-hidden="true"></i></span> {title}</p>
        <h1 className="text-white  font-bold lg:text-[60px] font-Oxanium text-[45px]">{title}</h1>
      </div>
    </div>
  );
};


export default Title;

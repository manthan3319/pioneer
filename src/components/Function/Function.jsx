// ReusableDiv.js
import React from 'react';

const Title = ({ title, subtitle, subtitleColor = 'customBlue' }) => {
  return (
    <div>
      <p className='md:text-[30px] font-poppins text-customRed'>{title}</p>
      <h1
        className={`md:text-[45px] text-[26px] font-poppins font-extrabold md:leading-[50px] text-${subtitleColor} md:mt-[20px] mt-[10px]`}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
}

export const DynamicBackground = ({ bgImage, title }) => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-[20px] lg:min-h-[450px] flex items-center justify-center min-h-[300px]"
      style={{ backgroundImage: `url(${bgImage})`, backgroundAttachment: "fixed" }}
    >
      <div className="absolute inset-0 bg-black opacity-80"></div>
      <div className="relative flex flex-col items-center justify-center h-full w-full mt-[50px] md:mt-[0px]">
        <p className='flex gap-[10px] md:mb-[30px] text-white hover:text-customRed'>Home <span><i class="fa fa-angle-right" aria-hidden="true"></i></span> {title}</p>
        <h1 className="text-white  font-bold lg:text-[60px] font-poppins text-[45px]">{title}</h1>
      </div>
    </div>
  );
};


export default Title;

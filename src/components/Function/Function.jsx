// ReusableDiv.js
import React from 'react';

const Title = ({ title, subtitle, subtitleColor = 'customBlue' }) => {
  return (
    <div>
      <p className='md:text-[30px] font-poppins text-customRed'>{title}</p>
      <h1
        className={`md:text-[45px] font-poppins font-semibold md:leading-[50px] text-${subtitleColor} mt-[20px]`}
        dangerouslySetInnerHTML={{ __html: subtitle }}
      />
    </div>
  );
}

export default Title;

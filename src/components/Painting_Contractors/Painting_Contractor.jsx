import React from "react";
import {  abount_img, cpatsman_service, industrialpainting, painting_coating, sectionimg } from "../../images/Images";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Painting_Contractor = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const sliderSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: false,
  };

  return (
    <div className="relative">
      {/* Slider */}
      <Slider {...sliderSettings} className="absolute inset-0">
        <div className="relative w-full h-[600px]">
          <img src={abount_img} alt="Banner 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={cpatsman_service} alt="Banner 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={painting_coating} alt="Banner 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={industrialpainting} alt="Banner 2" className="w-full h-full object-cover" />
        </div>
      </Slider>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center text-white bg-black bg-opacity-80 px-[20px]">
        <div className="lg:max-w-[1440px] m-auto md:mt-[100px] md:mb-[150px]">
          <div className="flex flex-col md:flex-row items-center text-center">
            <div className="w-[100%] max-w-[1270px] m-auto">
              <p className="text-[#a2373a] font-poppins md:text-[28px] text-[18px] text">
                Welcome To Pioneer Industries
              </p>
              <div
                ref={ref}
                className="md:text-[55px] text-white font-bold mt-[15px] text-[29px]"
              >
                {inView && (
                  <Typewriter
                    words={["Pioneer Scaffolding And Painting Contractors"]}
                    loop={1}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                  />
                )}
              </div>
              <p className="text-white font-poppins mt-[10px] md:text-[25px] text-[15px]">
                We would like to introduce ourselves as a service provider company
                incorporated for providing industrial scaffolding and painting
                at major industries.
              </p>
            </div>
            {/* <div className="md:w-[60%]">
              <img src={sectionimg} className="w-[80%] m-auto" alt="Section Image" />
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting_Contractor;

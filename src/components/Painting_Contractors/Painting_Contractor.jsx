import React from "react";
import {
  abount_img,
  cpatsman_service,
  industrialpainting,
  painting_coating,
  sectionimg,
  service10,
  service11,
  service12,
  service13,
  service14,
  service15,
  service16,
  service17,
  service18,
  service19,
  service20,
  service21,
  service22,
} from "../../images/Images";
import { useInView } from "react-intersection-observer";
import { Typewriter } from "react-simple-typewriter";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Bounce } from "react-awesome-reveal"; // Import animation from react-awesome-reveal

const Painting_Contractor = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  return (
    <div className="relative">
      <Slider {...sliderSettings} className="absolute inset-0">
        <div className="relative w-full h-[600px]">
          <img src={service17} alt="Banner 1" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service10} alt="Banner 2" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service12} alt="Banner 3" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service19} alt="Banner 4" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service20} alt="Banner 5" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service21} alt="Banner 6" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service22} alt="Banner 7" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={industrialpainting} alt="Banner 8" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service13} alt="Banner 9" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={painting_coating} alt="Banner 10" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service14} alt="Banner 11" className="w-full h-full object-cover" />
        </div>
        <div className="relative w-full h-[600px]">
          <img src={service15} alt="Banner 12" className="w-full h-full object-cover" />
        </div>
      </Slider>

      {/* Content */}
      <div className="bg-[#00000012]">
        <div className="lg:max-w-[1440px] m-auto md:mb-[150px]">
          <div className="flex flex-col lg:flex-row items-center text-left">
            <div className="lg:w-[60%] max-w-[1270px] m-auto px-[32px] py-[72px] rounded-[5px]">
              <Bounce triggerOnce>
                <p className="text-customBlue font-bold font-Oxanium md:text-[35px] text-[23px] animate-pulse welcome_text">
                  Welcome To <span className="highlight">Pioneer Corporation</span>
                </p>
              </Bounce>
              <div
                ref={ref}
                className="md:text-[52px] text-black font-bold mt-[15px] text-[29px] sm:text-[34px] font-poppins"
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
              <p className="text-black font-poppins mt-[10px] md:text-[25px] text-[15px] sm:text-[18px]">
                We would like to introduce ourselves as a services provider company
                incorporated for providing industrial scaffolding and painting services
                at major industries.
              </p>
            </div>
            <div className="lg:w-[40%] bg-white p-[15px] w-[100%]">
              <h1 className="lg:text-[40px] text-customBlue font-Oxanium font-bold text-[35px]">
                Core Competence
              </h1>
              <div className="mt-[20px]">
                <p className="flex gap-[10px] font-poppins lg:text-[25px] text-customRed text-[18px] mb-[10px]">
                  <span><i className="fa fa-check" aria-hidden="true"></i></span> Scaffolding Services
                </p>
                <p className="flex gap-[10px] font-poppins lg:text-[25px] text-customRed text-[18px] mb-[10px]">
                  <span><i className="fa fa-check" aria-hidden="true"></i></span> Painting and Coating Services
                </p>
                <p className="flex gap-[10px] font-poppins lg:text-[25px] text-customRed text-[18px] mb-[10px]">
                  <span><i className="fa fa-check" aria-hidden="true"></i></span> Belzona Polymerics Ltd
                </p>
                <p className="flex gap-[10px] font-poppins lg:text-[25px] text-customRed text-[18px] mb-[10px]">
                  <span><i className="fa fa-check" aria-hidden="true"></i></span> Scaffolding Material On Rental
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Painting_Contractor;

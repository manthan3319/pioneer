
import React from "react";
import {
  clint1,
  clint10,
  clint11,
  clint12,
  clint13,
  clint14,
  clint15,
  clint16,
  clint17,
  clint18,
  clint19,
  clint2,
  clint20,
  clint21,
  clint22,
  clint3,
  clint4,
  clint5,
  clint6,
  clint7,
  clint8,
  clint9,
} from "../../images/Images";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Title from "../Function/Function";

const Home_Clients = () => {
  const settings = {
    infinite: true,
    speed: 3000,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    responsive: [
      {
        breakpoint: 2000,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1600,
        settings: {
          slidesToShow: 7,
        },
      },
      {
        breakpoint: 1414,
        settings: {
          slidesToShow: 6,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 5,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
        },
      },
    ],
  };

  const clients = [
    clint1,
    clint2,
    clint3,
    clint4,
    clint5,
    clint6,
    clint7,
    clint8,
    clint9,
    clint10,
    clint11,
    clint12,
    clint13,
    clint14,
    clint15,
    clint16,
    clint17,
    clint18,
    clint19,
    clint20,
    clint21,
    clint22,
  ];

  // Duplicate the clients array to ensure continuous effect
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <div className="overflow-hidden bg-[#daeaff] ">
      <div className="text-center  mb-[25px]">
        <Title subtitle="Our Clients" />
      </div>


      <div className="lg:max-w-[1440px] m-auto sm:mt-[70px] sm:mb-[100px] my-[100px]">
        <div className="flex flex-wrap gap-[20px] justify-center">
        <img src={clint18} className="sm:w-[220px] w-[132px] max-h-[116px]" alt="clint" />
          <img src={clint1} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint2} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint3} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint4} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint5} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint6} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint7} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint8} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint9} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint10} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint11} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint12} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint13} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint14} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint15} className="sm:w-[220px] w-[132px]" alt="clint" />
          <img src={clint16} className="sm:w-[220px] w-[132px] max-h-[116px]" alt="clint" />
          <img src={clint17} className="sm:w-[220px] w-[132px] max-h-[116px]" alt="clint" />
          <img src={clint19} className="sm:w-[220px] w-[132px] max-h-[116px]" alt="clint" />
          {/* <img src={clint20} className="sm:w-[220px] w-[132px] max-h-[116px]" alt="clint" /> */}
          <img src={clint21} className="sm:w-[220px] w-[132px] max-h-[116px]" alt="clint" />
          <img src={clint22} className="sm:w-[220px] w-[132px] max-h-[116px]" alt="clint" />
        </div>
      </div>

      <div className="slider_clint">
        <Slider {...settings}>
          {extendedClients.map((client, index) => (
            <div key={index} className="p-[0] slides_logo_clint">
              <img
                src={client}
                alt={`client-${index}`}
                className="w-[100%] h-[auto] m-auto max-h-[116px]"
              />
            </div>
          ))}
        </Slider>
      </div>

    </div>
  );
};

export default Home_Clients;


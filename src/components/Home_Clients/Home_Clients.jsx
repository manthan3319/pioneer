import React from "react";
import {
  Aditya_Birla_Group_Logo,
  bayer,
  clint1,
  clint10,
  clint11,
  clint12,
  clint13,
  clint14,
  clint16,
  clint18,
  clint19,
  clint2,
  clint22,
  clint3,
  clint4,
  clint5,
  clint6,
  clint7,
  clint8,
  clint9,
  shelllogo,
  Navin_Flourine_International,
  gardenvareli,
  furnacefabrica,
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
    clint10,
    clint16,
    clint12,
    clint19,
    clint18,
    clint14,
    clint2,
    clint7,
    bayer,
    Aditya_Birla_Group_Logo,
    clint13,
    clint5,
    clint11,
    clint22,
    clint1,
    clint9,
    clint8,
    clint6,
    clint4,
    clint3,
    shelllogo,
    Navin_Flourine_International,
    gardenvareli,
    furnacefabrica,
  ];

  // Duplicate the clients array for the slider
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <div className="overflow-hidden bg-[#daeaff] ">
      <div className="text-center mb-[25px]">
        <Title subtitle="Our Clients" />
      </div>

      <div className="lg:max-w-[1440px] m-auto sm:mt-[70px] sm:mb-[100px] my-[100px]">
        <div className="flex flex-wrap gap-[20px] justify-center items-center">
          {clients.map((client, index) => (
            <img
              key={index}
              src={client}
              className="sm:w-[220px] w-[132px] min-h-[80px] max-h-[116px] object-contain bg-white"
              alt={`client-${index}`}
            />
          ))}
        </div>
      </div>

      <div className="slider_clint">
        <Slider {...settings}>
          {extendedClients.map((client, index) => (
            <div key={index} className="p-[0] slides_logo_clint flex justify-center">
              <img
                src={client}
                alt={`client-${index}`}
                className="w-[100%] h-[auto] m-auto min-h-[116px] max-h-[116px] object-contain bg-white"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home_Clients;

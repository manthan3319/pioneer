import React from "react";
import {
  clint1,
  clint10,
  clint11,
  clint12,
  clint13,
  clint14,
  clint15,
  clint2,
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
  ];

  // Duplicate the clients array to ensure continuous effect
  const extendedClients = [...clients, ...clients, ...clients];

  return (
    <div className="md:mt-[80px] overflow-hidden mt-[50px] bg-[#daeaff] lg:py-[50px]">
      <div className="text-center md:mb-[50px] mb-[25px]">
        <Title subtitle="Our Clients" />
      </div>
      <div className="slider_clint">
        <Slider {...settings}>
          {extendedClients.map((client, index) => (
            <div key={index} className="p-[0] slides_logo_clint">
              <img
                src={client}
                alt={`client-${index}`}
                className="w-[100%] h-[auto] m-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home_Clients;

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
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
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

  return (
    <div className="md:mt-[80px]  overflow-hidden mt-[50px] mb-[50px]">
      <div className="text-center md:mb-[50px] mb-[25px]">
        <Title
          subtitle="Our Clients"
        />
      </div>
      <div className="">
        <Slider {...settings}>
          {clients.map((client, index) => (
            <div key={index}>
              <img
                src={client}
                alt={`client-${index}`}
                className="w-[350x] m-auto"
              />
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Home_Clients;

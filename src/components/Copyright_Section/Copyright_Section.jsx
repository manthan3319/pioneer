import React from "react";
import { logo } from "../../images/Images";
import { Link } from "react-router-dom";
import { useLocation } from 'react-router-dom';

const Copyright_Section = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const NavbarMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Clients", link: "/clients" },
    { id: 5, name: "Machinery", link: "/machinery" },
    { id: 6, name: "Gallery", link: "/gallery" },
    { id: 7, name: "Contact Us", link: "/contactus" },
  ];

  const NavbarMenu2 = [
    { id: 1, name: "Privacy & Policy", link: "/" },
    { id: 2, name: "Legal Services", link: "/" },
    { id: 3, name: "Blog Post", link: "/services" },
    { id: 4, name: "Career", link: "/clients" },
    { id: 5, name: "Copyright", link: "/machinery" },
    { id: 6, name: "Disclaimer", link: "/gallery" }
  ];

  return (
    <div className={` ${path === "machinery" ?"mt-[0px]":"mt-[80px]" } bg-[#e7e5e58a]`}>
      <div className="footer pt-[50px]">
        <div className="lg:max-w-[1440px] m-auto flex flex-wrap justify-between px-[20px]">
          <div className="md:w-[40%]">
            <img src={logo} alt="logo" className="w-[350px]" />
            <p className="mt-[30px] text-[16px] font-poppins max-w-[500px]">
              We would like to introduce ourselves as a service provider company incorporated for providing industrial scaffolding and painting at major industries.
            </p>
            <div className="flex flex-row gap-[21px] mt-[26px]">
              <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                <span><i className="fa fa-facebook" aria-hidden="true"></i></span>
              </Link>
              <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                <span><i className="fa fa-instagram" aria-hidden="true"></i></span>
              </Link>
              <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                <span><i className="fa fa-youtube-play" aria-hidden="true"></i></span>
              </Link>
              <Link className="text-[20px] flex justify-center items-center bg-customBlue text-white w-[40px] h-[40px] text-center rounded-[50px] px-[10px]">
                <span><i className="fa fa-linkedin" aria-hidden="true"></i></span>
              </Link>
            </div>
          </div>

          <div className="md:w-[20%] w-[100%] mt-[35px] md:mt-[0px]">
            <h1 className="text-[20px] font-poppins font-bold mb-[20px]">Company</h1>
            <ul className="list-none p-0">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="mb-[10px]">
                  <Link to={item.link} className="text-gray-800 hover:text-customRed font-poppins">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="md:w-[20%] mt-[35px] md:mt-[0px]">
            <h1 className="text-[20px] font-poppins font-bold mb-[20px]">Other Link</h1>
            <ul className="list-none p-0">
              {NavbarMenu.map((item) => (
                <li key={item.id} className="mb-[10px]">
                  <Link to={item.link} className="text-gray-800 hover:text-customRed font-poppins">
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center py-[15px] text-black border-t-customBlue border-t-[2px] mt-[70px] px-[20px]">
        <p className="font-poppins font-medium text-[15px]">
          Copyright 2012 Pioneer Scaffolding and Painting Contractors | Brightensolutions
        </p>
      </div>
    </div>
  );
};

export default Copyright_Section;

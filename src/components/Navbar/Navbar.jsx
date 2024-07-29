import React from "react";
import { NavLink } from "react-router-dom";
import { logo } from "../../images/Images";

const Navbar = () => {

  const NavbarMenu = [
    {
      id: 1,
      name: "Home",
      link: "/"
    },
    {
      id: 2,
      name: "About",
      link: "/about"
    },
    {
      id: 3,
      name: "Services",
      link: "/services"
    },
    {
      id: 4,
      name: "Clients",
      link: "/clients"
    },
    {
      id: 5,
      name: "Careers",
      link: "/careers"
    },
    {
      id: 6,
      name: "Gallery",
      link: "/gallery"
    },
    {
      id: 7,
      name: "Contact Us",
      link: "/contactus"
    },
  ];

  return (
    <>
      <div className="bg-black py-[10px]">
        <div className="lg:max-w-[1440px] m-auto">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-white text-[14px] flex gap-[10px] font-poppins">
                <span>
                  <i className="fa fa-map-marker" aria-hidden="true"></i>
                </span>
                1004 Icon Business Center, Opp Central Mall, Piplod,Surat,
                Gujarat 395007
              </p>
            </div>

            <div className="flex gap-[30px]">
              <p className="text-white flex gap-[10px] font-poppins">
                <span>
                  <i className="fa fa-phone" aria-hidden="true"></i>
                </span>
                +91 9825120450
              </p>
              <p className="text-white flex gap-[10px] font-poppins">
                <span>
                  <i className="fa fa-envelope-o" aria-hidden="true"></i>
                </span>
                pioneer.scaffoldings@rediffmail.com
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="lg:max-w-[1440px] m-auto">
        <div className="flex items-center justify-between ">
          <div>
            <img src={logo} alt="logo" className="lg:w-[300px]" />
          </div>

          <div>
            <nav>
              <ul className="flex gap-[20px]">
                {NavbarMenu.map((item) => (
                  <li key={item.id} className="text-[16px] font-poppins">
                    <NavLink 
                      to={item.link} 
                      className={({ isActive }) => 
                        isActive ? "text-black" : "text-[#225DA5]"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

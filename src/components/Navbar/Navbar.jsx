import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { logo } from "../../images/Images";
import { useInView } from "react-intersection-observer";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const Navbar = () => {
  const { ref: aboutRef, inView: isAboutInView } = useInView({
    threshold: 0.1,
  });

  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    if (isAboutInView) {
      setIsFixed(true);
    }
  }, [isAboutInView]);

  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const NavbarMenu = [
    { id: 1, name: "Home", link: "/" },
    { id: 2, name: "About", link: "/about" },
    { id: 3, name: "Services", link: "/services" },
    { id: 4, name: "Clients", link: "/clients" },
    { id: 5, name: "Machinery", link: "/machinery" },
    { id: 6, name: "Gallery", link: "/gallery" }
  ];

  return (
    <>
      <div
        className={`navbar-container navbar_section ${
          isFixed ? "fixed-navbar animate-navbar" : ""
        } md:block hidden`}
      >
        <div className="bg-black py-[10px]">
          <div className="lg:max-w-[1440px] m-auto px-[20px]">
            <div className="flex items-center justify-between md:flex-col lg:flex-row md:gap-[10px]">
              <div>
                <p className="text-white xl:text-[14px] lg:text-[13px] flex gap-[10px] 2xl:text-[14px] font-poppins">
                  <span>
                    <i className="fa fa-map-marker" aria-hidden="true"></i>
                  </span>
                  1004 Icon Business Center, Opp Central Mall, Piplod, Surat,
                  Gujarat 395007
                </p>
              </div>

              <div className="flex gap-[30px]">
                <p className="text-white flex gap-[10px] font-poppins xl:text-[14px] 2xl:text-[14px] lg:text-[13px]">
                  <span>
                    <i className="fa fa-phone" aria-hidden="true"></i>
                  </span>
                  +91 9825120450
                </p>
                <p className="text-white flex gap-[10px] font-poppins xl:text-[14px]  2xl:text-[14px] lg:text-[13px]">
                  <span>
                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                  </span>
                  info@pioneeradhesives.com
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:max-w-[1440px] m-auto px-[20px]">
          <div className="flex items-center justify-between">
            <div>
              <img
                src={logo}
                alt="logo"
                className="lg:w-[300px] md:w-[200px]"
              />
            </div>

            <div>
              <nav>
                <ul className="flex gap-[20px]">
                  {NavbarMenu.map((item, index) => (
                    <li
                      key={item.id}
                      className={`lg:text-[19px] md:text-[14px] font-Oxanium font-bold `}
                    >
                      <NavLink
                        to={item.link}
                        className={({ isActive }) =>
                          isActive ? "active-link" : "nav-link"
                        }
                      >
                        {item.name}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>

            <div>
              <Link to="/contactus" className="text-[19px] text-white bg-customRed font-Oxanium px-[28px] py-[13px] rounded-[5px]">Contact Us</Link>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden block mobile_slider">
        <div className="flex justify-between items-center sm:px-[30px] px-[20px]">
          <div>
            <img src={logo} alt="logo" className="w-[216px]" />
          </div>
          <div>
            <button onClick={toggleDrawer} className="text-[28px]">
              <i className="fa fa-bars" aria-hidden="true"></i>
            </button>
          </div>
        </div>

        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="right"
          className="bla bla bla"
        >
          <div className="py-[25px] px-[25px]">
            <nav>
              <ul className="flex gap-[10px] flex-col">
                {NavbarMenu.map((item) => (
                  <li
                    key={item.id}
                    className="text-[19px] font-poppins font-medium"
                  >
                    <NavLink
                      to={item.link}
                      className={({ isActive }) =>
                        isActive ? "active-link" : "nav-link"
                      }
                    >
                      {item.name}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Navbar;

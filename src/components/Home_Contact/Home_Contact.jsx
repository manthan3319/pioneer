import React from "react";
import Title from "../Function/Function";
import { help } from "../../images/Images";

const Home_Contact = () => {
  return (
    <div className="lg:max-w-[1440px] m-auto md:mt-[140px] mt-[70px] px-[20px]">
      <div className="flex lg:flex-row-reverse  items-center gap-[50px]  flex-col-reverse md:flex-col">
        <div className="lg:w-[50%] w-[100%] md:w-[100%] text-center md:text-left">
          <Title
            title="Get in Touch"
            subtitle="Contact Our Experts  <br>for Help"
          />
          <div className="md:mt-[45px] flex flex-col gap-y-[15px] mt-[30px]">
            <div className="md:flex gap-[15px] items-center">
              <span className="text-customRed md:text-[50px] text-[32px]">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <p className="text-gray-500 md:text-[20px] font-poppins text-[17px] lg:text-[16px] xl:text-[20px]">
                Pioneer Scaffolding And Painting Contractors 1004, Icon Business
                Center, Opp Central Mall, Piplod, Surat, Gujarat 395007
              </p>
            </div>

            <div className="md:flex gap-[15px] items-center">
              <span className="text-customRed md:text-[40px] text-[30px]">
              <i class="fa fa-phone" aria-hidden="true"></i>
              </span>
              <p className="text-gray-500 md:text-[20px] font-poppins text-[17px]  lg:text-[16px] xl:text-[20px]">
              +91 9825120450
              </p>
            </div>

            <div className="md:flex gap-[15px] items-center">
              <span className="text-customRed md:text-[40px]  text-[25px]">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </span>
              <p className="text-gray-500 md:text-[20px] font-poppins text-[15px]  lg:text-[16px] xl:text-[20px]">
              info@pioneeradhesives.com
              </p>
            </div>
          </div>
        </div>

        <div className="lg::w-[50%] w-[100%] md:w-[100%]">
          <div
            className="relative  bg-cover bg-center bg-no-repeat py-[50px] md:px-[50px] px-[20px] "
            style={{
              backgroundImage: `url(${help})`,
              minHeight: "100%",
            }}
          >
            <div className="absolute inset-0 bg-[#051932] opacity-90"></div>

            <div className="relative">
              <input
                type="text"
                placeholder="Name"
                className="py-[15px] px-[10px] border-[1px] border-white w-[100%] bg-transparent rounded-[4px] outline-none text-white"
              />

              <div className="flex gap-[10px] my-[30px]">
                <div className="w-[50%]">
                  <input
                    type="email"
                    placeholder="Email"
                    className="py-[15px] px-[10px] border-[1px] border-white w-[100%] bg-transparent rounded-[4px] outline-none text-white"
                  />
                </div>

                <div className="w-[50%]">
                  <input
                    type="Number"
                    placeholder="Number"
                    className="py-[15px] px-[10px] border-[1px] border-white w-[100%] bg-transparent rounded-[4px] outline-none text-white"
                  />
                </div>
              </div>

              <div>
                <textarea
                  class="mf-input mf-textarea outline-none bg-transparent text-white border-[1px] border-white w-[100%] p-[10px] rounded-[4px]"
                  id="mf-input-text-area-14f2470"
                  name="mf-textarea"
                  placeholder="Your Message "
                  cols="30"
                  rows="10"
                  aria-invalid="false"
                ></textarea>
              </div>

              <div>
                <button
                  type="submit"
                  className="w-[100%] font-poppins  text-[18px] bg-customRed mt-[30px] py-[10px] text-white"
                >
                  Submit Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_Contact;

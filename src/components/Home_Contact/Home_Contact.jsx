import React from "react";
import Title from "../Function/Function";
import { help } from "../../images/Images";

const Home_Contact = () => {
  return (
    <div className="lg:max-w-[1440px] m-auto md:mt-[140px]">
      <div className="flex md:flex-row items-center gap-[50px]">
        <div className="md:w-[40%]">
          <Title
            title="Get in Touch"
            subtitle="Contact Our Experts  <br>for Help"
          />
          <div className="md:mt-[45px] flex flex-col gap-y-[15px] ">
            <div className="flex gap-[15px] items-center">
              <span className="text-customRed md:text-[50px]">
                <i class="fa fa-map-marker" aria-hidden="true"></i>
              </span>
              <p className="text-gray-500 text-[20px] font-poppins">
                Pioneer Scaffolding And Painting Contractors 1004, Icon Business
                Center, Opp Central Mall, Piplod, Surat, Gujarat 395007
              </p>
            </div>

            <div className="flex gap-[15px] items-center">
              <span className="text-customRed md:text-[40px]">
              <i class="fa fa-phone" aria-hidden="true"></i>
              </span>
              <p className="text-gray-500 text-[20px] font-poppins">
              +91 9825120450
              </p>
            </div>

            <div className="flex gap-[15px] items-center">
              <span className="text-customRed md:text-[40px]">
              <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </span>
              <p className="text-gray-500 text-[20px] font-poppins">
              pioneer.scaffoldings@rediffmail.com
              </p>
            </div>
          </div>
        </div>

        <div className="md:w-[60%]">
          <div
            className="relative  bg-cover bg-center bg-no-repeat py-[50px] px-[50px] "
            style={{
              backgroundImage: `url(${help})`,
              minHeight: "100%",
            }}
          >
            <div className="absolute inset-0 bg-black opacity-90"></div>

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

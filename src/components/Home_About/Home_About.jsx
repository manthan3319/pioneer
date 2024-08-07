import React, { useState } from "react";
import Title from "../Function/Function";
import { abount_img, certificate1, certificate2 } from "../../images/Images";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";
import { useLocation } from 'react-router-dom';
import Modal from 'react-modal';

Modal.setAppElement('#root'); // Set the app element for accessibility

const Home_About = () => {
  const location = useLocation();
  const path = location.pathname.substring(1);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [modalImageIndex, setModalImageIndex] = useState(0);

  const images = [certificate1, certificate2];

  const openModal = (index) => {
    setModalImageIndex(index);
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  const nextImage = () => {
    setModalImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div className="lg:max-w-[1440px] m-auto md:mt-[80px] px-[20px] sm:mt-[50px] my-[50px] ">
      <div className="flex md:flex-row flex-col gap-[40px]">
        <div
          className={`bg-cover bg-center bg-no-repeat home_about_img lg:min-w-[150px] lg:w-[50%] sm:relative relative md:absolute lg:relative md:w-[95%] ${path === "about" ? "md:min-h-[701px] sm:min-h-[737px] min-h-[1310px]" : "lg:min-h-[100%] sm:min-h-[804px] min-h-[1400px]"}`}
          style={{ backgroundImage: `url(${abount_img})` }}
        >
          <div className="absolute inset-0 bg-[#322f2f] opacity-80 lg:hidden"></div>

          <div className="absolute bg-customRed text-center bottom-0 p-[35px] border-[10px] border-white hidden lg:block">
            <h1 className="text-[50px] font-Oxanium text-white font-bold">
              {inView ? (
                <CountUp start={0} end={13} duration={2.75} suffix="+" />
              ) : (
                "0+"
              )}
            </h1>
            <p className="text-white font-Oxanium">Years Experience</p>
          </div>
        </div>

        <div className="flex flex-col justify-center sm:mt-0 mt-0 md:mt-[0px] lg:w-[50%] sm:absolute absolute md:relative md:p-[15px] sm:w-[95%] w-[90%] sm:p-[15px] p-[10px]">
          <div>
            <h1 className="md:text-white lg:text-black sm:text-white sm:text-[25px] text-[35px] text-white">
              <Title
                title="About Us"
                subtitle="Our Commitment to <br>Innovation"
              />
            </h1>
            <div className="mt-[30px]">
              <motion.p
                className="lg:text-gray-500 font-poppins text-white"
                ref={ref}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5 }}
              >
                The company is incorporated with a vision to provide dedicated
                services to existing valued customers as well as to major
                industrial giants located in INDIA. We at Pioneer are striving
                for excellence in providing services with the due satisfaction
                of our customers.
              </motion.p>

              <motion.p
                className="lg:text-gray-500 font-poppins mt-[30px] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                Our team consists of NACE qualified coating inspectors,
                qualified workforce, modernized machinery, and our experience
                has placed us ahead. Apart from this, our quality policy, our
                health safety and environment policy, and commitment to deliver
                on schedule have helped us establish ourselves as synonyms for
                the best service provider.
              </motion.p>

              <motion.p
                className="lg:text-gray-500 font-poppins mt-[30px] text-white"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Our Esteemed Parent Company M/s. PIONEER ADHESIVES was
                incorporated in 1995 with a vision to provide maintenance
                products and solutions for industrial giants located in and
                around Surat. Thanks to our valued customers for placing immense
                faith in us, which grew our company fourfold and reached a
                milestone to be an 18 crore company in the year 2022-2023.
              </motion.p>

              <div className="flex sm:flex-row flex-col gap-[10px] mt-[15px] items-center">
                <div className="flex gap-[10px] mt-[15px]">
                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <img
                        src={certificate1}
                        alt="certificate1"
                        className="w-[150px] xl:w-[439px] border-[2px] border-black cursor-pointer"
                        onClick={() => openModal(0)}
                      />
                    </motion.p>
                  </div>

                  <div>
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={inView ? { opacity: 1, y: 0 } : {}}
                      transition={{ duration: 0.5, delay: 0.6 }}
                    >
                      <img
                        src={certificate2}
                        alt="certificate2"
                        className="w-[150px] xl:w-[439px] border-[2px] border-black cursor-pointer"
                        onClick={() => openModal(1)}
                      />
                    </motion.p>
                  </div>
                </div>

                <div>
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 }}
                  >
                    <h1 className="sm:text-[18px] font-bold lg:text-black text-white text-center sm:text-left">
                      AN ISO 9001:2015 | ISO 45001 : 2018 CERTIFIED COMPANY
                    </h1>
                  </motion.p>
                </div>
              </div>
            </div>

            <div className="block lg:hidden bg-customRed text-center p-[35px] border-[10px] border-white sm:w-[36%] mt-[24px] w-[70%]">
              <h1 className="text-[50px] font-poppins text-white font-bold">
                {inView ? (
                  <CountUp start={0} end={13} duration={2.75} suffix="+" />
                ) : (
                  "0+"
                )}
              </h1>
              <p className="text-white font-poppins">Years Experience</p>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        className="modal sm:left-[50%] left-[110px]"
        overlayClassName="overlay"
      >
        <button onClick={closeModal} className="close-modal-button absolute top-0 left-0">
        <i class="fa fa-times" aria-hidden="true"></i>
        </button>
        {images[modalImageIndex] && (
          <div className="flex flex-col items-center">
            <img src={images[modalImageIndex]} alt="Enlarged certificate" className="md:w-[500px] w-[100%] h-auto m-auto" />
            <button onClick={nextImage} className="next-image-button mt-4">
            <i class="fa fa-angle-right" aria-hidden="true"></i>
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
};

export default Home_About;

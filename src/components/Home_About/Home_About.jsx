import React from "react";
import Title from "../Function/Function";
import { abount_img } from "../../images/Images";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";
import { motion } from "framer-motion";

const Home_About = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="lg:max-w-[1440px] m-auto md:mt-[80px]">
      <div className="flex md:flex-row flex-col gap-[40px]">
        <div
          className="md:w-[50%] bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${abount_img})`, minHeight: "100%" }}
        >
          <div className="absolute bg-customRed text-center bottom-0 p-[35px] border-[10px] border-white">
            <h1 className="text-[50px] font-poppins text-white font-bold">
              {inView ? (
                <CountUp start={0} end={13} duration={2.75} suffix="+" />
              ) : null}
            </h1>
            <p className="text-white font-poppins">Years Experience</p>
          </div>
        </div>
        <div className="md:w-[50%] flex flex-col justify-center">
          <div>
            <Title
              title="About Us"
              subtitle="Our Commitment to <br>Innovation"
            />
            <div className="mt-[30px]">
              <motion.p
                className="text-gray-500 font-poppins"
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
                className="text-gray-500 font-poppins mt-[30px]"
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
                className="text-gray-500 font-poppins mt-[30px]"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.6 }}
              >
                Our Esteemed Parent Company M/s. PIONEER ADHESIVES was
                incorporated in 1995 with a vision to provide maintenance
                products and solutions for industrial giants located in and
                around Surat. Thanks to our valued customers for placing
                immense faith in us, which grew our company fourfold and
                reached a milestone to be an 18 crore company in the year
                2012-2013.
              </motion.p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home_About;

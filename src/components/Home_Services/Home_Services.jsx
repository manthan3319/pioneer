import React from "react";
import Title from "../Function/Function";
import { motion } from "framer-motion";
import { belzona, cpatsman_service, firepotected, industrialpainting, painting_coating } from "../../images/Images";

const services = [
  {
    id: 1,
    image: cpatsman_service,
    title: "Scaffolding Services",
    description: "Pioneer has evolved as one of the most competitive scaffolding services provider in the region and we at Pioneer have knowledge and expertise to handle scaffold erection to reach whether your industrial project or the multi-storey commercial building.<br />We stock a variety of different types of scaffolding that can be customized to your specific requirements.<br />We offer scaffolding and accessories for all size of projects from small and medium to large and major projects."
  },
  {
    id: 2,
    image: painting_coating,
    title: "Painting and Coating Services",
    description: "We provide a broad range of routine to specialized industrial painting services and proudly list a prestigious number of high quality clients and noteworthy projects.<br /><br />We at Pioneer will provide you with the confidence that your industrial painting job will be done to the highest levels of your expectations. When we handle your project, our quality, services, safety, on-time performance and genuine economic value are assured."
  },
  {
    id: 3,
    image: belzona,
    title: "Belzona Polymerics Ltd",
    description: "Authorized Applicator and Channel Partners for Belzona Polymerics Ltd: With over 50 products specially engineered to work within the parameters of your demanding environment, we offer solutions in a variety of industries. Our proven solutions to a wide array of maintenance and repair issues have allowed us to gain the confidence of countless engineers, architects, contractors and facilities managers."
  },
  {
    id: 4,
    image: firepotected,
    title: "Fire Protection Solutions",
    description: "Authorized Applicator and Channel Partners for 3M Fire Protection Solutions: 3M Fire Protection Products are used around the world to help protect people, equipment buildings and precious assets. <br> <br>Authorized Applicator and Channel Partners for 3M Fire Protection Solutions: 3M Fire Protection Products are used around the world to help protect people, equipment buildings and precious assets."
  },
  {
    id: 5,
    image: industrialpainting,
    title: "Following are the services which we offer in industrial painting",
    description: "->Vacuum Blasting <br>->Shot Blasting <br>->Garnet Blasting <br>->Wet Blasting  <br>->Grit Blasting <br>->Automatic Blasting  <br>->Copper Slag Blasting "
  },
];

const Home_Services = () => {
  return (
    <div className="bg-black md:mt-[80px] md:py-[30px]">
      <div className="lg:max-w-[1440px] m-auto">
        <div className="text-center">
          <Title title="Our Service Portfolio" subtitle="Full-Spectrum Industrial Support" subtitleColor="white" />
        </div>

        <div className="mt-[80px] flex flex-wrap gap-[28px] justify-center">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className="md:w-[32%] bg-white rounded-[5px] shadow-lg service_card"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              whileHover={{ scale: 1.05, boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}
            >
              <div>
                <img src={service.image} className="w-[100%] rounded-t-[5px] min-h-[300px]" alt={service.title} />
              </div>
              <div className="p-[15px]">
                <h1 className="text-customRed font-poppins md:text-[20px] font-medium mb-[5px] text-center">{service.title}</h1>
                {/* <p className="text-[17px] font-poppins" dangerouslySetInnerHTML={{ __html: service.description }} /> */}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home_Services;

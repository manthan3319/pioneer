import React from "react";
import Title from "../Function/Function";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { belzona, cpatsman_service, firepotected, industrialpainting, painting_coating } from "../../images/Images";

const services = [
  {
    id: 1,
    image: cpatsman_service,
    title: "Scaffolding Services",
    description: "Pioneer offers competitive scaffolding services for industrial and commercial projects of all sizes. We customize scaffolding to meet specific requirements and provide detailed CAD drawings for client visualization. With a proven track record, we deliver safe and cost-effective solutions. Our strong client relationships result in high repeat business. Contact us for reliable and expert scaffolding services for your next project."
  },
  {
    id: 2,
    image: painting_coating,
    title: "Painting and Coating Services",
    description: "Pioneer prioritizes industrial painting and coating services, offering a broad range from routine to specialized projects. We ensure quality, safety, on-time performance, and economic value, with a prestigious list of high-quality clients and projects. Our services include various blasting techniques, epoxy coating and painting, and thermal zinc/aluminum spray. We manage and self-perform all work to meet your highest expectations. Partner with us for innovative solutions and seamless project execution."
  },
  {
    id: 3,
    image: belzona,
    title: "Belzona Polymerics Ltd",
    description: "Pioneer is an authorized applicator and channel partner for Belzona Polymerics Ltd, offering over 50 specialized products for diverse industries. Our solutions address maintenance and repair issues, earning the trust of engineers, architects, contractors, and facility managers. With over 55 years of experience, Belzona Polymerics Ltd provides proven solutions for problems like erosion, corrosion, chemical attacks, abrasion, and water/weatherproofing. Our expertise ensures effective handling of challenges such as corrosion under insulation (CUI) and safety surfacing."
  }
];

const Home_Services = () => {
  return (
    <div className="md:mt-[80px] md:py-[30px] mt-[60px] px-[20px]">
      <div className="lg:max-w-[1440px] m-auto">
        <div className="text-center">
          <Title title="Our Service Portfolio" subtitle="Full-Spectrum Industrial Support" />
        </div>

        <div className="md:mt-[80px] flex flex-wrap gap-[28px] justify-center mt-[20px]">
          {services.map((service, index) => (
            <ServiceCard key={service.id} service={service} index={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, delay: index * 0.2 } },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", transition: { duration: 0.3 } }}
      className="md:w-[48%] sm:w-[45%] xl:w-[31%] lg:w-[48%] bg-white rounded-[5px] shadow-lg service_card border-[1px] border-customBlue"
    >
      <div>
        <img src={service.image} className="w-[100%] rounded-t-[5px] md:min-h-[300px]" alt={service.title} />
      </div>
      <div className="p-[15px]">
        <h1 className="text-customRed font-poppins md:text-[20px] font-bold mb-[5px] text-center">{service.title}</h1>
        <p className="text-gray-500 font-poppins text-[17px]" dangerouslySetInnerHTML={{ __html: service.description }} />
      </div>
    </motion.div>
  );
};

export default Home_Services;

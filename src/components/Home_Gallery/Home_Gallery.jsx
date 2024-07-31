import React from "react";
import Title from "../Function/Function";
import { gallery1, gallery2, gallery3, gallery4, gallery5, gallery6, gallery7 } from "../../images/Images";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const galleryItems = [
  { id: 1, image: gallery1, title: "CEMENT INDUSTRY" },
  { id: 2, image: gallery2, title: "CHIMNEY MAINTENANCE & REPAIRS" },
  { id: 3, image: gallery3, title: "OIL & GAS INDUSTRY" },
  { id: 4, image: gallery4, title: "INDUSTRIAL SHUTDOWNS" },
  { id: 5, image: gallery5, title: "INFRASTRUCTURE CONSTRUCTION" },
  { id: 6, image: gallery6, title: "ROUTINE MAINTENANCE & REPAIRS" },
  { id: 7, image: gallery7, title: "STORAGE TANKS & PIPE LINE" },
];

const Home_Gallery = () => {
  return (
    <div className="lg:max-w-[1440px] m-auto md:mt-[80px] mt-[30px] px-[20px]">
      <div className="text-center">
        <h1 className="border-b-[2px] inline-block border-customRed pb-[5px]">
          <Title subtitle="Gallery" />
        </h1>
      </div>

      <div className="md:mt-[50px] flex flex-wrap gap-[20px] justify-center mt-[30px]">
        {galleryItems.map((item, index) => (
          <GalleryCard key={item.id} item={item} index={index} />
        ))}
      </div>
    </div>
  );
};

const GalleryCard = ({ item, index }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });

  const variants = {
    hidden: { opacity: 0, scale: 0.9, y: 50 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, delay: index * 0.2, type: "spring", stiffness: 100 }
    },
  };


  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
      className="md:w-[48%] lg:w-[31%] xl:w-[23%] sm:w-[45%] w-[100%] bg-white rounded-lg overflow-hidden shadow-lg border-[1px] border-black transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-customRed"
    >
      <div className="relative">
        <img
          src={item.image}
          alt={item.title}
          className="w-full h-[200px] object-cover transition-transform duration-300"
        />
       
      </div>
      <div className="p-[15px] text-center">
        <h1 className="text-customRed font-poppins md:text-[20px] font-medium">
          {item.title}
        </h1>
      </div>
    </motion.div>
  );
};

export default Home_Gallery;

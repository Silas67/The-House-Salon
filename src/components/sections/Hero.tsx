import Image from "next/image";
import React from "react";
import Button from "@/components/common/Button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full lg:h-[100vh] h-[80vh] overflow-hidden">
      <div className="absolute w-full h-full z-10">
        <Image
          src={"/assets/Hero2.jpg"}
          alt="/"
          fill
          className="w-full h-full object-cover"
          style={{ backgroundAttachment: "fixed" }}
        />
      </div>

      {/* Text Content */}
      <div className="relative flex w-full h-full items-center justify-center z-20 text-center text-white ">
        <motion.div 
        initial = {{y:10, opacity:0}}
        animate = {{y: 0, opacity: 1}}
        transition={{duration:1, ease:"easeInOut"}}
        className="absolute flex md:items-center justify-center max-sm:items-start max-sm:text-left flex-col md:gap-4 max-sm:gap-6 max-sm:pl-4">
          <h1 className="text-[52px] leading-16 md:w-[700px] w-[400px] max-sm:text-[44px] max-smm:text-[36px] font-black Stardom-font max-sm:scale-[0.9] max-smm:leading-12">
            Luxury Grooming for the Modern Gentleman
          </h1>

          <p className="text-[#dddbdb] md:w-[500px] w-[400px] max-sm:scale-[0.9]">
            The House is a luxury barbing salon inspired by the need to redefine
            the typical barbershop experience in Abuja.
          </p>

          <Button className="bg-secondary max-sm:ml-4" href="/booking-page" backgroundColor="var(--foreground)">
            {" "}
            Book Now
          </Button>
        </motion.div>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/60 z-10" />
    </div>
  );
};

export default Hero;

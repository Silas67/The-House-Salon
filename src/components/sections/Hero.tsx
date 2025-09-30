import Image from "next/image";
import React from "react";
import Button from "@/components/common/Button";

const Hero = () => {
  return (
    <div className="relative w-full max-mobile:h-[70vh] md:h-[100vh] overflow-hidden">
      <div className="absolute w-full h-full z-10">
        <Image
          src={"/assets/Hero3.jpg"}
          alt="/"
          fill
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text Content */}
      <div className="relative flex flex-col w-full h-full items-center justify-center z-20 text-center text-white ">
        <div className="absolute flex items-center justify-center flex-col gap-4">
          <h1 className="text-[52px] font-sans leading-16  w-[700px]">
            Luxury Grooming for the Modern Gentleman
          </h1>

          <p className="text-muted  w-[700px]">
            Groomed By Elereka is a luxury barbing salon inspired by the need to
            redefine the typical barbershop experience in Lagos.
          </p>

          <Button backgroundColor="var(--primary)" className="bg-secondary">
            {" "}
            Book Now
          </Button>
        </div>
      </div>

      {/* Overlay for readability */}
      <div className="absolute inset-0 bg-black/70 z-10" />
    </div>
  );
};

export default Hero;

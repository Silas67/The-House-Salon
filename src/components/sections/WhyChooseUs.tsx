import React from "react";

export const WhyChooseUs = () => {
  return (
    <div className="w-full  px-[100px] flex flex-col items-center justify-center py-24 max-mobile:px-[30px] bg-foreground">
      <div
        className="w-full flex justify-between items-center  lg:gap-[70px] all:flex-col lg:flex-row-reverse max-mobile:gap-[40px] md:gap-[50px]  text-primary 
      "
      >
        <div className="text-center md:hidden gap-[30px] w-full py-4 Stardom-font">
          <p className=" text-[12px] font-bold">Why Us</p>{" "}
          <h1 className=" text-5xl md:w-[80%] all:w-full">
            The Art of Living Begins With Us
          </h1>
        </div>

        <div className="relative w-[50%] h-[100%] overflow-hidden rounded-[10px] all:w-full">
          <video src={"/assets/video1.mp4"} />
          <div className="absolute w-full h-full inset-[0]  opacity-30"></div>
        </div>

        <div className="grid lg:w-1/2 lg:gap-[30px] all:w-full py-4 ">
          <div>
            <p className="underline underline-offset-2 text-[12px] text-secondary font-bold max-mobile:hidden lg:mb-2">
              Why Us
            </p>{" "}
            <h1 className="font-sans text-4xl text-primary md:w-[80%] all:w-full max-mobile:hidden">
              The Art of Living Begins With Us
            </h1>
          </div>

          <p className="text-[12px]   all:w-full">
            Choosing the right real estate partner can make all the difference.
            At HillsApartment, we combine industry expertise with a commitment
            to client satisfaction, guiding you through every step of the
            buying, selling, or investing journey. Whether you&apos;re a
            first-time buyer or a seasoned investor, we’re here to make your
            experience smooth, informed, and rewarding.
          </p>
        </div>
      </div>
    </div>
  );
};

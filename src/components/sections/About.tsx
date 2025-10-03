import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Button from "@/components/common/Button";

export const About = () => {
  return (
    <div className=" w-full flex items-center justify-center lg:p-16 lg:h-[100vh] max-sm:flex-col-reverse bg-primary text-primary-foreground max-sm:py-16">
      <div className="w-full flex lg:items-start items-center justify-center flex-col gap-4 lg:pr-8">
        <div className="max-sm:text-center">
          <h1 className="Stardom-font text-6xl font-bold">The House</h1>
          <div className="flex items-center justify-center gap-4">
            <div className="min-w-2 flex-1 bg-primary-foreground h-[6px]"></div>
            <p className="font-normal text-md">Hair & Skin</p>
          </div>
        </div>

        <div className="space-y-2 lg:text-left text-center lg:w-[80%] md:text-md text-sm mr-6">
          <p>
            The House is a luxury barbing salon inspired by the need to redefine
            the typical barbershop experience in Abuja.
          </p>
          <p>
            Our objective is to provide grooming services to our patrons in a
            tranquil and classy environment, reminiscent of gentlemen clubs.
          </p>
        </div>

        <div>
          <Button
            onClick={() => {}}
            className="bg-secondary text-white"
            href="/about"
          >
            More About Us
          </Button>
        </div>
      </div>

      <div className="w-full flex items-center justify-center max-sm:scale-[0.7] max-sm:ml-12">
        <div className="relative top-10 scale-[0.95]">
          <ImageContainer
            src="/assets/img7.jpg"
            className="border-4 border-foreground "
          />
        </div>
        <div className="relative -top-10 scale-[1] -left-20">
          <ImageContainer
            src="/assets/img4.jpg"
            className="border-t-4 border-foreground border-r-4 border-b-4 border-b-foreground"
          />
        </div>
      </div>
    </div>
  );
};

import React from "react";
import RollingGallery from "./Rolling Gallery";
import ImageContainer from "../common/ImageContainer";
import Button from "../common/Button";

export default function Services() {
  return (
    <div className="flex items-center justify-center p-8 lg:py-24 bg-foreground">
      <div className=" max-sm:hidden">
        <ImageContainer
          src="/assets/img1.jpg"
          className="w-[450px] h-[700px] border-4 border-primary"
        />
      </div>
      <div className="flex flex-col items-center justify-center text-primary">
        <div className="w-full flex items-center justify-center flex-col max-sm:gap-8 gap-4 text-center">
          <h1 className="Stardom-font text-3xl font-bold">What We Do</h1>
          <p className="lg:w-[80%] w-full text-sm">
            Our objective is to provide grooming services to our patrons in a
            tranquil and classy environment, reminiscent of gentlemen
            clubs.Helping brands to stand out in the digital era. Together we
            will set the new status quo. No nonsense, always on the cutting
            edge.
          </p>
        </div>
        <div className="flex items-center justify-center flex-col gap-4">
          <RollingGallery autoplay={false} />
          <div className="">
            <Button className="bg-primary text-white" href="/services">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

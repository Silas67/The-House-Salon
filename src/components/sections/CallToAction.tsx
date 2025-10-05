import React from "react";
import Rounded from "@/components/common/Button";
import Image from "next/image";

const CallToAction = () => {
  return (
    <div className="relative w-full h-[30vh text-accent-foreground flex items-center justify-center flex-col gap-4 text-center py-12">
      <div className="absolute w-full h-full -z-10">
        <Image
          src={"/assets/Hero2.jpg"}
          alt="/"
          fill
          className="w-full h-full object-cover"
          style={{ backgroundAttachment: "fixed" }}
        />
        <div className="w-full h-full absolute inset-0 bg-black/70"></div>
      </div>
      <h1 className="text-4xl font-bold Stardom-font max-sm:text-2xl">
        Ready To Change Your Style
      </h1>
      <p className="text-neutral-300 max-sm:text-sm w-[80%]">
        Get expert help with your university project today. Schedule a free
        consultation to discuss your requirements.
      </p>

      <Rounded
        href={"/contact"}
        invert={false}
        onClick={() => {}}
        className="bg-primary"
        backgroundColor="var(--secondary)"
      >
        <p>Book An Appointment</p>
      </Rounded>
    </div>
  );
};

export default CallToAction;

// @ts-nocheck
import React from "react";
import ImageContainer from "@/components/common/ImageContainer";
import Button from "@/components/common/Button";
import SplitText from "../common/SplitText";
import { motion } from "framer-motion";
import { textSlide } from "../constant";

export const About = () => {
  return (
    <div className=" w-full flex items-center justify-center lg:p-16 lg:h-[100vh] max-sm:flex-col-reverse bg-primary-foreground text-primary max-sm:py-16">
      <div className="w-full flex lg:items-start items-center justify-center flex-col gap-4 lg:pr-8">
        <div className="max-sm:text-center">
          <SplitText splitType="lines" duration={1}>
            <h1 className="Stardom-font text-6xl font-bold">The House</h1>
          </SplitText>
          <div className="flex items-center justify-between gap-4 w-full max-w-sm">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: "easeInOut", delay: 0.6 }}
              className="w-full origin-left bg-primary h-[6px] rounded-full"
            ></motion.div>

            <motion.p
              variants={textSlide}
              initial="initial"
              whileInView="enter"
              transition={{duration:1, delay:0.5, ease: "anticipate"}}
              viewport={{ once: true }}
              className="font-normal text-md text-nowrap"
            >
              Hair & Skin
            </motion.p>
          </div>
        </div>

        <div className="space-y-2 lg:text-left text-center lg:w-[80%] md:text-md text-sm m-6 lg:mr-6">
          <SplitText textAlign="left" duration={1} splitType="lines">
            The House is a luxury barbing salon inspired by the need to redefine
            the typical barbershop experience in Abuja.
          </SplitText>
          <SplitText textAlign="left" duration={1} splitType="lines">
            Our objective is to provide grooming services to our patrons in a
            tranquil and classy environment, reminiscent of gentlemen clubs.
          </SplitText>
        </div>

        <div>
          <Button
            onClick={() => {}}
            backgroundColor="var(--primary-foreground)"
            className="bg-primary text-white border-primary"
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
            className="border-4 border-primary "
          />
        </div>
        <div className="relative -top-10 scale-[1] -left-20">
          <ImageContainer
            src="/assets/img4.jpg"
            className="border-t-4 border-primary border-r-4 border-b-4 border-b-primary"
          />
        </div>
      </div>
    </div>
  );
};

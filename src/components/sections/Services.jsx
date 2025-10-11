import React from "react";
import RollingGallery from "./Rolling Gallery";
import ImageContainer from "../common/ImageContainer";
import Button from "../common/Button";
import { motion } from "framer-motion";
import SplitText from "../common/SplitText";
import { textSlide } from "../constant";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Services() {
  return (
    <div className="w-full flex items-center justify-center p-8 lg:py-36 h-full text-foreground">
      <motion.div
        variants={textSlide}
        initial="initial"
        whileInView="enter"
        transition={{ duration: 1, delay: 0, ease: "anticipate" }}
        viewport={{ once: true }}
        className=" max-sm:hidden"
      >
        <ImageContainer
          src="/assets/img1.jpg"
          className="w-[450px] h-[700px] border-4 border-foreground"
        />
      </motion.div>

      {/* Heading */}
      <div className="flex flex-col items-center justify-center max-w-[100vw]">
        <div className=" flex items-center justify-center flex-col max-sm:gap-8 gap-4 text-center max-sm:px-4">
          <SplitText className="Stardom-font text-3xl font-bold" duration={1}>
            What We Do
          </SplitText>
          <motion.p
            variants={textSlide}
            initial="initial"
            whileInView="enter"
            transition={{ duration: 1, delay: 0.3, ease: "anticipate" }}
            viewport={{ once: true }}
            className="lg:w-[80%] text-sm w-full max-sm:text-justify"
          >
            Our objective is to provide grooming services to our patrons in a
            tranquil and classy environment, reminiscent of gentlemen
            clubs.Helping brands to stand out in the digital era. Together we
            will set the new status quo. No nonsense, always on the cutting
            edge.
          </motion.p>
        </div>

        <motion.div
          variants={textSlide}
          initial="initial"
          whileInView="enter"
          transition={{ duration: 1, delay: 0.5, ease: "anticipate" }}
          viewport={{ once: true }}
          className="flex items-center justify-center flex-col gap-8"
        >
          <div>
            <RollingGallery autoplay={false} />
            <div className="flex items-center justify-center  gap-2 text-xs">
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                whileInView={{ x: -10, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <FaArrowLeft />
              </motion.div>
              <h1 className="text-muted-foreground">Swipe for More</h1>
              <motion.div
                initial={{ x: 0, opacity: 1 }}
                whileInView={{ x: 10, opacity: 0 }}
                transition={{
                  duration: 1.5,
                  ease: "easeInOut",
                  repeat: Infinity,
                  repeatType: "loop",
                }}
              >
                <FaArrowRight />
              </motion.div>
            </div>
          </div>

          <div className="">
            <Button
              className="bg-primary-foreground text-white"
              href="/services"
            >
              Learn More
            </Button>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

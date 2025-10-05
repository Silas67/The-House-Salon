import React from "react";
import ImageContainer from "../common/ImageContainer";
import SplitText from "../common/SplitText";
import { motion } from "framer-motion";
import { textSlide } from "../constant";

export default function zAboutHero() {
  return (
    <div className="min-h-[80vh] w-full text-white  p-8 bg-primary space-y-28">
      <div className="max-w-4xl flex items-start flex-col mt-28 Stardom-font gap-16">
        <SplitText>About</SplitText>
        <SplitText className="text-6xl max-sm:text-4xl" textAlign="left">
          Get To Know Why This is Barbershop With A Diffrence
        </SplitText>
      </div>

      <div className="flex items-center justify-between gap-16 max-sm:flex-col-reverse md:px-[50px]">
        <div className="flex-1">
          <ImageContainer
            src="/assets/img5.jpg"
            className="w-full h-[500px] "
          />
        </div>
        <div className="grid grid-cols-2 w-[60%] space-x-8 text-justiy max-sm:grid-cols-1 max-sm:space-y-4 max-sm:w-full">
          <motion.p
            variants={textSlide}
            initial="initial"
            whileInView="enter"
            viewport={{once: true}}
            transition={{ duration: 1, ease: "anticipate" }}
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quaerat maxime facilis, accusamus quo adipisci aliquid vero,
            molestiae laboriosam esse tempore reiciendis! Quam vero fugit nam
            laudantium, veritatis voluptas? Amet!.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam quaerat maxime facilis,
            accusamus quo adipisci aliquid vero, molestiae laboriosam esse
            tempore reiciendis! Quam vero fugit nam laudantium, veritatis
            voluptas? Amet!
          </motion.p>
          <motion.p
            variants={textSlide}
            initial="initial"
            whileInView="enter"
            viewport={{once:true}}
            transition={{ duration: 1, ease: "anticipate", delay: 0.5 }}
            className="max-sm:hidden"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quaerat maxime facilis, accusamus quo adipisci aliquid vero,
            molestiae laboriosam esse tempore reiciendis! Quam vero fugit nam
            laudantium, veritatis voluptas? Amet!.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam quaerat maxime facilis,
            accusamus quo adipisci aliquid vero, molestiae laboriosam esse
            tempore reiciendis! Quam vero fugit nam laudantium, veritatis
            voluptas? Amet!
          </motion.p>
        </div>
      </div>
    </div>
  );
}

import React from "react";
import ImageContainer from "../common/ImageContainer";
import SplitText from "../common/SplitText";
import { motion } from "framer-motion";
import { textSlide } from "../constant";

export default function AboutHero() {
  return (
    <div className="min-h-[80vh] w-full text-text  p-8 bg-primary space-y-28">
      <div className="max-w-4xl flex items-start flex-col mt-28 Stardom-font gap-16">
        <SplitText className="text-white">About</SplitText>
        <SplitText className="text-6xl max-sm:text-4xl" textAlign="left">
          Get To Know Why This is Barbershop With A Diffrence
        </SplitText>
      </div>

      <div className="flex items-center justify-between gap-16 max-sm:flex-col-reverse md:px-[50px]">
        <div className="flex-1">
          <ImageContainer
            src="/assets/img5.jpg"
            className="w-full h-[500px] border-4 border-foreground"
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
            At The House, we believe grooming is more than just a routine—it’s a ritual of confidence, class, and self-expression. Founded with the vision to redefine men’s and women’s grooming, our space blends modern craftsmanship with timeless sophistication. <p className="mt-4">Every detail, from the soft hum of clippers to the subtle scent of our premium products, is designed to help you unwind while our professionals bring out your best look. Whether it’s your first visit or your fiftieth, we aim to make you feel at home—refreshed, recharged, and refined.</p>
          </motion.p>
          <motion.p
            variants={textSlide}
            initial="initial"
            whileInView="enter"
            viewport={{once:true}}
            transition={{ duration: 1, ease: "anticipate", delay: 0.5 }}
            className="max-sm:hidden"
          >
            Beyond our chairs, we’re a community that celebrates individuality. Our clients don’t just walk out looking good—they leave feeling empowered. At The House, we don’t just style hair, we shape confidence. 
            Step inside and you’ll see—it’s not just about the cut, the trim, or the fade. It’s about the experience. From the first warm greeting to the final mirror check, we’re dedicated to creating a space where style meets serenity. Every appointment is an opportunity to pause from the noise of everyday life and reconnect with yourself. Because at The House, looking good is just the beginning—feeling good is the goal.
          </motion.p>
        </div>
      </div>
    </div>
  );
}

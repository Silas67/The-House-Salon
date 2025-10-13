"use client"; // add this at the top because you're using window

import React, { useEffect, useState } from "react";
import CircularGallery from "./CircularGallery";
import Button from "../common/Button";
import SplitText from "../common/SplitText";
import { motion } from "framer-motion";
import { textSlide } from "../constant";

export default function Project() {
  const [bend, setBend] = useState(3);

  useEffect(() => {
    if (typeof window !== "undefined") {
      setBend(window.innerWidth < 768 ? 1.5 : 3);
    }
  }, []);

  return (
    <div className="py-36 lg:py-44 text-foreground lg:pt-24">
      <div className="text-center gap-2 flex items-center justify-center flex-col Stardom-font max-sm:p-2">
        <motion.p
          variants={textSlide}
          initial="initial"
          whileInView="enter"
          transition={{ duration: 1, delay: 0, ease: "anticipate" }}
          viewport={{ once: true }}
          className="text-xl"
        >
          Gallery
        </motion.p>
        <SplitText splitType="lines">
          <h1 className="text-5xl">The Luxury Experience</h1>
        </SplitText>
      </div>

      <div className="flex items-center justify-center flex-col">
        <div className="w-full h-[600px] max-sm:h-[400px] relative">
          <CircularGallery
            items={""}
            bend={bend}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>

        <Button className="bg-primary-foreground text-white" href="/Gallery">
          See More
        </Button>
      </div>
    </div>
  );
}

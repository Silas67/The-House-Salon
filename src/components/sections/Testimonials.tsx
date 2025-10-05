import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { testimonials, textSlide } from "../constant";
import { motion } from "framer-motion";
import SplitText from "../common/SplitText";

export default function Testimonials() {
  return (
    <div className="bg-foreground text-background py-24 space-y-8">
      <div className="text-center gap-2 flex items-center justify-center flex-col Stardom-font">
        <motion.p
          variants={textSlide}
          initial="initial"
          whileInView="enter"
          transition={{ duration: 1, delay: 0, ease: "anticipate" }}
          viewport={{ once: true }}
          className="text-xl"
        >
          Testimonials
        </motion.p>
        <SplitText duration={1} delay={0}>
          <h1 className=" text-5xl">Our Customer&apos;s Take</h1>
        </SplitText>
      </div>{" "}
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry className="flex " style={{ padding: "12px" }}>
            {testimonials.map((t, idx) => (
              <motion.div
                variants={textSlide}
                initial="initial"
                whileInView="enter"
                transition={{ duration: 1, delay:idx*0.2, ease: "anticipate" }}
                viewport={{ once: true }}
                key={t.name}
                className="border border-muted-foreground rounded-md"
                style={{ padding: "8px" }}
              >
                <p className="text-sm">{t.word}</p>
                <h4 className="font-bold mt-4">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.job}</p>
              </motion.div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

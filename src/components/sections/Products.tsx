import React from "react";
import Image from "next/image";
import { Products } from "@/components/constant/index";
import { motion } from "framer-motion";
import SplitText from "../common/SplitText";

export default function ProductsPage() {
  const Stagger = 0.2;
  return (
    <div className="text-center text-primary bg-[#ecd8db] lg:py-24 p-8 space-y-16">
      <div
        className="text-center flex items-center justify-center flex-col gap-[8px]"
      >
        <SplitText className="text-5xl uppercase pb-2 font-semibold Stardom-font ">
          Our Collection
        </SplitText>
        <SplitText className=" max-w-2xl text-muted">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus
          ad ratione eveniet, sunt impedit quisquam.
        </SplitText>
      </div>
      <div className="grid lg:grid-cols-4 gap-12 p-4 w-full max-sm:grid-cols-1 md:grid-cols-2 place-content-center">
        {Products.map((item, id) => (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: Stagger * id }}
            key={id}
            className=" flex flex-col items-center justify-center"
          >
            <div className="relative w-[300px] h-[300px] overflow-hidden shadow-xl rounded-lg">
              <Image
                src={item.img}
                alt={item.product || "Product image"}
                fill
                className="object-cover"
              />
            </div>

            <div className="text-center p-4 text-primary">
              <h1 className=" font-calm font-medium text-lg">{item.product}</h1>

              <span className="font-semibold  mt-4">{item.price}</span>
            </div>
            <button className=" px-4 py-1 bg-primary rounded-full flex items-center justify-center hover:bg-secondary transition-all duration-300  text-white hover:scale-[0.9]">
              Choose
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

"use client";
import { About } from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import useLenis from "@/hooks/useLenis";
import Services from "@/components/sections/Services";
import Project from "@/components/sections/Project";
import Footer from "@/components/sections/Footer";
import Products from "@/components/sections/Products";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";

const Testimonials = dynamic(() => import("@/components/sections/Testimonials"), {
  ssr: false,
});

export default function Home() {
  useLenis();
  return (
    <div className="relative overflow-hidden w-full h-full">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
      </section>
      <section className="w-full flex items-center justify-center">
        <motion.div 
        initial = {{scaleX: 0}}
        whileInView={{scaleX:1}}
        transition={{duration:1, ease: "anticipate"}}
        viewport={{once: true}}
        className="border border-primary-foreground w-[80%] rounded-full"></motion.div>
      </section>
      <section>
        <Project />
      </section>
      <section>
        <Testimonials />
      </section>
      <section>
        <Products />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
}

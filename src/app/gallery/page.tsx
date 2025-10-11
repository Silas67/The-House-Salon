"use client"
import React from "react";
import Gallery from "@/components/sections/Gallery";
import {items } from "@/components/constant/index"
import Footer from "@/components/sections/Footer";
import useLenis from "@/hooks/useLenis";

const page = () => {
  useLenis();
  return (
    <div>
      {/* Hero */}
      <section className="min-h-[20vh] w-full text-white  p-8 bg-primary space-y-28">
        <div className="max-w-4xl flex items-start flex-col mt-28 Stardom-font gap-2">
          <h1 className="text-6xl max-sm:text-4xl">Gallery</h1>
        </div>
      </section>

      <section className="md:p-12 relative w-full h-[150vh] max-sm:overflow-y-scroll p-4">
        <Gallery
          items={items}
          ease="power3.out"
          duration={0.6}
          stagger={0.05}
          animateFrom="bottom"
          scaleOnHover={true}
          hoverScale={0.95}
          blurToFocus={true}
          colorShiftOnHover={false}
        />
      </section>

      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default page;

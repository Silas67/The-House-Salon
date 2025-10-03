"use client";
import AboutHero from "@/components/sections/AboutHero";
import React from "react";
import useLenis from "@/hooks/useLenis";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";

const Page = () => {
  useLenis();
  return (
    <div>
      <section>
        <AboutHero />
      </section>
      <section>
        <WhyChooseUs />
      </section>
    </div>
  );
};

export default Page;

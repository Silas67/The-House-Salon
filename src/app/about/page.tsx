"use client";
import AboutHero from "@/components/sections/AboutHero";
import React from "react";
import useLenis from "@/hooks/useLenis";
import { WhyChooseUs } from "@/components/sections/WhyChooseUs";
import Banner from "@/components/sections/Banner";
import CallToAction from "@/components/sections/CallToAction";
import Footer from "@/components/sections/Footer";

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
      <section>
        <Banner />
      </section>
      <section>
        <CallToAction />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Page;

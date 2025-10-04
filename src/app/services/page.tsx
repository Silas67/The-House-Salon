"use client";
import { HairMenu } from "@/components/sections/HairMenu";
import { ServiceHero } from "@/components/sections/ServiceHero";
import React from "react";
import useLenis from "@/hooks/useLenis"
import Footer from "@/components/sections/Footer";

const page = () => {
  useLenis()
  return (
    <div className="bg-foreground relative overflow-hidden min-w- h-full">
      <section>
        <ServiceHero />
      </section>
      <section>
        <HairMenu />
      </section>
      <section>
        <Footer/>
      </section>
    </div>
  );
};

export default page;

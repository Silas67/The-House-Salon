"use client";
import { HairMenu } from "@/components/sections/HairMenu";
import { ServiceHero } from "@/components/sections/ServiceHero";
import React from "react";

const page = () => {
  return (
    <div className="bg-foreground relative overflow-hidden min-w- h-full">
      <section>
        <ServiceHero />
      </section>
      <section>
        <HairMenu />
      </section>
    </div>
  );
};

export default page;

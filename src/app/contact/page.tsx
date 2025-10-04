"use client"
import { ContactHero } from "@/components/sections/ContactHero";
import { ContactMenu } from "@/components/sections/ContactMenu";
import React from "react";
import useLenis from "@/hooks/useLenis";
import Footer from "@/components/sections/Footer";

const page = () => {
  useLenis()
  return <div className="bg-foreground relative overflow-hidden min-w- h-full">
    <section><ContactHero/></section>
    <section><ContactMenu/></section>
    <section><Footer/></section>
  </div>;
};

export default page;

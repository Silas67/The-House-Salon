"use client";
import { About } from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import useLenis from "@/hooks/useLenis";
import Services from "@/components/sections/Services";
import Project from "@/components/sections/Project";
import Testimonials from "@/components/sections/Testimonials";
import Footer from "@/components/sections/Footer";
import Products from "@/components/sections/Products";

export default function Home() {
  useLenis();
  return (
    <div className="relative overflow-hidden min-w- h-full">
      <section>
        <Hero />
      </section>
      <section>
        <About />
      </section>
      <section>
        <Services />
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

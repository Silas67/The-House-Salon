"use client";
import Hero from "@/components/sections/Hero";
import useLenis from "@/hooks/useLenis";

export default function Home() {
  useLenis();
  return (
    <main className="relative overflow-hidden min-w-screen">
      <section>
        <Hero />
      </section>
    </main>
  );
}

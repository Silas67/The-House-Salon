"use client"
import BookingForm from "@/components/sections/BookingForm";
import Footer from "@/components/sections/Footer";
import Image from "next/image";

export default function BookingPage() {
  return (
    <div><div className="min-h-screen relative flex items-center justify-center text-white max-sm:py-36">
      <div className="flex items-start justify-between max-sm:flex-col-reverse max-sm:items-center">
        <BookingForm />
        <div className="max-w-md space-y-4 py-12 px-4 flex items-center justify-center flex-col max-sm:text-center lg:items-start">
          <h1 className="uppercase max-w-[80%] Stardom-font text-4xl ">Make Your Reservation</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Natus minima laudantium soluta est repellat officia saepe aliquid nulla optio itaque, doloribus quis illum, illo dolorem sed, beatae deserunt ullam repudiandae!</p>
        </div>
      </div>

      <div className="w-full h-full absolute inset-0 -z-10">
        <Image
          src={"/assets/Hero1.jpg"}
          alt="/"
          fill
          className="w-full h-full object-cover"
        />
        <div className="absolute w-full h-full bg-black/80"></div>
      </div>
    </div>
    
      <section>
        <Footer/>
      </section>
    </div>
    
  );
}

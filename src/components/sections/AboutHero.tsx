import React from "react";
import ImageContainer from "../common/ImageContainer";

export default function AboutHero() {
  return (
    <div className="min-h-[80vh] w-full text-white  p-8 bg-primary space-y-28">
      <div className="max-w-4xl flex items-start flex-col mt-28 Stardom-font">
        <p>About</p>
        <h1 className="text-6xl">
          Get To Know Why This is Barbershop With A Diffrence
        </h1>
      </div>

      <div className="flex items-center justify-between gap-16 max-sm:flex-col-reverse px-[50px]">
        <div className="flex-1">
          <ImageContainer
            src="/assets/img5.jpg"
            className="w-full h-[500px] "
          />
        </div>
        <div className="grid grid-cols-2 w-[60%] space-x-8 text-justify max-sm:grid-cols-1 max-sm:space-y-4 max-sm:w-full">
          <p className="">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quaerat maxime facilis, accusamus quo adipisci aliquid vero,
            molestiae laboriosam esse tempore reiciendis! Quam vero fugit nam
            laudantium, veritatis voluptas? Amet!.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam quaerat maxime facilis,
            accusamus quo adipisci aliquid vero, molestiae laboriosam esse
            tempore reiciendis! Quam vero fugit nam laudantium, veritatis
            voluptas? Amet!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam
            quaerat maxime facilis, accusamus quo adipisci aliquid vero,
            molestiae laboriosam esse tempore reiciendis! Quam vero fugit nam
            laudantium, veritatis voluptas? Amet!.Lorem ipsum dolor sit amet
            consectetur adipisicing elit. Numquam quaerat maxime facilis,
            accusamus quo adipisci aliquid vero, molestiae laboriosam esse
            tempore reiciendis! Quam vero fugit nam laudantium, veritatis
            voluptas? Amet!
          </p>
        </div>
      </div>
    </div>
  );
}

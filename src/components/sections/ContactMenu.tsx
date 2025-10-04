import React from "react";
import Image from "next/image";
import Button from "../common/Button";

export const ContactMenu = () => {
  return (
    <div className="min-h-[80vh] w-full text-primary  p-8 bg-foreground space-y-28">
      <div className="grid md:grid-cols-2 border-t border-primary">
        <h2 className="text-lg font-semibold mb-2">Send us an Email</h2>
        <div className="grid md:grid-cols-2 space-x-4">
          <form className="flex flex-col gap-8 p-8">
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border-b border-primary focus:outline-none text-primary"
            />
            <input
              type="text"
              name="text"
              placeholder="Phone Number"
              className="border-b border-primary focus:outline-none"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border-b border-primary focus:outline-none text-primary"
            />
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="border-b border-primary focus:outline-none text-primary"
            />
            <textarea
              placeholder="Tell us about yourself"
              className="border-b border-primary focus:outline-none"
            />
            <div className="w-full flex items-center justify-start">
              <Button
                className="bg-primary text-white"
                backgroundColor="var(--accent)"
              >
                Submit
              </Button>
            </div>
          </form>
          <div className="relative w-[300px] h-[400px] m-4">
            <Image
              src={"/assets/img2.jpg"}
              alt="Images"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-t border-primary">
        <h2 className="text-lg font-semibold mb-2">Join The Team</h2>
        <div className="grid md:grid-cols-2 space-x-4 max-sm:space-y-14 m-4">
          <div>
            <h1 className="text-xs">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
              facilis odit. Ea iusto laborum necessitatibus eum. Quam, est
              iusto, nisi debitis officia quo repellat recusandae quis ratione
              ipsam totam excepturi quisquam in facere tempora iure iste
              asperiores tenetur harum! Mollitia veniam modi, tempora, dolore
              doloremque laboriosam aperiam voluptate magnam inventore ut autem
              illo et ab officia itaque dolor debitis facilis magni perspiciatis
              temporibus cupiditate! Quos et praesentium qui voluptates
              dignissimos, quaerat rem ducimus alias eum laudantium delectus
              facilis porro nisi.
            </h1>
          </div>
          <div className="relative w-[300px] h-[200px] ">
            <Image
              src={"/assets/img2.jpg"}
              alt="Images"
              className="w-full h-full object-cover"
              fill
            />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 border-t border-primary  ">
        <h2 className="text-lg font-semibold mb-2">Contact Info</h2>

        <div className="py-8 text-neutral-600 md:w-[70%] md:justify-self-end space-y-4">
          <div className="border-b border-border p-2 font-bold flex items-center justify-between ">
            <h1>Email Address</h1>
            <h1>chibukesilas@gmail.com</h1>
          </div>
          <div className="border-b border-border p-2 font-bold flex items-center justify-between ">
            <h1>Phone</h1>
            <h1>+234-810-488-4845</h1>
          </div>
          <div className="border-b border-border p-2 font-bold grid grid-cols-2 gap-8">
            <h1>Address</h1>
            <h1 className="justify-self-end text-sm">The House No 15, New Mpape Mordern Market, BegerQuary, Mpape, Abuja</h1>
          </div>
          <div className="border-b border-border p-2 font-bold flex items-center justify-between ">
            <h1>Email Address</h1>
            <h1>chibukesilas@gmail.com</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

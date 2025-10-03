import React from "react";
import CircularGallery from "./CircularGallery";
import Button from "../common/Button";

export default function Project() {
  return (
    <div className="py-24 bg-primary text-accent-foreground">
      <div className="text-center gap-2 flex items-center justify-center flex-col Stardom-font">
        <p className="text-xl">Gallery </p>
        <h1 className="text-5xl  max-sm:text-4xl">The Luxury Experience</h1>
      </div>{" "}
      <div className="flex items-center justify-center flex-col">
        <div
          style={{ height: "600px", position: "relative" }}
          className="w-full"
        >
          <CircularGallery
            items={""}
            bend={3}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
        <div className="">
          <Button className="bg-secondary text-white" href="/Gallery">
            See More
          </Button>
        </div>
      </div>
    </div>
  );
}

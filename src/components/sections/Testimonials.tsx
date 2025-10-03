import React from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
import { testimonials } from "../constant";

export default function Testimonials() {
  return (
    <div className="bg-foreground text-background py-24 space-y-8">
      <div className="text-center gap-2 flex items-center justify-center flex-col Stardom-font">
        <p className="text-xl">Testimonials</p>
        <h1 className=" text-5xl">Our Customer&apos;s Take</h1>
      </div>{" "}
      <div>
        <ResponsiveMasonry columnsCountBreakPoints={{ 350: 1, 750: 2, 900: 3 }}>
          <Masonry className="flex " style={{ padding: "12px" }}>
            {testimonials.map((t, idx) => (
              <div
                key={t.name}
                className="border border-muted-foreground rounded-md"
                style={{ padding: "8px" }}
              >
                <p className="text-sm">{t.word}</p>
                <h4 className="font-bold mt-4">{t.name}</h4>
                <p className="text-xs text-muted-foreground">{t.job}</p>
              </div>
            ))}
          </Masonry>
        </ResponsiveMasonry>
      </div>
    </div>
  );
}

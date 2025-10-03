import React from "react";
import { HairyAffairs } from "../constant";
import Image from "next/image";

export const HairMenu = () => {
  return (
    <div className="min-h-[100vh] w-full py-8 text-primary px-4">
      {HairyAffairs.map((item, id) => (
        <div key={id}></div>
      ))}
    </div>
  );
};

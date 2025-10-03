import React from "react";

export default function Card({
  icon,
  title,
  description,
}: {
  icon: string;
  title: string;
  description: string;
}) {
  return (
    <div>
      {" "}
      <div className="pointer-events-none h-[120px] w-[300px] max-sm:h-[150px] max-sm:w-[200px] rounded-[15px] border-[3px] border-primary object-cover transition-transform duration-300 ease-out group-hover:scale-105 sm:h-[150px] sm:w-[200px] bg-card scale-[1.1] text-white flex items-center justify-center gap-2 flex-col p-4 text-center">
        <div className="text-md ">{icon}</div>
        <div className="text-xl Stardom-font">{title}</div>
        <div className="text-[10px]">{description}</div>
      </div>
    </div>
  );
}

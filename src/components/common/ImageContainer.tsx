import React from "react";
import Image from "next/image";

export default function ImageContainer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  return (
    <div
      className={`w-[250px] h-[400px] rounded-t-full overflow-hidden relative  ${className}`}
    >
      <Image
        src={src}
        className={`w-full h-full object-cover`}
        alt="/"
        width={500}
        height={500}
      />
    </div>
  );
}

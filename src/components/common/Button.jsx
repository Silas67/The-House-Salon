"use client";
import React from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { Magnetic } from "./Magnetic";
import Link from "next/link";

export default function Index({
  children,
  backgroundColor = `var(--secondary)`,
  className = "",
  href = "",
  ...attributes
}) {
  const circle = useRef(null);
  let timeline = useRef(null);
  let timeoutId = null;
  useEffect(() => {
    timeline.current = gsap.timeline({ paused: true });
    timeline.current
      .to(
        circle.current,
        { top: "-25%", width: "100%", duration: 0.4, ease: "power3.in" },
        "enter"
      )
      .to(
        circle.current,
        { top: "-150%", width: "150%", duration: 0.25 },
        "exit"
      );
  }, []);

  const manageMouseEnter = () => {
    if (timeoutId) clearTimeout(timeoutId);
    timeline.current.tweenFromTo("enter", "exit");
  };

  const manageMouseLeave = () => {
    timeoutId = setTimeout(() => {
      timeline.current.play();
    }, 300);
  };

  return (
    <Link href={href}>
      {" "}
      <Magnetic>
        <div
          className={`cursor-pointer relative flex items-center justify-center group  text-text px-[20px] py-[8px] overflow-hidden rounded-[3em] hover:scale-[0.9] transition-all duration-300 ${className}`}
          onMouseEnter={() => {
            manageMouseEnter();
          }}
          onMouseLeave={() => {
            manageMouseLeave();
          }}
          {...attributes}
        >
          <div className={`relative z-[1] text-sm`}>{children}</div>

          <div
            ref={circle}
            style={{ backgroundColor }}
            className="circle"
          ></div>
        </div>
      </Magnetic>
    </Link>
  );
}

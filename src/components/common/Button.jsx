"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { Magnetic } from "./Magnetic";
import Link from "next/link";

export default function AnimatedButton({
  children,
  backgroundColor = "var(--accent)",
  className = "",
  href,
  onClick,
  ...props
}) {
  const circleRef = useRef(null);
  const timeline = useRef(null);
  const timeoutId = useRef(null);

  // Setup GSAP timeline
  useEffect(() => {
    const circle = circleRef.current;
    if (!circle) return;

    timeline.current = gsap
      .timeline({ paused: true })
      .to(
        circle,
        {
          top: "-25%",
          width: "100%",
          duration: 0.4,
          ease: "power3.in",
        },
        "enter"
      )
      .to(
        circle,
        {
          top: "-150%",
          width: "150%",
          duration: 0.25,
        },
        "exit"
      );

    return () => {
      if (timeoutId.current) clearTimeout(timeoutId.current);
      timeline.current?.kill();
    };
  }, []);

  const handleMouseEnter = () => {
    if (timeoutId.current) clearTimeout(timeoutId.current);
    timeline.current?.tweenFromTo("enter", "exit");
  };

  const handleMouseLeave = () => {
    timeoutId.current = setTimeout(() => {
      timeline.current?.play();
    }, 300);
  };

  // Shared inner content
  const content = (
    <Magnetic>
      <div
        className={`cursor-pointer relative flex items-center justify-center group 
          text-text px-5 py-2 overflow-hidden rounded-[3em] 
          hover:scale-90 transition-transform duration-300 ${className}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={onClick}
      >
        <span className="relative z-10 text-sm">{children}</span>
        <div
          ref={circleRef}
          style={{ backgroundColor }}
          className="absolute inset-0 circle"
        />
      </div>
    </Magnetic>
  );

  return href ? (
    <Link href={href} {...props}>
      {content}
    </Link>
  ) : (
    <button type="button" {...props}>
      {content}
    </button>
  );
}

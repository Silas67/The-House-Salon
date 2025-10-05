"use client";

import React, { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText as GSAPSplitText } from "gsap/SplitText";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger, GSAPSplitText, useGSAP);

export interface SplitTextProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  ease?: string | ((t: number) => number);
  splitType?: "chars" | "words" | "lines" | "words, chars";
  from?: gsap.TweenVars;
  to?: gsap.TweenVars;
  threshold?: number;
  rootMargin?: string;
  textAlign?: React.CSSProperties["textAlign"];
  
}

const SplitText: React.FC<SplitTextProps> = ({
  children,
  className = "",
  delay = 0,
  duration = 0.6,
  ease = "power3.out",
  splitType = "lines",
  from = { opacity: 0, y: 40 },
  to = { opacity: 1, y: 0 },
  threshold = 0.2,
  rootMargin = "-100px",
  textAlign = "center",
 
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [fontsLoaded, setFontsLoaded] = useState(false);

  // Wait until fonts are fully loaded (prevents jumpy animations)
  useEffect(() => {
    if (document.fonts.status === "loaded") {
      setFontsLoaded(true);
    } else {
      document.fonts.ready.then(() => setFontsLoaded(true));
    }
  }, []);

  useGSAP(
    () => {
      const el = ref.current;
      if (!el || !fontsLoaded) return;

      // Clean up old split instances
      const element = el as HTMLElement & { _split?: GSAPSplitText };
      if (element._split) {
        try {
          element._split.revert();
        } catch (_) {}
        element._split = undefined;
      }

      // Calculate ScrollTrigger start position
      const startPct = (1 - threshold) * 100;
      const marginMatch = /^(-?\d+(?:\.\d+)?)(px|em|rem|%)?$/.exec(rootMargin);
      const marginValue = marginMatch ? parseFloat(marginMatch[1]) : 0;
      const marginUnit = marginMatch ? marginMatch[2] || "px" : "px";
      const sign =
        marginValue === 0
          ? ""
          : marginValue < 0
          ? `-=${Math.abs(marginValue)}${marginUnit}`
          : `+=${marginValue}${marginUnit}`;
      const start = `top ${startPct}%${sign}`;

      // Split the text
      const splitInstance = new GSAPSplitText(element, {
        type: splitType,
        linesClass: "split-line",
        wordsClass: "split-word",
        charsClass: "split-char",
      });

      const targets =
        splitType === "chars"
          ? splitInstance.chars
          : splitType === "words"
          ? splitInstance.words
          : splitInstance.lines;

      gsap.fromTo(
        targets,
        { ...from },
        {
          ...to,
          duration,
          ease,
          stagger: delay / 1000,
          scrollTrigger: {
            trigger: element,
            start,
            once: true, // ✅ runs only once on scroll into view
          },
          onComplete: () => {splitInstance.revert();}
        }
      );

      element._split = splitInstance;

      return () => {
        ScrollTrigger.getAll().forEach((st) => {
          if (st.trigger === element) st.kill();
        });
        try {
          splitInstance.revert();
        } catch (_) {}
        element._split = undefined;
      };
    },
    {
      dependencies: [
        delay,
        duration,
        ease,
        splitType,
        JSON.stringify(from),
        JSON.stringify(to),
        threshold,
        rootMargin,
        fontsLoaded,
      ],
      scope: ref,
    }
  );

  return (
    <div
      ref={ref}
      className={`split-parent overflow-hidden inline-block whitespace-normal ${className}`}
      style={{ textAlign, willChange: "transform, opacity" }}
    >
      {children}
    </div>
  );
};

export default SplitText;

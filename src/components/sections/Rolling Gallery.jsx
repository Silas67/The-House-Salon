"use client";
import { useEffect, useState } from "react";
import {
  motion,
  useMotionValue,
  useAnimation,
  useTransform,
} from "motion/react";
import Card from "../common/Card";
import { IMGS } from "@/components/constant/index";

const RollingGallery = ({
  autoplay = false,
  pauseOnHover = false,
  images = [],
}) => {
  const [isScreenSizeSm, setIsScreenSizeSm] = useState(false);

  useEffect(() => {
    // ✅ only runs in browser
    const handleResize = () => setIsScreenSizeSm(window.innerWidth <= 640);
    handleResize(); // run once on mount
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const finalImages = images.length > 0 ? images : IMGS;
  const cylinderWidth = isScreenSizeSm ? 2000 : 2000;
  const faceCount = finalImages.length;
  const faceWidth = (cylinderWidth / faceCount) * 1.5;
  const radius = cylinderWidth / (2 * Math.PI);

  const dragFactor = 0.05;
  const rotation = useMotionValue(0);
  const controls = useAnimation();

  const transform = useTransform(rotation, (val) => `rotate3d(0,1,0,${val}deg)`);

  const startInfiniteSpin = (startAngle) => {
    controls.start({
      rotateY: [startAngle, startAngle - 360],
      transition: { duration: 20, ease: "linear", repeat: Infinity },
    });
  };

  useEffect(() => {
    if (autoplay) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    } else {
      controls.stop();
    }
  }, [autoplay]);

  const handleUpdate = (latest) => {
    if (typeof latest.rotateY === "number") rotation.set(latest.rotateY);
  };

  const handleDrag = (_, info) => {
    controls.stop();
    rotation.set(rotation.get() + info.offset.x * dragFactor);
  };

  const handleDragEnd = (_, info) => {
    const finalAngle = rotation.get() + info.velocity.x * dragFactor;
    rotation.set(finalAngle);
    if (autoplay) startInfiniteSpin(finalAngle);
  };

  const handleMouseEnter = () => {
    if (autoplay && pauseOnHover) controls.stop();
  };
  const handleMouseLeave = () => {
    if (autoplay && pauseOnHover) {
      const currentAngle = rotation.get();
      startInfiniteSpin(currentAngle);
    }
  };

  return (
    <div className="relative h-[350px] lg:w-[700px] overflow-hidden scale-[0.9]">
      <div className="flex h-full items-center justify-center [perspective:1000px] [transform-style:preserve-3d]">
        <div
          className="absolute top-0 left-0 h-full lg:w-[200px]"
          style={{
            background:
              "linear-gradient(to left, rgba(0,0,0,0) 0%, var(--background) 100%)",
            zIndex: 50,
          }}
        />
        <div
          className="absolute top-0 right-0 h-full lg:w-[200px]"
          style={{
            background:
              "linear-gradient(to right, rgba(0,0,0,0) 0%, var(--background) 100%)",
            zIndex: 50,
          }}
        />
        <motion.div
          drag="x"
          dragElastic={0}
          onDrag={handleDrag}
          onDragEnd={handleDragEnd}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          animate={controls}
          onUpdate={handleUpdate}
          style={{
            transform,
            rotateY: rotation,
            width: cylinderWidth,
            transformStyle: "preserve-3d",
          }}
          className="flex min-h-[200px] cursor-grab items-center justify-center [transform-style:preserve-3d]"
        >
          {finalImages.map((item, i) => (
            <div
              key={i}
              className="group absolute flex h-fit items-center justify-center p-[8%] [backface-visibility:hidden] md:p-[6%]"
              style={{
                width: `${faceWidth}px`,
                transform: `rotateY(${
                  (360 / faceCount) * i
                }deg) translateZ(${radius}px)`,
              }}
            >
              <Card
                title={item.title}
                description={item.Description}
                icon={item.icon}
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default RollingGallery;

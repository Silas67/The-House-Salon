import { achievementsList2 } from "@/components/constant/index";
import React from "react";
import AnimatedNumbers from "react-animated-numbers";

const Banner = () => {
  return (
    <div className="w-full flex gap-[20px] bg-foreground py-12 items-center justify-around lg:px-[70px] px-[40px] flex-col md:flex-row">
      <div className="w-full  text-4xl font-black text-secondary max-sm:text-center Stardom-font">
        
          <h1>
            Take A Look <br />
            At The Numbers
          </h1>
        
      </div>
      <div className="grid md:grid-cols-4 max-sm:grid-cols-2 place-content-center items-center w-full my-[20px]  gap-x-[50px]">
        {achievementsList2.map((achievement, index) => {
          return (
            <div
              key={index}
              className="w-full flex flex-col items-center justify-center my-4 gap-1"
            >
              <h2 className="text-3xl text-primary font-bold flex items-center gap-1">
                {achievement.prefix}
                <AnimatedNumbers
                  animateToNumber={parseInt(achievement.value)}
                  locale="en-US"
                  className=" text-[#0f0f0f] text-3xl font-bold"
                />

                {achievement.postfix}
              </h2>
              <p className="text-  text-nowrap text-sm">
                {achievement.metric}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Banner;

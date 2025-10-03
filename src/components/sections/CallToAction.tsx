import React from "react";
import Rounded from "@/components/common/Button";

const CallToAction = () => {
  return (
    <div className="w-full h-[30vh] flex items-center justify-center flex-col bg-accent text-accent-foreground">
      <div className="flex items-center justify-center flex-col gap-4">
        <h1 className="text-4xl font-bold Stardom-font">
          Ready To Change Your Style
        </h1>
        <p className="text-muted-foreground">
          Get expert help with your university project today. Schedule a free
          consultation to discuss your requirements.
        </p>

        <Rounded
          href={"/contact"}
          invert={false}
          onClick={() => {}}
          className="bg-primary"
          backgroundColor="var(--secondary)"
        >
          <p>Book An Appointment</p>
        </Rounded>
      </div>
    </div>
  );
};

export default CallToAction;

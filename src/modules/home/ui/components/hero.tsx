import React from "react";
import FlowLine from "./flow-line";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { OrbitCard } from "./card";
import { Features } from "./feature";
import { Lamp } from "./lamp";

export const Hero = () => {
  return (
    <section className=" pt-46 md:pt-32 py-5 gap-y-5">
      <div className="  py-2  flex flex-col gap-y-10  md:gap-y-22 justify-center items-center ">
        <div className=" flex flex-col gap-y-6 justify-center items-center text-center">
          <h1 className=" md:text-8xl text-5xl tracking-tight font-semibold text-center md:leading-27 leading-13 ">
            Stay Connected.<br></br>
            <span className=" text-chart-1">Stay in Orbit.</span>{" "}
          </h1>
          <p className=" md:max-w-3xl max-w-xl text-accent-foreground/80 md:text-lg text-xs px-5">
            Orbit is the modern public messaging app designed for communities,
            teams, and conversations that matter. Fast, reliable, and
            distraction-free.
          </p>
          <div className=" flex gap-x-5 justify-center items-center">
            <Button className=" h-8 bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl text-accent">
              Get Started Free
            </Button>
            <Button className=" h-8" variant={"secondary"}>
              Learn More
            </Button>
          </div>
        </div>

        <div className="px-5 md:px-6 flex justify-center w-full  ">
          <div className=" relative rounded-2xl bg-gradient-to-t from-primary-foreground to-chart-2 px-1 py-1.5 md:px-2 md:py-2 w-full">
            <Image
              className="rounded-2xl w-full "
              src="/hero.png"
              alt="hero"
              width={960}
              height={500}
            />
            <div className="absolute inset-0 top-20 bg-gradient-to-b from-primary-foreground/0 to-primary-foreground"></div>
          </div>
        </div>

        <div className=" pt-15 md:pt-7 flex flex-col gap-4 justify-center items-center gap-y-11">
          <div className="relative inline-block border border-primary md:px-6 md:py-4 px-3 py-1 ">
            {/* Corner handles */}
            <span className="absolute -top-1 -left-1 h-2 w-2 bg-chart-2"></span>
            <span className="absolute -top-1 -right-1 h-2 w-2 bg-chart-2"></span>
            <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-chart-2"></span>
            <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-chart-2"></span>

            <h1 className="md:text-4xl text-md text-center text-muted-foreground font-bold">
              Connect Without Limits
            </h1>
          </div>
          <OrbitCard />
        </div>
        <div>
          <Features />
          <Lamp />
        </div>
      </div>
    </section>
  );
};

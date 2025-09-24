import React from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { OrbitCard } from "../components/orbit-card";
import { Features } from "../components/feature";
import ConcentricCirclesCard from "../components/simpler-card";
import CreativeAnimatedCard from "../components/stylish-card";
import SimpleAnimatedCard from "../components/simple-card";
import { Orbit } from "lucide-react";
import { Pricing } from "../components/pricings";

export const Hero = () => {
  return (
    <section className=" pt-46 md:pt-32 py-5 gap-y-5 max-w-screen">
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

        <div className=" pt-15 md:pt-7 flex flex-col gap-4 justify-center items-center gap-y-11 py-19">
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
          <div className="max-w-7xl mx-auto flex flex-col gap-5 md:pb-26 pb-10 ">
            <div className=" flex flex-col justify-center items-center gap-5  px-8">
              <div className="relative inline-block border border-primary md:px-6 md:py-4 px-3 py-1 ">
                {/* Corner handles */}
                <span className="absolute -top-1 -left-1 h-2 w-2 bg-chart-2"></span>
                <span className="absolute -top-1 -right-1 h-2 w-2 bg-chart-2"></span>
                <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-chart-2"></span>
                <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-chart-2"></span>

                <h1 className="md:text-4xl text-md text-center text-muted-foreground font-bold">
                  Easy to use!
                </h1>
              </div>
              <div className=" flex flex-col md:flex-row md:flex-wrap justify-center in-focus-within: gap-5">
                <ConcentricCirclesCard />
                <CreativeAnimatedCard />
                <SimpleAnimatedCard />
              </div>
            </div>
          </div>

          <Features />

          <Pricing />

          <div className=" relative CTA flex flex-col gap-9 w-full justify-center  items-center pt-60 pb-60 ">
            <div className="absolute top-1/2 left-1/2 md:w-100 w-50 h-50 md:h-100 bg-gradient-to-b from-primary/40 to-primary/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative inline-block border border-primary md:px-6 md:py-4 px-3 py-1 ">
              {/* Corner handles */}
              <span className="absolute -top-1 -left-1 h-2 w-2 bg-chart-2"></span>
              <span className="absolute -top-1 -right-1 h-2 w-2 bg-chart-2"></span>
              <span className="absolute -bottom-1 -left-1 h-2 w-2 bg-chart-2"></span>
              <span className="absolute -bottom-1 -right-1 h-2 w-2 bg-chart-2"></span>

              <h1 className="md:text-4xl text-md text-center text-muted-foreground font-bold flex gap-5 justify-center items-center">
                <Orbit className=" text-accent-foreground animate-spin" />
                Start Today with Orbit!
                <Orbit className=" text-accent-foreground animate-spin" />
              </h1>
            </div>
            <Button className=" h-8 bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl text-accent">
              Get Started Free
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

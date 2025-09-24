import { orbitCards, orbitIconCards } from "@/const";
import React from "react";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Orbit } from "lucide-react";

export const OrbitCard = () => {
  return (
    <div className=" flex flex-col  md:flex-row md:flex-wrap justify-center gap-5">
      {orbitCards.map((ele, i) => (
        <Card
          key={i}
          className={`flex  flex-col w-80 gap-y-5 border border-accent-foreground/20 ${
            i === 1 && " border-2 border-chart-2  drop-shadow-2xl"
          } `}
        >
          <CardHeader>
            <CardTitle className=" text-lg">{ele.heading}</CardTitle>
            <CardDescription> {ele.subheading} </CardDescription>
          </CardHeader>
          <CardContent>
            <Button className="bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl">
              {ele.button}
            </Button>
          </CardContent>
          <CardFooter>
            <div className=" flex flex-col gap-y-3">
              {ele.features.map((feature, i) => (
                <p
                  className=" text-xs flex gap-2 text-accent-foreground/60"
                  key={i}
                >
                  <Orbit className=" size-4" /> {feature}
                </p>
              ))}
            </div>
          </CardFooter>
          <CardFooter className=" w-full flex flex-col justify-center border-t border-primary/80 gap-2">
            <div className=" rounded-full border border-chart-2/40 p-1 animate-pulse">
              <Button className="bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl rounded-full !p-0 size-9">
                {ele.icon}
              </Button>
            </div>
            <p className=" text-xs text-center">
                {ele.content}
            </p>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
};

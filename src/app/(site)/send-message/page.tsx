"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { messages } from "@/const";
import { TypewriterTextAnimate } from "@/modules/home/ui/components/type";
import { ArrowUp, Sparkle } from "lucide-react";
import React, { useState } from "react";

const Page = () => {
  const [value, setvalue] = useState("");
  return (
    <div className=" pt-29 px-4 md:pt-32 w-full h-screen flex flex-col">
      <div className=" max-w-7xl mx-auto flex flex-col gap-y-7">
        <div className=" w-full flex flex-col justify-center items-center gap-3 mt-6">
          <h2 className=" text-xl md:text-5xl text-center font-semibold">
            What is on Your mind
          </h2>
          <p className=" text-sm ">Connect to the world </p>
        </div>

        <div className=" relative max-w-xl min-w-sm  md:min-w-xl mx-auto h-35 bg-gradient-to-b from-blue-500/50 to-chart-2/80 rounded-lg p-[1px]">
          <Textarea
            value={value}
            onChange={(e) => {
              setvalue(e.target.value);
            }}
            placeholder=" what on your mind"
            className=" !ring-0 resize-none w-full h-full !rounded-lg max-w-xl  break-words !bg-background "
          />
          <div className=" absolute top-0 left-4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-lg w-[90%] h-[2px]  blur-xs animate-pulse "/>
          <div className=" absolute bottom-0 left-4 bg-gradient-to-r from-transparent via-primary to-transparent rounded-lg w-[90%] h-[2px]  blur-xs animate-pulse "/>
          <Button className=" absolute bottom-2 right-2 size-8 rounded-full  bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl ">
            <ArrowUp />
          </Button>

         
        </div>

        <div className=" flex flex-col justify-center items-center mt-8 gap-y-4 border-t border-primary/15">
          <div className=" flex flex-col justify-center items-center gap-y-3 ">
            <h1 className=" bg-clip-text bg-gradient-to-b from-primary to-chart-2 text-3xl text-transparent font-semibold mt-10">
              Get Ai Suggesting
            </h1>
            <TypewriterTextAnimate />
          </div>

          <div>
            <Button className="bg-gradient-to-b from-primary to-chart-3 drop-shadow-2xl ">
              <Sparkle className=" animate-pulse "/>
              Generate Message with AI
            </Button>
          </div>

          
        </div>
      </div>
    </div>
  );
};

export default Page;

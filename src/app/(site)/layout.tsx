import { Header } from "@/modules/home/ui/components/header";
import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative ">
      <div
        className=" absolute top-0 z-[-2] h-full w-screen
    bg-[radial-gradient(#00000033_1px,transparent_1px)] 
    dark:bg-[radial-gradient(#ffffff33_1px,transparent_1px)]
    [background-size:20px_20px]
    [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"
      ></div>
      <div className="w-screen h-screen flex flex-col ">
        <Header />
        <div className=" flex flex-1 max-w-screen-xl mx-auto">{children}</div>
      </div>
    </div>
  );
};

export default layout;

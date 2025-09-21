import React from "react";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className=" relative w-screen h-screen ">
      <div className="absolute top-0 z-[-2] h-screen w-screen 
  bg-[radial-gradient(#ffffff33_1px,transparent_1px)] 
  [background-size:20px_20px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      {children}
    </div>
  );
};

export default layout;
